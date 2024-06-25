import React, { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import {
    LucideProps,
    Moon,
    SunMedium,
    CloudUpload,
    X,
    BarChart,
    Plus,
    ArrowLeftCircleIcon,
    Loader,
    Lightbulb,
    Webcam,
    Volume2Icon,
} from 'lucide-react';

export const Icons = {
    Moon,
    SunMedium,
    CloudUpload,
    X,
    BarChart,
    Plus,
    ArrowLeftCircleIcon,
    Loader,
    Lightbulb,
    Webcam,
    Volume2Icon,
    EmptyBox: (props: LucideProps) => (
        <svg
            {...props}
            viewBox='0 0 1024 1024'
            width='17'
            height='20'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M743.68 176.61952h-448l-220.16 240.52736v345.6c0 56.54528 45.85472 102.4 102.4 102.4h683.52c56.54528 0 102.4-45.85472 102.4-102.4v-345.6l-220.16-240.52736z m-416.43008 71.68h384.8704l176.52736 192.8704h-193.87392c0 0.28672 0.04096 0.57344 0.04096 0.84992 0 94.57664-76.94336 171.52-171.52 171.52-94.5664 0-171.52-76.94336-171.52-171.52 0-0.27648 0.04096-0.5632 0.0512-0.84992h-201.12384l176.54784-192.8704z m534.19008 545.16736h-683.52c-16.93696 0-30.72-13.78304-30.72-30.72v-249.89696h143.4112c30.33088 99.75808 123.02336 172.36992 232.69376 172.36992 109.68064 0 202.36288-72.61184 232.69376-172.36992h136.17152v249.89696a30.7712 30.7712 0 0 1-30.73024 30.72z'
                fill='inherite'
            />
        </svg>
    ),
    Google: (props: LucideProps) => (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path
                d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'
                fill='currentColor'
            ></path>
        </svg>
    ),
    GitHub: (props: LucideProps) => (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path
                d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'
                fill='currentColor'
            ></path>
        </svg>
    ),
    Mic: (props: ComponentProps<'div'>) => <MicWaveAnimation {...props} />,
};

const MicWaveAnimation = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                'flex h-4 gap-1 *:h-full *:w-1 *:transform *:rounded-lg *:bg-teal-400',
                className,
            )}
            {...props}
        >
            <div className='animate-quiet'></div>
            <div className='animate-quiet'></div>
            <div className='animate-quiet'></div>
            <div className='animate-loud'></div>
            <div className='animate-quiet'></div>
        </div>
    );
};
