import React, { FC } from 'react';
import { GetStarted } from './components';
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
    switch (params?.slug?.length) {
        case 1:
            return <GetStarted slug={params?.slug[0]} />;
        case 2:
            if (params?.slug[1] === 'feedback')
                return (
                    <div className='grid h-screen place-items-center text-6xl'> Feedback Page </div>
                );
            if (params?.slug[1] === 'start')
                return (
                    <div className='grid h-screen place-items-center text-6xl'> Start Page </div>
                );
            return notFound();
        default:
            break;
    }
    return <div className='grid h-screen place-items-center text-6xl'> Interviews Page </div>;
};

export default InterviewsPage;
