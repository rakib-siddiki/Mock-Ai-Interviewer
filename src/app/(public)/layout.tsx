import React from 'react';
import { Metadata } from 'next';
import { SITE_TITLE_TEMPLATE_DEFAULT } from '@/configs';

export const metadata: Metadata = {
    title: {
        default: 'Home',
        template: SITE_TITLE_TEMPLATE_DEFAULT,
    },
};
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return <main>{children}</main>;
};

export default PublicLayout;
