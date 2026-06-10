import { TInterviewDetails } from '@/app/(protected)/dashboard/actions/interviewDetails';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { InterViewListsSkeleton } from '.';
import { DeleteInterviewButton } from './DeleteInterviewButton';
import {
    Briefcase,
    Calendar,
    Sparkles,
    ArrowRight,
    Bot,
    Info,
    AlertCircle,
    Clock,
    Cpu,
} from 'lucide-react';

interface InterViewListsProps {
    data: TInterviewDetails[] | null;
    error?: string;
}

const InterViewLists = ({ data, error }: InterViewListsProps) => {
    const displayList = data ?? [];

    if (displayList.length === 0 && !error) {
        return (
            <div className='flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/20 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/5'>
                <div className='relative mb-6 flex justify-center'>
                    {/* Glowing gradient background circle */}
                    <div className='absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-xl' />
                    <div className='relative flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950'>
                        <Bot
                            className='h-8 w-8 animate-bounce text-indigo-500'
                            style={{ animationDuration: '3s' }}
                        />
                        <Sparkles className='absolute right-1.5 top-1.5 h-3.5 w-3.5 animate-pulse text-purple-400' />
                    </div>
                </div>

                <h3 className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-2xl'>
                    Ready to Ace Your Next Interview?
                </h3>
                <p className='mx-auto mt-2 max-w-md text-sm text-zinc-500 dark:text-zinc-400'>
                    Practice with hyper-realistic AI mock interviews tailored to your experience.
                    Get instant scoring feedback and answer analysis.
                </p>

                {/* Visual Steps */}
                <div className='mt-8 grid w-full max-w-2xl gap-4 text-left sm:grid-cols-3'>
                    <div className='rounded-xl border border-zinc-200/60 bg-white/40 p-4 dark:border-zinc-800/60 dark:bg-zinc-950/20'>
                        <div className='mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-100/50 bg-indigo-50 text-xs font-semibold text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400'>
                            1
                        </div>
                        <h4 className='text-xs font-bold text-zinc-800 dark:text-zinc-200'>
                            Setup Profile
                        </h4>
                        <p className='mt-1 text-[11px] leading-normal text-zinc-500 dark:text-zinc-400'>
                            Provide your job position, specific technologies, and experience level.
                        </p>
                    </div>
                    <div className='rounded-xl border border-zinc-200/60 bg-white/40 p-4 dark:border-zinc-800/60 dark:bg-zinc-950/20'>
                        <div className='mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-100/50 bg-indigo-50 text-xs font-semibold text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400'>
                            2
                        </div>
                        <h4 className='text-xs font-bold text-zinc-800 dark:text-zinc-200'>
                            Answer Questions
                        </h4>
                        <p className='mt-1 text-[11px] leading-normal text-zinc-500 dark:text-zinc-400'>
                            Respond to AI-generated tech questions using voice/video interface.
                        </p>
                    </div>
                    <div className='rounded-xl border border-zinc-200/60 bg-white/40 p-4 dark:border-zinc-800/60 dark:bg-zinc-950/20'>
                        <div className='mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-100/50 bg-indigo-50 text-xs font-semibold text-indigo-600 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400'>
                            3
                        </div>
                        <h4 className='text-xs font-bold text-zinc-800 dark:text-zinc-200'>
                            Analyze Feedback
                        </h4>
                        <p className='mt-1 text-[11px] leading-normal text-zinc-500 dark:text-zinc-400'>
                            Compare answers with AI suggestions, see grades, and review
                            improvements.
                        </p>
                    </div>
                </div>

                <div className='mt-8 flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500'>
                    <Info className='size-3.5 text-indigo-500/70' />
                    <span>
                        Click the{' '}
                        <span className='font-semibold text-indigo-600 dark:text-indigo-400'>
                            + Add
                        </span>{' '}
                        button above to generate a new mock interview.
                    </span>
                </div>
            </div>
        );
    }

    return (
        <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Suspense fallback={<InterViewListsSkeleton />}>
                {!!error && (
                    <Card className='col-span-full border border-red-200/50 bg-red-50/10 p-6 text-center dark:border-red-900/30 dark:bg-red-950/5'>
                        <CardContent className='flex flex-col items-center justify-center space-y-3 p-6'>
                            <div className='flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400'>
                                <AlertCircle className='h-6 w-6' />
                            </div>
                            <h4 className='text-red-850 text-lg font-bold dark:text-red-300'>
                                Failed to load interviews
                            </h4>
                            <p className='max-w-md text-sm text-red-600/80 dark:text-red-400/80'>
                                {error}
                            </p>
                        </CardContent>
                    </Card>
                )}

                {displayList.map(({ jobRole, techStack, createdAt, yearsOfExperience, mockId }) => {
                    // Split the tech stack into individual tags for a clean badge list
                    const techBadges = techStack
                        .split(/[\s,|]+/)
                        .filter(Boolean)
                        .slice(0, 4);

                    return (
                        <Card
                            key={mockId}
                            className='group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-indigo-400/40'
                        >
                            {/* Subtle glowing gradient overlay on card hover */}
                            <div className='absolute -left-16 -top-16 h-32 w-32 rounded-full bg-indigo-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-indigo-400/5' />

                            <CardContent className='z-10 flex h-full flex-col justify-between p-6'>
                                <div className='space-y-4'>
                                    {/* Card Header Info */}
                                    <div className='flex items-start justify-between gap-4'>
                                        <div className='space-y-1.5'>
                                            <div className='flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400'>
                                                <Cpu className='size-3.5' />
                                                <span>AI Session</span>
                                            </div>
                                            <h3
                                                className='line-clamp-1 text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400'
                                                title={jobRole}
                                            >
                                                {jobRole}
                                            </h3>
                                        </div>
                                        <div className='flex shrink-0 items-center gap-2'>
                                            <span className='inline-flex shrink-0 items-center gap-1 rounded-full border border-indigo-100/50 bg-indigo-50/80 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-400'>
                                                <Briefcase className='size-3' />
                                                {yearsOfExperience}{' '}
                                                {Number(yearsOfExperience) === 1 ? 'yr' : 'yrs'} exp
                                            </span>
                                            <DeleteInterviewButton mockId={mockId} />
                                        </div>
                                    </div>

                                    {/* Tech Stack Badges */}
                                    <div className='flex min-h-[24px] flex-wrap gap-1.5'>
                                        {techBadges.map((tech) => (
                                            <span
                                                key={tech}
                                                className='inline-flex items-center rounded-md border border-zinc-200/20 bg-zinc-100/80 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:border-zinc-700/20 dark:bg-zinc-800/80 dark:text-zinc-300'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Info */}
                                <div className='mt-6 space-y-4'>
                                    <div className='flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500'>
                                        <div className='flex items-center gap-1.5'>
                                            <Calendar className='size-3.5' />
                                            <span>{formatDate(createdAt)}</span>
                                        </div>
                                        <div className='flex items-center gap-1.5'>
                                            <Clock className='size-3.5 text-emerald-500' />
                                            <span className='font-medium text-emerald-600 dark:text-emerald-400/90'>
                                                Completed
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='grid grid-cols-2 gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-900'>
                                        <Link
                                            href={`/dashboard/interviews/${mockId}/feedback`}
                                            className='w-full'
                                        >
                                            <Button
                                                variant='outline'
                                                className='h-9 w-full border-zinc-200 text-xs font-semibold hover:bg-zinc-50 hover:text-indigo-600 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-indigo-400'
                                            >
                                                Feedback
                                            </Button>
                                        </Link>
                                        <Link
                                            href={`/dashboard/interviews/${mockId}/start`}
                                            className='w-full'
                                        >
                                            <Button className='group/btn flex h-9 w-full items-center justify-center gap-1 border-0 bg-gradient-to-r from-indigo-600 to-violet-600 text-xs font-semibold text-white shadow-sm transition-all hover:from-indigo-700 hover:to-violet-700 hover:shadow'>
                                                Start Again
                                                <ArrowRight className='size-3.5 transition-transform group-hover/btn:translate-x-0.5' />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </Suspense>
        </section>
    );
};

export default InterViewLists;
