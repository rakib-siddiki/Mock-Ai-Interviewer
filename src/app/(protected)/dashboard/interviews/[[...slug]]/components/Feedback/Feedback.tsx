import React, { FC, Fragment, Suspense } from 'react';
import Container from '../Container';
import { getFeedback } from '@/app/(protected)/dashboard/actions/interviewDetails';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Lists } from '.';

interface IProps {
    mockId: string;
}
const Feedback: FC<IProps> = async ({ mockId }) => {
    const res = await getFeedback(mockId);
    const data = Array.isArray(res) && res.length > 0 ? res : null;
    const err = (res as { error: string })?.error;
    return err ? (
        <h1 className='grid h-svh place-items-center text-6xl font-bold text-red-500'>{err}</h1>
    ) : (
        <Container className='space-y-7'>
            <div className='space-y-3 *:text-balance'>
                <h1 className='text-3xl font-bold text-green-500'>Congratulation!</h1>
                <h2 className='text-2xl font-semibold'>Here is your interview feedback</h2>
                <span className='text-gray-400'>
                    Find below interview question with correct answer, Your answer and feedback for
                    improvement
                </span>
                <Link className='block' href={'/dashboard'}>
                    <Button>Go To Dashboard</Button>
                </Link>
            </div>
            <Suspense
                fallback={Array.from({ length: data?.length || 3 }, (_, i) => (
                    <div
                        key={i}
                        className='h-16 w-full animate-pulse rounded bg-gray-50 shadow-lg'
                    />
                ))}
            >
                {(data ?? []).map((item) => (
                    <Fragment key={item.question}>
                        <Lists {...item} />
                    </Fragment>
                ))}
            </Suspense>
        </Container>
    );
};

export default Feedback;
