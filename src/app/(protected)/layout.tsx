import React from 'react';
import { HamburgerMenu, TheHeader } from './components';
import { NAV_ITEMS } from './static';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <TheHeader navItems={NAV_ITEMS} className='max-md:hidden' />
            <HamburgerMenu navItems={NAV_ITEMS} />
            {children}
        </main>
    );
};

export default PublicLayout;
