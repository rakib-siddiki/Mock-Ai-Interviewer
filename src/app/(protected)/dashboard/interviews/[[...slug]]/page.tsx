import React from 'react';
import { Feedback, GetStarted, InterViewLists, StartInterview } from './components';
import { Container } from '@/app/(protected)/components/Container';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPreviousInterviews } from '@/app/(protected)/dashboard/actions/interviewDetails';

interface IProps {
    params: {
        slug?: string[];
    };
}

export const generateMetadata = ({ params }: IProps): Metadata => {
    const slug = params?.slug?.[1] || '';
    return { title: `Interview ${slug}` };
};

const InterviewsPage = async ({ params }: IProps) => {
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

    const res = await getPreviousInterviews();
    const data = Array.isArray(res) && res.length > 0 ? res : null;
    const error = (res as { error: string })?.error;

    return (
        <Container>
            <InterViewLists data={data} error={error} />
        </Container>
    );
};

export default InterviewsPage;
