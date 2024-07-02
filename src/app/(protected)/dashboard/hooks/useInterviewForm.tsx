import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TInterviewFormSchema, interviewFormSchema } from '../components/InterviewForm/ZodSchema';
import { addInterview } from '@/app/(protected)/dashboard/actions/addInterview';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

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
        formState: { isSubmitting, isSubmitSuccessful, errors },
    } = form;
    const onSubmit = async (data: TInterviewFormSchema) => {
        const result = await addInterview(data);
        if (result?.error) {
            setError('root', { message: result?.error });
            return;
        }
        if ('mockId' in result) {
            toast('Interview created successfully!', {
                style: {
                    color: 'white',
                    background: 'green',
                },
            });
            router.replace(`/dashboard/interviews/${result?.mockId}`);
            return;
        }
    };

    return { form, handleSubmit, isSubmitSuccessful, control, onSubmit, isSubmitting, errors };
};
