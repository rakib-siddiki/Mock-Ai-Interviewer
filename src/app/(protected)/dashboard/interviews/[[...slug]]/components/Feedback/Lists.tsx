import React, { FC } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
interface IProps {
    question: string;
    correctAnswer: string;
    userAnswer: string;
    rating: string;
    feedback: string;
}
const Lists: FC<IProps> = ({ question, correctAnswer, userAnswer, rating, feedback }) => {
    return (
        <Accordion type='single' collapsible>
            <AccordionItem value={question}>
                <AccordionTrigger className='text-balance'>{question}</AccordionTrigger>
                <AccordionContent className='space-y-3 *:rounded *:p-3 *:shadow'>
                    <p
                        className={cn(
                            parseInt(rating) > 4
                                ? 'bg-green-100 dark:bg-emerald-600'
                                : 'bg-red-100 dark:bg-red-900',
                        )}
                    >
                        <strong>Your Rating:</strong> {rating}
                    </p>
                    <p className='bg-indigo-100 dark:bg-indigo-900'>
                        <strong>Your Answer:</strong> {userAnswer}
                    </p>
                    <p className='bg-green-200 dark:bg-green-900'>
                        <strong>The Correct Answer:</strong> {correctAnswer}
                    </p>
                    <p className='bg-yellow-100 dark:bg-yellow-600'>
                        <strong>Feedback:</strong> {feedback}
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default Lists;
