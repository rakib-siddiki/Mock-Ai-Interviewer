import { Card, CardContent } from '@/components/ui/card';
import React, { FC, Suspense } from 'react';
import { GetInterviewDetails } from '@/app/(protected)/dashboard/actions/GetInterviewDetails';
import { Icons } from '@/components/core';
import { InterViewDetailsSkeleton, WebCam } from '.';
import { notFound } from 'next/navigation';
interface IProps {
    slug: string;
}
type TInterviewDetails = {
    id: string;
    jobRole: string;
    techStack: string;
    yearsOfExperience: string;
    jsonMockResponse: string;
    createdBy: string;
    createdAt: Date;
    mockId: string;
} | null;
type TInterviewDetailsResponse = TInterviewDetails[] | { error: string };
const GetStarted: FC<IProps> = async ({ slug }) => {
    const res: TInterviewDetailsResponse = await GetInterviewDetails(slug);
    if (Array.isArray(res) && res.length === 0) notFound();
    const err = (res as { error: string })?.error;
    const data: TInterviewDetails = Array.isArray(res) && res.length > 0 ? res[0] : null;

    return (
        <section className='container'>
            <div className='py-24 lg:p-24'>
                <h1 className='mb-5 text-3xl font-extrabold text-indigo-500'>
                    {"Let's"} Get Started
                </h1>
                <div className='grid gap-10 sm:grid-cols-2'>
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
                                            <span>
                                                Years of Experience: {data?.yearsOfExperience}
                                            </span>
                                        </>
                                    )}
                                </Suspense>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className='bg-yellow-50 p-5 *:text-yellow-500 dark:bg-yellow-400/50 max-md:text-sm'>
                                <span className='-m-1 inline-flex items-center gap-2'>
                                    <Icons.Lightbulb />
                                    Information
                                </span>
                                <p>
                                    Enable Video Web Cam and Microphone to Start your AI Generated
                                    Mock Interview, It Has 5 question which you can answer and at
                                    the last you will get the report on the basis of your answer.
                                    <br />
                                    <strong>
                                        NOTE: We never record your video , Web cam access you can
                                        disable at any time if you want
                                    </strong>
                                </p>
                            </CardContent>
                        </Card>
                    </article>
                    <WebCam interviewId={slug} />
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
