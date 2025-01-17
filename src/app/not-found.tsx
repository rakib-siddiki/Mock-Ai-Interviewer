import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className='relative z-10 flex min-h-dvh w-full items-center justify-between overflow-hidden py-10'>
            <Link
                href={'/dashboard'}
                className='fixed left-4 top-4 rounded-full lg:hidden'
            >
                <Icons.ArrowLeftCircleIcon className='size-8 stroke-primary' />
            </Link>
            <Image
                width={1000}
                height={1000}
                className='block w-full'
                src='https://cdn.easyfrontend.com/pictures/httpcodes/six-character.svg'
                alt='error-page'
            />
            <div className='container hidden lg:block'>
                <div className='text-center'>
                    <h2 className='mb-6 text-9xl font-bold leading-none'>
                        404
                    </h2>
                    <p className='text-4xl opacity-80 xl:text-5xl'>
                        Page not Available!
                    </p>
                    <Link
                        href='/'
                        className='mt-4 inline-block p-2 text-2xl font-bold hover:underline'
                    >
                        <Button className=''>Go Back</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default NotFoundPage;
