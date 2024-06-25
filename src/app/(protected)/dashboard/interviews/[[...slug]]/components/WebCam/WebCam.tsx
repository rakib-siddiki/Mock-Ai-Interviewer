'use client';
import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useAnswerInText, useWebcamState } from '@/app/(protected)/dashboard/hooks';
import { Textarea } from '@/components/ui/textarea';

type TSpeechToText = {
    isListening: boolean;
    handleListen: () => void;
    transcript: string;
    isProcessing: boolean;
    handleRestart: () => void;
};

interface IProps extends Partial<TSpeechToText> {
    mockId?: string;
    buttonText: string;
    pathUrl: string;
    enebleAnswerOption?: boolean;
}

const WebCam: FC<IProps> = ({
    mockId,
    buttonText,
    pathUrl,
    enebleAnswerOption,
    ...useSpeechToText
}) => {
    const [webCamEnabled, setWebCamEnabled] = useWebcamState();
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isAnswerInText, setIsAnswerInText] = useState<boolean>(false);
    const { handleAnswerInText } = useAnswerInText(setUserAnswer, 300);
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const { handleListen, isListening, isProcessing, transcript, handleRestart } = useSpeechToText;

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
                            <Button onClick={() => {}}>Submit</Button>
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
                            {isProcessing && isListening ? (
                                <Icons.Mic />
                            ) : !isProcessing && !isListening ? (
                                'Start Recording'
                            ) : (
                                'Stop Recording'
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
