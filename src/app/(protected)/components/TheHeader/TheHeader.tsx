'use client';
import { ThemeSwitcher } from '@/components/core/ThemeSwitcher';
import { cn } from '@/lib/utils';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, HTMLAttributes, useRef, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    navItems: {
        url: string;
        label: string;
    }[];
}
const TheHeader: FC<IProps> = ({ navItems, className }) => {
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastYRef = useRef(0);

    useMotionValueEvent(scrollY, 'change', (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 50) {
            setIsHidden(difference > 0);
            lastYRef.current = y;
        }
    });
    const pathname = usePathname();
    const { getUser } = useKindeBrowserClient();
    const user = getUser();
    return (
        <motion.div
            animate={isHidden ? 'hidden' : 'visible'}
            whileHover='visible'
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
            className={cn(
                'fixed top-0 z-10 flex w-full cursor-pointer justify-center pt-4',
                className,
            )}
        >
            <nav className='flex items-center justify-between gap-3 rounded-full bg-zinc-100 px-6 py-3 *:rounded-full *:px-3 *:py-1 *:transition *:duration-150 last:*:p-0 hover:*:bg-gray-200 dark:bg-gray-800 dark:hover:*:bg-gray-700'>
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
                {(navItems ?? []).map(({ url, label }) => (
                    <Link
                        href={url}
                        key={url}
                        className={cn(
                            pathname === url
                                ? 'bg-zinc-200 dark:bg-gray-700'
                                : null,
                        )}
                    >
                        {label}
                    </Link>
                ))}

                <ThemeSwitcher />
                <UserInfo user={user} />
            </nav>
        </motion.div>
    );
};

export default TheHeader;
