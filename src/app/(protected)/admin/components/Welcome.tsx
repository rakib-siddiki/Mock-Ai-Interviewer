import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Welcome = () => {
    return (
        <div className='h-screen flex items-center flex-col justify-center'>
            <div className='flex mb-2 gap-4'>
                Change theme: <ThemeSwitcher />
            </div>
            <h1 className='text-primary-900'>Wellcome</h1>
        </div>
    );
};

export default Welcome;
