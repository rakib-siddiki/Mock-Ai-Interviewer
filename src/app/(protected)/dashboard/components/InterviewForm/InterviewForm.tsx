import React, { ComponentPropsWithoutRef, Dispatch, FC, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '.';
interface IProps extends ComponentPropsWithoutRef<'section'> {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const InterviewForm: FC<IProps> = ({ isOpen, setIsOpen }) => {
    return (
        <section className='container'>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>
                            Take A Job Interview Preparation
                        </DialogTitle>
                        <DialogDescription>
                            Add Details about yout job position/role, Job description and years of
                            experience
                        </DialogDescription>
                    </DialogHeader>
                    <Form />
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default InterviewForm;
