import { Card, CardContent } from '@/components/ui/card';
import React, { FC, Suspense } from 'react';
import { GetInterviewDetails } from '@/app/(protected)/dashboard/actions/interviewDetails';
import { InterViewDetailsSkeleton } from '.';
import { notFound } from 'next/navigation';
import { GET_STARTED_NOTE } from '@/app/(protected)/static';
import { WebCam, CardNote, Container } from '..';
interface IProps {
    mockId: string;
}
const GetStarted: FC<IProps> = async ({ mockId }) => {
    const res = await GetInterviewDetails(mockId);
    if (Array.isArray(res) && res.length === 0) notFound();
    const err = (res as { error: string })?.error;
    const data = Array.isArray(res) && res.length > 0 ? res[0] : null;

    return (
        <Container>
            <h1 className='mb-5 text-3xl font-extrabold text-indigo-500'>{"Let's"} Get Started</h1>
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
                <article className='space-y-6'>
                    <Card>
                        <CardContent className='space-y-4 p-5 font-medium capitalize *:block md:text-lg'>
                            <Suspense fallback={<InterViewDetailsSkeleton />}>
                                {err ? (
                                    <p className='!grid h-28 w-full place-items-center text-balance text-center text-red-500'>
                                        {err}
                                        <br />
                                        😢
                                    </p>
                                ) : (
                                    <>
                                        <span>Job Role: {data?.jobRole}</span>
                                        <span>
                                            Tech Stacks: {data?.techStack.replace(/ /g, ' | ')}
                                        </span>
                                        <span>Years of Experience: {data?.yearsOfExperience}</span>
                                    </>
                                )}
                            </Suspense>
                        </CardContent>
                    </Card>
                    <CardNote
                        {...GET_STARTED_NOTE}
                        className='bg-yellow-50 *:text-yellow-500 dark:bg-yellow-400/50'
                    />
                </article>
                <WebCam mockId={mockId} buttonText='Start Interview' pathUrl='start' />
            </div>
        </Container>
    );
};

export default GetStarted;
