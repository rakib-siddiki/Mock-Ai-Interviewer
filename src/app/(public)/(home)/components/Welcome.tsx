import { ThemeSwitcher } from '@/components/core/ThemeSwitcher';

const Welcome = () => {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <div className='mb-2 flex gap-4'>
                Change theme: <ThemeSwitcher />
            </div>
            <h1 className='text-primary-900'>Wellcome</h1>
        </div>
    );
};

export default Welcome;
