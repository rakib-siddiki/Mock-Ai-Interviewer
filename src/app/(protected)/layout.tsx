import React from 'react';
import { HamburgerMenu, TheHeader } from './components';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    const navItems = [
        {
            url: '/dashboard',
            label: 'Dashboard',
        },
        {
            url: '/qustions',
            label: 'Qustions',
        },
        {
            url: '/upgrade',
            label: 'Upgrade',
        },
        {
            url: '/how-it-works',
            label: 'How it works?',
        },
    ];
    return (
        <main>
            <TheHeader navItems={navItems} className='max-md:hidden' />
            <div className='h-[300vh]'></div>
            <HamburgerMenu navItems={navItems} />
            {children}
        </main>
    );
};

export default PublicLayout;
