/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TInterviewFormSchema, interviewFormSchema } from './ZodSchema';
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

const Form = () => {
    const form = useForm<TInterviewFormSchema>({
        resolver: zodResolver(interviewFormSchema),
        defaultValues: {
            jobRole: '',
            techStack: '',
            yearsOfExperience: '',
        },
    });
    const onSubmit = (data: TInterviewFormSchema) => {
        console.log(data);
    };
    return (
        <section>
            <FormCore {...form}>
                <form
                    noValidate
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-4'
                >
                    {INTERVIEW_FORM_FIELDS.map(
                        ({ name, label, placeholder }) => (
                            <FormField
                                key={name}
                                control={form.control}
                                name={name as keyof TInterviewFormSchema}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{label}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={placeholder}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ),
                    )}
                    <Button
                        disabled={form.formState.isSubmitting}
                        type='submit'
                        className='w-full max-sm:h-9'
                    >
                        Submit
                    </Button>
                </form>
            </FormCore>
        </section>
    );
};

export default Form;
