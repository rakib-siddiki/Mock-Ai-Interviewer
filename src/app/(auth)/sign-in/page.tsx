import React from 'react';
import { AuthForm } from './components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (user) {
        redirect('/');
    }
    return (
        <section className='grid min-h-dvh place-items-center'>
            <AuthForm
                title='Login'
                decription='Enter your email below to login to your account or log in with social networks.'
            />
        </section>
    );
};

export default SignInPage;
