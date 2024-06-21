'use client';
import { Icons } from '@/components/core';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState } from 'react';
import { InterviewForm } from './InterviewForm';
const AddButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='w-full max-w-xs'>
            {/* <div className='relative w-full cursor-pointer overflow-hidden  before:absolute before:-left-[145px] before:-top-1/2 before:h-[500px] before:w-6 before:rotate-45 before:bg-primary before:opacity-5 before:duration-500  hover:before:left-full hover:before:translate-x-[180%]  '>
            </div> */}
            <button
                className='group relative inline-block w-full overflow-clip transition active:scale-95'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Card className='rounded-xl transition hover:bg-zinc-50 dark:hover:bg-gray-900'>
                    <CardContent className='p-8'>
                        <span className='flex items-center justify-center gap-1'>
                            <Icons.Plus className='size-5' />
                            <h2 className='font-medium'>Add</h2>
                        </span>
                    </CardContent>
                </Card>
                <span className='absolute top-1/2 inline-block h-3 w-full translate-x-1/2 -rotate-45 bg-gradient-to-t from-zinc-300 to-zinc-100 group-hover:animate-slide-in-once dark:from-zinc-100/50 dark:to-primary/50' />
            </button>
            <InterviewForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
};

export default AddButton;
