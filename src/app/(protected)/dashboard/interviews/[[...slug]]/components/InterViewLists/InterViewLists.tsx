import { getPreviousInterviews } from '@/app/(protected)/dashboard/actions/interviewDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { InterViewListsSkeleton } from '.';
const InterViewLists = async () => {
    const res = await getPreviousInterviews();
    const data = Array.isArray(res) && res.length > 0 ? res : null;
    const error = (res as { error: string })?.error;
    return data || error ? (
        <section className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            <Suspense fallback={<InterViewListsSkeleton />}>
                {!!error && (
                    <Card key={1} className='w-full max-w-md'>
                        <CardContent className='space-y-1 p-5 *:font-medium *:capitalize'>
                            <p className='grid h-52 place-items-center text-balance text-center text-red-500'>
                                {error}😢
                            </p>
                        </CardContent>
                    </Card>
                )}

                {(data ?? []).map(
                    ({ jobRole, techStack, createdAt, yearsOfExperience, mockId }) => (
                        <Card key={1} className='w-full max-w-md'>
                            <CardContent className='space-y-1 p-5 *:font-medium *:capitalize'>
                                <h2 className='text-2xl !font-bold text-indigo-500'>{jobRole}</h2>
                                <h3>{techStack.split(' ').join(' | ')}</h3>
                                <h3>{yearsOfExperience}</h3>
                                <span className='inline-block text-sm text-gray-500'>
                                    Created at: {formatDate(createdAt)}
                                </span>
                                <div className='!mt-4 flex items-center gap-4 *:inline-block *:w-full'>
                                    <Link href={`/dashboard/interviews/${mockId}/feedback`}>
                                        <Button className='w-full'>Feedback</Button>
                                    </Link>
                                    <Link href={`/dashboard/interviews/${mockId}/start`}>
                                        <Button className='w-full'>Start again</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ),
                )}
            </Suspense>
        </section>
    ) : (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='w-full max-w-md'>
                    <InterViewListsSkeleton />
                </div>
            ))}
        </div>
    );
};

export default InterViewLists;
