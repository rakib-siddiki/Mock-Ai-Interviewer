import React from 'react';

const InterViewListsSkeleton = () => {
    return (
        <div className='h-52 animate-pulse space-y-4 rounded-xl bg-gray-50 p-5'>
            <div className='space-y-4 *:block *:h-4 *:w-full *:rounded-full *:bg-gray-100'>
                <span className='!w-3/5' />
                <span />
                <span className='!w-1/3' />
                <span className='!w-4/5' />
            </div>
            <div className='mt-4 flex items-center gap-4 *:h-10 *:w-full *:rounded *:bg-gray-100'>
                <div />
                <div />
            </div>
        </div>
    );
};

export default InterViewListsSkeleton;
