import React from 'react';
import { HOW_IT_WORKS_ADITIONAL_POINTS, HOW_IT_WORKS_POINTS } from '../static';
import { VideoPlayer } from './VideoPlayer';

const HowItWorks = () => {
    return (
        <article className='space-y-6 sm:space-y-8'>
            <section>
                <h1 className='mb-4 text-2xl font-bold leading-8 xs:-ml-2 xs:text-nowrap sm:text-3xl'>
                    <span className='hidden xs:inline-block'>🌟</span> Welcome to Mock AI
                    Interviewer <span className='hidden xs:inline-block'>🌟</span>
                </h1>
                <div className='space-y-2 *:text-balance'>
                    <h2 className='font-semibold text-gray-500 dark:text-gray-200 sm:text-lg'>
                        Your Ultimate AI-Powered Interview Practice Platform
                    </h2>
                    <p className='text-sm leading-relaxed text-gray-300'>
                        Ready to ace your next job interview? Mock AI Interviewer is here to help!
                        Whether
                        {"you're"} aiming for a technical role or looking to sharpen your
                        communication skills, our platform offers a seamless, personalized
                        experience tailored to your needs.
                    </p>
                </div>
            </section>
            <section>
                <h1 className='mb-4 text-nowrap text-2xl font-bold xs:-ml-2 sm:text-3xl'>
                    🚀 How It Works 🚀
                </h1>
                <ol className='space-y-4 font-medium'>
                    {HOW_IT_WORKS_POINTS.map(({ id, title, points }, index) => (
                        <li key={id} className='text-lg text-gray-500 dark:text-gray-200'>
                            {index + 1}. {title} <br />
                            {points.map((point) => (
                                <span
                                    key={point}
                                    className='mt-3 list-item w-2/3 list-inside list-disc text-sm text-gray-300'
                                >
                                    {point}
                                </span>
                            ))}
                        </li>
                    ))}
                </ol>
            </section>
            <section>
                <h1 className='sx:leading-10 mb-4 text-xl font-bold xs:-ml-2 xs:text-pretty sm:text-3xl'>
                    🎥 Video: See Mock AI Interviewer in Action! 🎥
                </h1>
                <p className='w-2/3 text-sm leading-relaxed text-gray-300'>
                    Watch our demo video to discover how easy it is to start using Mock AI
                    Interviewer. See real-time examples of setting up interviews, answering
                    questions, and receiving instant feedback.
                </p>
                <VideoPlayer />
            </section>
            <ol className='space-y-4 font-medium'>
                {HOW_IT_WORKS_ADITIONAL_POINTS.map(({ id, title, points }, index) => (
                    <li key={id} className='text-lg text-gray-500 dark:text-gray-200'>
                        {index + 1}. {title} <br />
                        {points.map((point) => (
                            <span
                                key={point}
                                className='mt-3 list-item w-2/3 list-inside list-disc text-sm text-gray-300'
                            >
                                {point}
                            </span>
                        ))}
                    </li>
                ))}
            </ol>
        </article>
    );
};

export default HowItWorks;
