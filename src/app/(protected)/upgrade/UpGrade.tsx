'use client';
import { Icons } from '@/components/core';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { UPGRADE_CARD } from '../static';
import { cn } from '@/lib/utils';
const UpGrade = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const handleChangePlan = () => setIsMonthly(!isMonthly);
    return (
        <section>
            <div className='mb-10 space-y-4 text-center'>
                <h1 className='text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200'>
                    Pricing
                </h1>
                <p className='mx-auto w-1/2 text-gray-400'>
                    Choose between our Basic Plan, designed for individuals just starting their
                    interview preparation journey, and our Pro Plan.
                </p>
                <Button
                    onClick={handleChangePlan}
                    variant={isMonthly ? 'default' : 'outline'}
                    className={cn(
                        'mr-3 rounded-full border px-4 py-1 font-semibold transition duration-300 dark:border-indigo-600 dark:text-gray-50',
                        isMonthly && 'dark:bg-indigo-600 dark:text-gray-50',
                    )}
                >
                    Monthly
                </Button>
                <Button
                    onClick={handleChangePlan}
                    variant={!isMonthly ? 'default' : 'outline'}
                    className={cn(
                        'rounded-full border px-4 py-1 transition duration-300 dark:border-indigo-600',
                        !isMonthly && 'dark:bg-indigo-600 dark:text-gray-50',
                    )}
                >
                    Annually
                </Button>
            </div>
            <div className='mx-auto grid max-w-screen-md auto-rows-fr grid-cols-1 place-items-center gap-6 sm:grid-cols-2'>
                {UPGRADE_CARD.map(({ tier, features, annualPrice, monthlyPrice }) => (
                    <div
                        key={tier}
                        className='relative z-0 grid h-full grid-cols-subgrid place-items-center rounded-md border p-8 dark:border-indigo-600'
                    >
                        <span className='absolute top-0 rounded-b-lg bg-zinc-200 px-6 pb-2 pt-1 font-medium dark:bg-indigo-600 dark:text-gray-50'>
                            {tier}
                        </span>
                        <p className='my-6 text-4xl font-bold dark:text-indigo-600'>
                            {isMonthly ? monthlyPrice : annualPrice}
                        </p>
                        <ul className='space-y-2'>
                            {features.map((feature) => (
                                <li key={feature} className='items- flex space-x-2 text-sm'>
                                    <Icons.CurveTic />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className='mt-3 inline-block'>Subscribe</Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpGrade;
