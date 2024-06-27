import React from 'react';
import { HamburgerMenu, TheHeader } from './components';
import { NAV_ITEMS } from './static';
import { Toaster } from '@/components/ui/sonner';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <TheHeader navItems={NAV_ITEMS} className='max-md:hidden' />
            <HamburgerMenu navItems={NAV_ITEMS} />
            {children}
            <Toaster />
        </main>
    );
};

export default PublicLayout;
