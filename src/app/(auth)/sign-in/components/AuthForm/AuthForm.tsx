import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Icons, ThemeSwitcher } from '@/components/core';
import ClientForm from './ClientForm';
import { GITHUB_CONNECTION_ID, GOOGLE_CONNECTION_ID } from '@/configs/env';
interface IProps {
    title: string;
    decription: string;
}
const AuthForm: FC<IProps> = ({ title, decription }) => {
    return (
        <Card className='mx-auto max-w-sm'>
            <CardHeader>
                <div className='flex justify-between gap-3'>
                    <CardTitle className='text-2xl'>{title}</CardTitle>
                    <ThemeSwitcher />
                </div>
                <CardDescription>{decription}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='mb-4 grid gap-4'>
                    <RegisterLink
                        authUrlParams={{
                            connection_id: GOOGLE_CONNECTION_ID,
                        }}
                    >
                        <Button
                            variant='outline'
                            className='inline-flex w-full items-center gap-3'
                        >
                            <Icons.Google className='size-4' /> Login with
                            Google
                        </Button>
                    </RegisterLink>
                    <RegisterLink
                        authUrlParams={{
                            connection_id: GITHUB_CONNECTION_ID,
                        }}
                    >
                        <Button
                            variant='outline'
                            className='inline-flex w-full items-center gap-3'
                        >
                            <Icons.GitHub className='size-4' /> Login with
                            Github
                        </Button>
                    </RegisterLink>
                </div>
                <ClientForm />
                <div className='mt-4 text-center text-sm'>
                    {"Let's"} begin your journey with us
                </div>
            </CardContent>
        </Card>
    );
};

export default AuthForm;
