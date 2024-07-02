/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Form as FormCore,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { INTERVIEW_FORM_FIELDS } from '@/app/(protected)/static';
import { Icons } from '@/components/core';
import { TInterviewFormSchema } from './ZodSchema';
import { useInterviewForm } from '../../hooks';

const Form = () => {
    const { form, handleSubmit, control, onSubmit, isSubmitting, isSubmitSuccessful, errors } =
        useInterviewForm();
    return (
        <section>
            <FormCore {...form}>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    {INTERVIEW_FORM_FIELDS.map(({ name, label, placeholder }) => (
                        <FormField
                            key={name}
                            control={control}
                            name={name as keyof TInterviewFormSchema}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{label}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={placeholder} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <p className='text-center text-sm font-medium capitalize text-destructive'>
                        {errors.root?.message}
                    </p>
                    <Button
                        disabled={isSubmitting || isSubmitSuccessful}
                        type='submit'
                        className='w-full gap-2 max-sm:h-9'
                    >
                        {isSubmitting ? (
                            <>
                                <Icons.Loader className='h-5 w-5 animate-spin' />
                                Generating...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </form>
            </FormCore>
        </section>
    );
};

export default Form;
