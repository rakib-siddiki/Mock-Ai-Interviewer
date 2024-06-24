import { GetInterviewqustions } from '@/app/(protected)/dashboard/actions/interviewDetails';
import React, { FC } from 'react';
import { CardNote, Container, QuestionsCard, RecordAnswer } from '..';
import { START_INTERVIEW_NOTE } from '@/app/(protected)/static';
interface IProps {
    mockId: string;
}

const StartInterview: FC<IProps> = async ({ mockId }) => {
    const res = await GetInterviewqustions(mockId);
    const data = Array.isArray(res) && res.length > 0 ? res : null;
    const error = (res as { error: string })?.error;
    return (
        <Container>
            <div className='grid gap-10 sm:grid-cols-2'>
                <article className='grid h-full grid-cols-subgrid gap-8'>
                    <QuestionsCard data={data} error={error} />
                    <CardNote
                        className='bg-indigo-50 *:text-indigo-700 dark:bg-indigo-400/50 dark:*:text-primary'
                        {...START_INTERVIEW_NOTE}
                    />
                </article>
                <RecordAnswer mockId={mockId} />
            </div>
        </Container>
    );
};

export default StartInterview;
