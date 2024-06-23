import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TInterviewFormSchema, interviewFormSchema } from '../components/InterviewForm/ZodSchema';
import { addInterview } from '@/app/(protected)/dashboard/actions/addInterview';
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
        console.log('🚀 > file: useInterviewForm.tsx:25 > onSubmit > result:', result);
        if (result?.error) {
            setError('root', { message: result?.error });
            return;
        }
        router.replace(`/dashboard/interviews/${result?.mockId}`);
    };

    return { form, handleSubmit, control, onSubmit, isSubmitting, errors };
};
