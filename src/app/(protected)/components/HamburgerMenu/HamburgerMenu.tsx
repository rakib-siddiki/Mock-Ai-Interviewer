'use client';
import { ThemeSwitcher } from '@/components/core/ThemeSwitcher';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { FC, HTMLAttributes, useRef, useState } from 'react';

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer';
import { UserDetails, UserDetailsSkeleton } from '../UserInfo';
import { HamburgerIcon } from '.';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    navItems: {
        url: string;
        label: string;
    }[];
}
const HamburgerMenu: FC<IProps> = ({ navItems }) => {
    const [isHidden, setIsHidden] = useState(false);
    const [active, setActive] = useState(false);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);

    useMotionValueEvent(scrollY, 'change', (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 50) {
            setIsHidden(difference > 0);
            lastYRef.current = y;
        }
    });
    const { getUser } = useKindeBrowserClient();
    const user = getUser();
    return (
        <header className='md:hidden'>
            <Drawer open={active} onOpenChange={setActive}>
                {/* this two drawerTitle and drawerDecription component is used to prevent the browser console error  */}
                <DrawerTitle />
                <DrawerDescription />
                {/* this two drawerTitle and drawerDecription component is used to prevent the browser console error  */}
                <motion.div
                    animate={isHidden ? 'hidden' : 'visible'}
                    whileTap='visible'
                    onFocusCapture={() => setIsHidden(false)}
                    variants={{
                        hidden: {
                            y: '-85%',
                        },
                        visible: {
                            y: '0%',
                        },
                    }}
                    transition={{ duration: 0.3 }}
                    className='fixed top-2 z-10 flex w-full cursor-pointer items-center justify-center py-1'
                >
                    <div className='container'>
                        <nav className='flex w-full items-center justify-between gap-3 rounded-full bg-zinc-100 px-4 py-2 dark:bg-gray-800'>
                            <Link href='/dashboard'>
                                <svg
                                    className='h-6 w-6'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z'></path>
                                </svg>
                                <span className='sr-only'>Home</span>
                            </Link>
                            <div className='flex items-center gap-3'>
                                <ThemeSwitcher />
                                <HamburgerIcon
                                    isNavhidden={isHidden}
                                    active={active}
                                    setActive={setActive}
                                />
                            </div>
                        </nav>
                    </div>
                </motion.div>
                <DrawerContent>
                    <DrawerHeader>
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
                    </DrawerHeader>
                    <DrawerFooter>
                        {(navItems ?? []).map(({ url, label }) => (
                            <Link
                                href={url}
                                key={url}
                                className='block font-semibold'
                            >
                                {label}
                            </Link>
                        ))}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </header>
    );
};

export default HamburgerMenu;
