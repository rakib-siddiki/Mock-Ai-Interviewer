import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sign In',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return <main className='container'>{children}</main>;
};

export default AuthLayout;
