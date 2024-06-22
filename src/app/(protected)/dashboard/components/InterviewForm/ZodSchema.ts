import { z } from 'zod';

export const interviewFormSchema = z.object({
    jobRole: z.string().min(1, { message: 'Job role is required' }),
    techStack: z.string().min(1, { message: 'Tech stack is required' }),
    yearsOfExperience: z
        .string({ required_error: 'Years of Experience is required' })
        .refine((value) => /^\d+$/.test(value), {
            message: 'Years of Experience must be a number',
        })
        .refine((value) => parseInt(value) < 10, {
            message: 'Years of experience should be less than 10 years',
        }),
});

export type TInterviewFormSchema = z.infer<typeof interviewFormSchema>;
