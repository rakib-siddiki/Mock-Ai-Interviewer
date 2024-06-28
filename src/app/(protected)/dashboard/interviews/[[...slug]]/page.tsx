import React, { FC } from 'react';
import { Feedback, GetStarted, StartInterview } from './components';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface IProps {
    params: {
        slug: string[];
    };
}

export const generateMetadata = ({ params }: IProps): Metadata => {
    const slug = params?.slug?.[1] || '';
    return { title: `Interview ${slug}` };
};

const InterviewsPage: FC<IProps> = ({ params }) => {
    const mockId = params?.slug?.[0] || '';
    switch (params?.slug?.length) {
        case 1:
            return <GetStarted mockId={mockId} />;
        case 2:
            if (params?.slug[1] === 'feedback') return <Feedback mockId={mockId} />;
            if (params?.slug[1] === 'start') return <StartInterview mockId={mockId} />;
            return notFound();
        default:
            break;
    }
    return <div className='grid h-screen place-items-center text-6xl'> Interviews Page </div>;
};

export default InterviewsPage;
