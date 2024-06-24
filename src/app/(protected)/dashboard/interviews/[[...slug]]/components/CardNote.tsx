import { Icons } from '@/components/core';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { ComponentPropsWithoutRef, FC } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {
    heading: string;
    description: {
        text: string;
        strong?: string;
    };
}
const CardNote: FC<IProps> = ({ heading, description: { text, strong }, className }) => {
    return (
        <Card>
            <CardContent className={cn('size-full p-5 max-md:text-sm', className)}>
                <span className='-m-1 inline-flex items-center gap-2'>
                    <Icons.Lightbulb />
                    {heading}
                </span>
                <p>
                    {text}
                    {!!strong && (
                        <>
                            <br />
                            <strong>{strong}</strong>
                        </>
                    )}
                </p>
            </CardContent>
        </Card>
    );
};

export default CardNote;
