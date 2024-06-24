import { ChangeEvent, useRef } from 'react';

export const useAnswerInText = (
    setterFn: React.Dispatch<React.SetStateAction<string>>,
    delay: number,
) => {
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const handleAnswerInText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setterFn(value);
        }, delay);
    };
    return {
        handleAnswerInText,
    };
};
