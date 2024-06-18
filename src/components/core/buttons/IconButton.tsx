import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant: 'fill' | 'outline' | 'icon';
    className?: string;
}

const variants = {
    fill: `text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800`,
    outline: `text-indigo-700 border border-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-500 dark:text-indigo-500 dark:hover:text-white dark:focus:ring-indigo-800 dark:hover:bg-indigo-500`,
    icon: ``
};

const baseClasses = `focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2`;

const IconButton = ({ children, className, variant, ...rest }: IProps) => {
    return (
        <button
            {...rest}
            type='button'
            className={`${className} ${baseClasses} ${variants[variant]}`}
        >
            <span className='w-5 h-5 flex items-center justify-center'>
                {children || (
                    <svg
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 10'
                    >
                        <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M1 5h12m0 0L9 1m4 4L9 9'
                        />
                    </svg>
                )}
            </span>
        </button>
    );
};

export default IconButton;
