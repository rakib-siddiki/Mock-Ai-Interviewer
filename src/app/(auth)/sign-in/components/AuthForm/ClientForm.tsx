'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PASSWORD_LESS_CONNECTION_ID } from '@/configs/env';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import React, { useState } from 'react';

const ClientForm = () => {
    const [email, setEmail] = useState<string>('');
    return (
        <section className='grid gap-4'>
            <div className='grid gap-2'>
                <label htmlFor='email'>Email</label>
                <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <LoginLink
                authUrlParams={{
                    connection_id: PASSWORD_LESS_CONNECTION_ID,
                    login_hint: email,
                }}
            >
                <Button type='button' className='w-full'>
                    Login
                </Button>
            </LoginLink>
        </section>
    );
};

export default ClientForm;
