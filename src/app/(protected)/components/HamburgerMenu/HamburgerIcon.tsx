'use client';
import { Icons } from '@/components/core';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface IProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    isNavhidden: boolean;
}

const HamburgerIcon: FC<IProps> = ({ active, setActive, isNavhidden }) => {
    return (
        <div>
            {active ? (
                <motion.div
                    animate={{ scale: 1, rotate: 90 }}
                    initial={{ rotate: 180 }}
                    className='rounded-full bg-gray-50 p-2 text-center dark:bg-gray-700'
                    onClick={() => setActive(!active)}
                >
                    <Icons.X />
                </motion.div>
            ) : (
                <motion.div
                    className={cn(
                        'rounded-full bg-gray-50/75 p-2 text-center dark:bg-gray-600/20',
                        isNavhidden && 'bg-transparent dark:bg-transparent',
                    )}
                    onClick={() => setActive(!active)}
                >
                    <Icons.BarChart className='-rotate-90' />
                </motion.div>
            )}
        </div>
    );
};

export default HamburgerIcon;
