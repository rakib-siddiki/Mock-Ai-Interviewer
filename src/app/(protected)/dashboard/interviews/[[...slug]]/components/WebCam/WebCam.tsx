/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useAnswerInText, useWebcamState } from '@/app/(protected)/dashboard/hooks';
import { Textarea } from '@/components/ui/textarea';
import { addUserAnswer } from '@/app/(protected)/dashboard/actions/addUserAnswer';
import { toast } from 'sonner';

type TSpeechToText = {
    isListening: boolean;
    handleListen: () => void;
    transcript: string;
    isProcessing: boolean;
    handleRestart: () => void;
};

interface IProps extends Partial<TSpeechToText> {
    data?: { question: string; answer: string }[] | null;
    mockId?: string;
    buttonText: string;
    pathUrl: string;
    enebleAnswerOption?: boolean;
    currentQuestion?: number;
}

const WebCam: FC<IProps> = ({
    currentQuestion = 0,
    data = null,
    mockId = '',
    buttonText,
    pathUrl,
    enebleAnswerOption,
    ...useSpeechToText
}) => {
    const [webCamEnabled, setWebCamEnabled] = useWebcamState();
    const [loading, setLoading] = useState<boolean>(false);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isAnswerInText, setIsAnswerInText] = useState<boolean>(false);
    const [submitAnswer, setSubmitAnswer] = useState<boolean>(false);
    const { handleAnswerInText } = useAnswerInText(setUserAnswer, 300);
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const { handleListen, isListening, isProcessing, transcript, handleRestart } = useSpeechToText;
    const submitWithVoice = !isAnswerInText && !isListening;
    const submitWithText = isAnswerInText && submitAnswer;

    useEffect(() => {
        const handleSavedAnswer = async () => {
            try {
                if ((submitWithText || submitWithVoice) && userAnswer.length > 10) {
                    setLoading(true);
                    const res = await addUserAnswer({ data, currentQuestion, userAnswer, mockId });
                    handleRestart && handleRestart();
                    setSubmitAnswer(false);
                    if ('error' in res) {
                        toast(res.error, {
                            style: {
                                color: 'white',
                                background: 'red',
                            },
                            duration: 1500,
                        });
                    }
                    if ('command' in res && res.command === 'INSERT') {
                        toast('Answer added successfully', {
                            style: {
                                background: 'green',
                                color: 'white',
                            },
                        });
                    }
                }
            } catch (error) {
                toast('Something went wrong', {
                    style: {
                        color: 'white',
                        background: 'red',
                    },
                    duration: 1500,
                });
            } finally {
                setLoading(false);
            }
        };
        void handleSavedAnswer();
    }, [isListening, submitAnswer, userAnswer]);

    const handleTextReset = () => {
        setUserAnswer('');
        handleRestart && handleRestart();
        if (textareaRef.current) {
            textareaRef.current.value = '';
        }
    };

    useEffect(() => {
        setUserAnswer(transcript ?? '');
    }, [transcript]);

    return (
        <div className='space-y-4'>
            {isAnswerInText ? (
                <Textarea
                    ref={textareaRef}
                    onChange={handleAnswerInText}
                    className='h-56 resize-none overflow-y-auto'
                />
            ) : (
                <>
                    <Card>
                        <CardContent className='grid grid-cols-subgrid place-items-center p-5 md:p-10'>
                            {webCamEnabled ? (
                                <div className='overflow-clip rounded-lg md:h-52'>
                                    <Webcam mirrored videoConstraints={{ width: 300 }} />
                                </div>
                            ) : (
                                <Icons.Webcam className='size-52' />
                            )}
                        </CardContent>
                    </Card>
                    <Button
                        className='w-full active:scale-95'
                        variant='secondary'
                        onClick={() => setWebCamEnabled((prev) => !prev)}
                    >
                        {webCamEnabled ? 'Disable' : 'Enable'} Web Cam And Microphone
                    </Button>
                </>
            )}

            {enebleAnswerOption && (
                <div className='flex justify-between gap-3 *:w-full *:max-xs:px-1'>
                    {isAnswerInText ? (
                        <>
                            <Button onClick={() => setSubmitAnswer(true)}>
                                {loading ? <Icons.Loader className='animate-spin' /> : 'Submit'}
                            </Button>
                            {!userAnswer && (
                                <Button onClick={() => setIsAnswerInText(false)}>
                                    Answer By Voice
                                </Button>
                            )}
                            {userAnswer && <Button onClick={handleTextReset}>Clear</Button>}
                        </>
                    ) : (
                        <Button onClick={() => setIsAnswerInText(true)}>Answer In Text</Button>
                    )}

                    {!isAnswerInText && (
                        <Button onClick={handleListen}>
                            {loading ? (
                                <Icons.Loader className='animate-spin' />
                            ) : isProcessing && isListening ? (
                                <Icons.Mic />
                            ) : !isProcessing && !isListening ? (
                                'Start Recording'
                            ) : (
                                'Stop Recording '
                            )}
                        </Button>
                    )}
                </div>
            )}
            <div className='flex justify-end'>
                <Link href={`${mockId}/${pathUrl}`}>
                    <Button
                        className='inline-flex items-center gap-1 transition-colors duration-300'
                        variant='outline'
                    >
                        {buttonText}
                        <Icons.ArrowLeftCircleIcon className='size-4 -rotate-180' />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default WebCam;
