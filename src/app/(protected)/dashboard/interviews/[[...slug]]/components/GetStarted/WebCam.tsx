'use client';
import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import Webcam from 'react-webcam';
interface IProps {
    interviewId?: string;
}
const WebCam: FC<IProps> = ({ interviewId }) => {
    const [webCamEnabled, setWebCamEnabled] = useState(false);
    return (
        <div className='space-y-4'>
            <Card>
                <CardContent className='grid grid-cols-subgrid place-items-center p-10'>
                    {webCamEnabled ? (
                        <div className='overflow-clip rounded-lg md:h-52'>
                            <Webcam
                                mirrored
                                videoConstraints={{ width: 300 }}
                                onUserMedia={() => setWebCamEnabled(true)}
                                onUserMediaError={() => setWebCamEnabled(false)}
                            />
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
            <Link href={`${interviewId}/start`} className='flex justify-end'>
                <Button
                    className='inline-flex items-center gap-1 transition-colors duration-300'
                    variant='outline'
                >
                    Start
                    <Icons.ArrowLeftCircleIcon className='size-4 -rotate-180' />
                </Button>
            </Link>
        </div>
    );
};

export default WebCam;
