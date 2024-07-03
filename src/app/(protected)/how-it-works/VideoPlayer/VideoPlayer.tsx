'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { PlyrSource } from 'plyr-react';
const Plyr = dynamic(
    () =>
        import('plyr-react').then((mod) => ({
            default: mod.default,
        })),
    {
        ssr: false,
    },
);

import 'plyr-react/plyr.css';
const VideoPlayer = () => {
    const videoSrc: PlyrSource = {
        type: 'video',
        sources: [
            {
                src: '/api/video',
                type: 'video/mp4',
            },
        ],
    };
    return (
        <div className='aspect-video w-full max-w-screen-md'>
            <div className='mt-3 hidden overflow-hidden rounded xs:block'>
                <Plyr source={videoSrc} muted />
            </div>
            <video className='w-full xs:hidden' controls>
                <source src='/api/video' type='video/mp4' />
            </video>
        </div>
    );
};

export default VideoPlayer;
