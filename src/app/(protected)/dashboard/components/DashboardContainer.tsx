import React from 'react';
import { DashBoardHeading } from '.';
import { AddButton } from './AddButton';
import { InterViewLists } from '@/app/(protected)/dashboard/interviews/[[...slug]]/components';

const DashBoardContainer = () => {
    return (
        <section className='container'>
            <div className='space-y-7 py-24 sm:space-y-10 md:py-28'>
                <DashBoardHeading />
                <AddButton />
                <div>
                    <h2 className='text-3xl font-extrabold text-indigo-500'>
                        Your previous interviews
                    </h2>
                    <h6 className='text-gray-500'>
                        you will be able to check your previous interviews and feedback below here
                    </h6>
                </div>
                <InterViewLists />
            </div>
        </section>
    );
};

export default DashBoardContainer;
