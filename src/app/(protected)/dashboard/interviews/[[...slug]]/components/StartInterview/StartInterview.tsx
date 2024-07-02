import { GetInterviewqustions } from '@/app/(protected)/dashboard/actions/interviewDetails';
import React, { FC } from 'react';
import { Container } from '@/app/(protected)/components/Container';
import { SartInterviewClient } from '.';
interface IProps {
    mockId: string;
}

const StartInterview: FC<IProps> = async ({ mockId }) => {
    const res = await GetInterviewqustions(mockId);
    const data = Array.isArray(res) && res.length > 0 ? res : null;
    const error = (res as { error: string })?.error;
    return (
        <Container>
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
                <SartInterviewClient data={data} error={error} mockId={mockId} />
            </div>
        </Container>
    );
};

export default StartInterview;
