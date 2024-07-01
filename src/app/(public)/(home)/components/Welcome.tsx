import { Icons } from '@/components/core';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function Welcome() {
    return (
        <div className='overflow-hidden !bg-white bg-background-grid'>
            <section className='z-50'>
                <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
                    <Link
                        href='https://github.com/rakib-siddiki?tab=repositories'
                        className='mb-7 inline-flex items-center justify-between rounded-full bg-zinc-100 px-1 py-1 pr-4 text-sm text-gray-700 shadow transition duration-300 hover:bg-zinc-200'
                        role='alert'
                    >
                        <span className='mr-3 rounded-full bg-gray-800 px-4 py-1.5 text-xs text-white'>
                            New
                        </span>{' '}
                        <span className='text-sm font-medium'>
                            Rakib {"Siddiki's"} All new Apps
                        </span>
                        <Icons.ArrowRight />
                    </Link>
                    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
                        Your Personal AI Interview Coach
                    </h1>
                    <p className='mb-8 text-balance text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48'>
                        Double your chances of landing that job offer with our AI-powered interview
                        preparation tool.
                    </p>
                    <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
                        <Link
                            href='/dashboard'
                            className='inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-primary dark:bg-gray-800'
                        >
                            Get Started
                            <Icons.ArrowRight />
                        </Link>
                        <Link
                            href='#'
                            className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-zinc-100 focus:ring-4 focus:ring-gray-100'
                        >
                            <Icons.Video />
                            Watch video
                        </Link>
                    </div>
                    <div className='mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36'>
                        <span className='font-semibold uppercase text-gray-400'>FEATURED IN</span>
                        <div className='mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between'>
                            <Link href='#' className='mr-5 hover:text-gray-800 max-lg:mb-5'>
                                <Icons.Youtube />
                            </Link>
                            <Link href='#' className='mr-5 hover:text-gray-800 max-lg:mb-5'>
                                <Icons.ProductHunt />
                            </Link>
                            <Link href='#' className='mr-5 hover:text-gray-800 max-lg:mb-5'>
                                <Icons.Raddit />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='z-50 mx-auto mb-10 h-full max-w-screen-xl bg-white px-4 py-8 text-center lg:px-12 lg:py-16'>
                <h2 className='text-3xl font-bold text-gray-800'>How it Works?</h2>
                <h2 className='text-md text-gray-500'>
                    Give mock interview in just 3 simplar easy step
                </h2>

                <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <Link
                        className='block rounded-xl border border-gray-200 bg-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
                        href='/dashboard'
                    >
                        <AtomIcon className='h-8 w-8' />

                        <h2 className='mt-4 text-xl font-bold text-black'>
                            Write promot for your form
                        </h2>

                        <p className='mt-1 text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </Link>

                    <a
                        className='block rounded-xl border border-gray-200 bg-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
                        href='#'
                    >
                        <Edit className='h-8 w-8' />

                        <h2 className='mt-4 text-xl font-bold text-black'>Edit Your form </h2>

                        <p className='mt-1 text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>

                    <a
                        className='block rounded-xl border border-gray-200 bg-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
                        href='#'
                    >
                        <Share2 className='h-8 w-8' />

                        <h2 className='mt-4 text-xl font-bold text-black'>
                            Share & Start Accepting Responses
                        </h2>

                        <p className='mt-1 text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </a>
                </div>

                <div className='mt-12 text-center'>
                    <a
                        href='/sign-in'
                        className='inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400'
                    >
                        Get Started Today
                    </a>
                </div>
            </section>
        </div>
    );
}
