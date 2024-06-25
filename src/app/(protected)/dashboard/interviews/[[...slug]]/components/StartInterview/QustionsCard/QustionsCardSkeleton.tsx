import React from 'react';

const QustionsCardSkeleton = () => {
    return (
        <div className='relative !mt-0 *:block *:animate-pulse *:rounded'>
            <div className='!flex flex-wrap items-center gap-3'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <span
                        className='inline-block h-5 w-20 animate-pulse rounded-full bg-gray-100 transition lg:w-24'
                        key={index}
                    />
                ))}
            </div>
            <span className='mt-4 h-3 w-11/12 bg-gray-100' />
            <span className='mt-3 h-3 w-5/6 bg-gray-100' />
            <span className='mt-6 size-6 bg-gray-100' />
            <span className='absolute bottom-0 right-0 h-7 w-20 bg-gray-100' />
        </div>
    );
};

export default QustionsCardSkeleton;

// *:inline-block *:animate-pulse *:rounded-full *:bg-gray-100
