import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
interface IProps extends HTMLAttributes<HTMLDivElement> {}
const Container: React.FC<IProps> = ({ children, className }) => {
    return (
        <section className='container'>
            <div className={cn(`py-24 lg:p-24`, className)}>{children}</div>
        </section>
    );
};

export default Container;
