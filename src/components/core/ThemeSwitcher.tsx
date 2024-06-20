'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icons } from './Icons';
import { motion } from 'framer-motion';
export const ThemeSwitcher = ({ className }: { className?: string }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            {!mounted ? (
                <button
                    className={`w-fit duration-200 hover:scale-110 active:scale-100`}
                >
                    <span>
                        <Icons.Moon
                            className={`${className}stroke-gray-800 size-6 stroke-[1.25px] dark:hidden`}
                        />
                        <Icons.SunMedium
                            className={`${className} hidden size-6 stroke-gray-50 stroke-[1.25px] dark:block`}
                        />
                    </span>
                </button>
            ) : (
                <button
                    className={`w-fit duration-200`}
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'light' ? (
                        <motion.div
                            whileTap={{
                                rotate: 180,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Icons.Moon
                                className={`${className} size-6 stroke-gray-800 stroke-[1.25px]`}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            whileTap={{
                                rotate: -180,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Icons.SunMedium
                                className={`${className} size-6 stroke-gray-50 stroke-[1.25px]`}
                            />
                        </motion.div>
                    )}
                </button>
            )}
        </>
    );
};
