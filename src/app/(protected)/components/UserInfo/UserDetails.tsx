import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { FC } from 'react';
interface IProps {
    picture: string;
    firstName: string;
    lastName: string;
    email: string;
}
const UserDetails: FC<IProps> = ({ picture, firstName, lastName, email }) => {
    return (
        <div className='flex items-center gap-2 border-b border-b-gray-100/50 pb-4 dark:border-b-gray-700'>
            <Avatar>
                <AvatarImage src={picture} alt='User Avatar' />
                <AvatarFallback className='animate-pulse bg-zinc-300'></AvatarFallback>
            </Avatar>
            <div className='text-left'>
                <h3 className='text-xl font-medium'>{`${firstName} ${lastName}`}</h3>
                <span className='text-sm font-medium'>{email}</span>
            </div>
        </div>
    );
};

export default UserDetails;
