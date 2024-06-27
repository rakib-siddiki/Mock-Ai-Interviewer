'use client';
import React, { FC, useState } from 'react';
import { CardNote, QuestionsCard, RecordAnswer } from '..';
import { START_INTERVIEW_NOTE } from '@/app/(protected)/static';
import { useSpeechToText } from '@/app/(protected)/dashboard/hooks';
interface IProps {
    data: { question: string; answer: string }[] | null;
    error: string;
    mockId: string;
}
const SartInterviewClient: FC<IProps> = ({ data, error, mockId }) => {
    const SpeechToText = useSpeechToText();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    return (
        <>
            <article className='grid h-full grid-cols-subgrid gap-8'>
                <QuestionsCard
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    resetSpeech={SpeechToText.handleRestart}
                    data={data}
                    error={error}
                />
                <CardNote
                    className='bg-indigo-50 *:text-indigo-700 dark:bg-indigo-400/50 dark:*:text-primary'
                    {...START_INTERVIEW_NOTE}
                />
            </article>
            <RecordAnswer
                currentQuestion={currentQuestion}
                data={data}
                mockId={mockId}
                {...SpeechToText}
            />
        </>
    );
};

export default SartInterviewClient;
