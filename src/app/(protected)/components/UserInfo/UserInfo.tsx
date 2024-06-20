'use client';
import React, { FC, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { Button } from '@/components/ui/button';
import { UserDetails, UserDetailsSkeleton } from '.';
interface IProps {
    user: KindeUser | null;
}
const UserInfo: FC<IProps> = ({ user }) => {
    const [showPopover, setShowPopover] = useState(false);
    return (
        <section className='relative'>
            <Avatar onClick={() => setShowPopover((prev) => !prev)}>
                <AvatarImage src={user?.picture ?? ''} alt='User Avatar' />
                <AvatarFallback className='animate-pulse bg-zinc-300'></AvatarFallback>
            </Avatar>
            {showPopover && (
                <div className='absolute -bottom-5 left-0'>
                    <Popover open={showPopover}>
                        <PopoverTrigger />
                        <PopoverContent
                            onBlur={() => setShowPopover(false)}
                            className='bg-zinc-100 dark:bg-gray-800'
                        >
                            {user ? (
                                <UserDetails
                                    email={user?.email ?? ''}
                                    picture={user?.picture ?? ''}
                                    firstName={user?.given_name ?? ''}
                                    lastName={user?.family_name ?? ''}
                                />
                            ) : (
                                <UserDetailsSkeleton />
                            )}

                            <LogoutLink>
                                <Button className='mt-3 w-full font-bold focus-visible:ring-0'>
                                    Logout
                                </Button>
                            </LogoutLink>
                        </PopoverContent>
                    </Popover>
                </div>
            )}
        </section>
    );
};

export default UserInfo;
