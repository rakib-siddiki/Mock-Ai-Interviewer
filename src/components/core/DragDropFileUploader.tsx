
'use client';
import Image from 'next/image';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icons } from '../Icons';

interface IProps {
    file?: string;
    className?: string;
    placeholder?: string;
    onChange: (file: File[] | File | null) => void;
    onRemove?: () => void;
    onUpload?: () => void;
}

const DragDropFileUploader: FC<IProps> = (props) => {
    const { onUpload, file, onRemove, onChange, className,placeholder } = props;

    const [isDragActive, setIsDragActive] = useState<boolean>(false);
    const [filePreview, setFilePreview] = useState<
        string | ArrayBuffer | File | null
    >(null);

    const fileInputRef = useRef(null);

    const handleDragEnter = () => {
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        onChange(files);
        previewFile(files[0]);
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = (e.target.files && e.target.files[0]) || null;
        onChange(file);
        previewFile(file);
    };

    const previewFile = (file: File | null) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFilePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveButtonClick = () => {
        setFilePreview(null);
        onChange(null);

        if (onRemove) {
            onRemove();
        }
    };

    return (
        <div
            className={twMerge(
                className,
                isDragActive ? 'bg-sky-50 border-sky-400' : 'border-gray-300',
                'group mb-4 cursor-pointer relative flex justify-center items-center w-full h-48 border border-dashed rounded-lg p-2'
            )}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <input
                type='file'
                ref={fileInputRef}
                className='w-full opacity-0 h-full absolute top-0 left-0 cursor-pointer'
                onChange={handleFileInputChange}
            />

            {filePreview || file ? (
                <div className='h-full w-full'>
                    <Image
                        src={file ?? (filePreview as string)}
                        alt='File Preview'
                        width={400}
                        height={200}
                        className='h-full w-full object-cover rounded'
                        unoptimized
                    />
                    <div className='group-hover:flex hidden items-center justify-center gap-2 absolute top-0 left-0 h-full w-full bg-gray-950/30'>
                        <button
                            onClick={onUpload}
                            className='py-1.5 px-4 text-white rounded-lg bg-primary-900 flex items-center justify-center gap-2'
                        >
                            <Icons.CloudUpload className='w-6 h-6 stroke-[1.2px]' />
                            Upload
                        </button>
                        <button
                            onClick={handleRemoveButtonClick}
                            className='py-1.5 px-4 text-white rounded-lg bg-red-500'
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Icons.CloudUpload className='w-10 h-10 stroke-[1.2px] mb-2 text-gray-400' />
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                        <span className='font-semibold'>Click to upload</span>{' '}
                        or drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                        {placeholder ? placeholder : 'SVG, PNG, JPG or GIF (MAX. 800x400px)'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default DragDropFileUploader;