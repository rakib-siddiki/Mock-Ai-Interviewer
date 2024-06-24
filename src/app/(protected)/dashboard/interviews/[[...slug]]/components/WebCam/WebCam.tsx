'use client';
import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import Webcam from 'react-webcam';
import { useAnswerInText, useWebcamState } from '@/app/(protected)/dashboard/hooks';
import { Textarea } from '@/components/ui/textarea';
interface IProps {
    mockId?: string;
    buttonText: string;
    pathUrl: string;
}
const WebCam: FC<IProps> = ({ mockId, buttonText, pathUrl }) => {
    const [webCamEnabled, setWebCamEnabled] = useWebcamState();
    const [userAnswer, setUserAnswer] = useState<string>('');
    console.log('🚀 > file: WebCam.tsx:18 > userAnswer:', userAnswer);
    const { handleAnswerInText } = useAnswerInText(setUserAnswer, 300);
    const isAnswerInText = false;
    return (
        <div className='space-y-4'>
            {isAnswerInText ? (
                <Textarea
                    onChange={handleAnswerInText}
                    className='h-56 resize-none overflow-y-auto'
                />
            ) : (
                <>
                    <Card>
                        <CardContent className='grid grid-cols-subgrid place-items-center p-10'>
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

            <div className='flex justify-between'>
                <Button
                    className='inline-flex items-center gap-1 transition-colors duration-300'
                    variant='outline'
                >
                    {'Answer in Text'}
                </Button>
                <Button
                    className='inline-flex items-center gap-1 transition-colors duration-300'
                    variant='outline'
                >
                    {isAnswerInText ? 'Stop Recording' : 'Start Recording'}
                </Button>
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
