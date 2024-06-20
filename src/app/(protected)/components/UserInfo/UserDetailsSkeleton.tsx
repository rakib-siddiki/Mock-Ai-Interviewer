import React from 'react';
const UserDetailsSkeleton = () => {
    return (
        <div className='flex h-14 animate-pulse items-center gap-2 border-b border-b-gray-100/50 pb-4 dark:border-b-gray-700'>
            <span className='h-10 w-10 rounded-full bg-gray-200' />
            <div className='w-10/12 space-y-3'>
                <div className='h-2 w-1/2 rounded-full bg-gray-200' />
                <div className='h-2 w-full rounded-full bg-gray-200' />
            </div>
        </div>
    );
};
export default UserDetailsSkeleton;
