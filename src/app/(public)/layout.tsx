import React from 'react';
import { TheHeader } from './components';
import { Metadata } from 'next';
import { SITE_TITLE_TEMPLATE_DEFAULT } from '@/configs';

export const metadata: Metadata = {
    title: {
        default: 'Home',
        template: SITE_TITLE_TEMPLATE_DEFAULT,
    },
};
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <TheHeader /> {children}
        </main>
    );
};

export default PublicLayout;
