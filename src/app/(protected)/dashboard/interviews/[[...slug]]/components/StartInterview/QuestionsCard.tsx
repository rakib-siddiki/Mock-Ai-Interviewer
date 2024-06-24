'use client';
import { useTextToSpeech } from '@/app/(protected)/dashboard/hooks';
import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { FC, Fragment, Suspense, useState } from 'react';
interface IProps {
    data: { question: string; answer: string }[] | null;
    error: string;
}
const QuestionsCard: FC<IProps> = ({ data, error }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { textToSpeech } = useTextToSpeech();
    return (
        <Card className='max-sm:order-1'>
            <CardContent className='h-full space-y-4 p-5'>
                <Suspense fallback={<div>Loading...</div>}>
                    {error ? (
                        <div className='grid place-content-center text-balance text-center text-red-500'>
                            {error}
                        </div>
                    ) : (
                        <>
                            <article className='flex flex-wrap items-center gap-3'>
                                {(data ?? []).map(({ question }, index) => {
                                    return (
                                        <Fragment key={question.replace(/ /g, '-')}>
                                            <span
                                                className={cn(
                                                    'inline-block cursor-pointer rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 transition',
                                                    index === currentQuestion &&
                                                        'bg-indigo-700 text-white',
                                                )}
                                                onClick={() => setCurrentQuestion(index)}
                                            >
                                                #Question {index + 1}
                                            </span>
                                        </Fragment>
                                    );
                                })}
                            </article>
                            <p className='font-medium'>{data?.[currentQuestion]?.question}</p>
                            <Icons.Volume2Icon
                                className='cursor-pointer'
                                onClick={() =>
                                    textToSpeech(data?.[currentQuestion]?.question ?? '')
                                }
                            />
                            <div className='/*:rounded-md flex items-center justify-end gap-3 *:w-20 *:bg-indigo-500 *:hover:bg-indigo-600 *:dark:bg-indigo-600 *:dark:text-primary *:dark:hover:bg-indigo-700'>
                                {currentQuestion > 0 && (
                                    <Button
                                        size='sm'
                                        onClick={() => setCurrentQuestion((prev) => prev - 1)}
                                    >
                                        Previous
                                    </Button>
                                )}
                                {data && currentQuestion < data?.length - 1 && (
                                    <Button
                                        size='sm'
                                        onClick={() => setCurrentQuestion((prev) => prev + 1)}
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </Suspense>
            </CardContent>
        </Card>
    );
};

export default QuestionsCard;
