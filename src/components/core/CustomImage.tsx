import { cn } from '@/lib/utils';
import { getBase64 } from '@/lib/getbase4';
import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';
interface IProps extends ImageProps {}
export const CustomImage: FC<IProps> = async ({
    src,
    alt,
    className,
    ...rest
}) => {
    const base64 = await getBase64(String(src));
    return (
        <>
            {rest.placeholder === 'blur' ? (
                <Image
                    src={src}
                    alt={alt}
                    {...rest}
                    width={500}
                    height={500}
                    blurDataURL={base64}
                    className={cn(`object-cover`, className)}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    {...rest}
                    className={cn(`object-cover`, className)}
                />
            )}
        </>
    );
};
