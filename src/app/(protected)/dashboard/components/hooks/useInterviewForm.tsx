import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TInterviewFormSchema, interviewFormSchema } from '../InterviewForm/ZodSchema';
import { addInterview } from '@/app/(protected)/dashboard/actions';
import { useRouter } from 'next/navigation';

export const useInterviewForm = () => {
    const form = useForm<TInterviewFormSchema>({
        resolver: zodResolver(interviewFormSchema),
        defaultValues: {
            jobRole: '',
            techStack: '',
            yearsOfExperience: '',
        },
    });
    const router = useRouter();
    const {
        handleSubmit,
        control,
        setError,
        formState: { isSubmitting, errors },
    } = form;
    const onSubmit = async (data: TInterviewFormSchema) => {
        const result = await addInterview(data);
        if (result?.error) {
            setError('root', { message: result?.error });
        }
        router.replace(`/dashboard/interviews/${result?.mockId}`);
    };

    return { form, handleSubmit, control, onSubmit, isSubmitting, errors };
};
