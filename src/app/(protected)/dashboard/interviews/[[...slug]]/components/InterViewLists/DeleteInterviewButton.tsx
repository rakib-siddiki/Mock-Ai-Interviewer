'use client';

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Trash2, Loader2 } from 'lucide-react';
import { deleteInterview } from '@/app/(protected)/dashboard/actions/interviewDetails';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface DeleteInterviewButtonProps {
    mockId: string;
}

export const DeleteInterviewButton = ({ mockId }: DeleteInterviewButtonProps) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        startTransition(async () => {
            const res = await deleteInterview(mockId);
            if (res && 'error' in res) {
                toast(res.error || 'Failed to delete the interview.', {
                    style: {
                        color: 'white',
                        background: 'red',
                    },
                });
            } else {
                toast('Interview deleted successfully!', {
                    style: {
                        color: 'white',
                        background: 'green',
                    },
                });
                router.refresh();
            }
            setOpen(false);
        });
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className='rounded-lg p-1.5 text-zinc-400 opacity-70 transition-all duration-200 hover:bg-red-50 hover:text-red-500 group-hover:opacity-100 dark:hover:bg-red-950/30 md:opacity-0'
                title='Delete Interview'
            >
                <Trash2 className='size-3.5' />
            </button>

            <Dialog open={open} onOpenChange={(val) => !isPending && setOpen(val)}>
                <DialogContent className='max-w-md border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950'>
                    <DialogHeader>
                        <DialogTitle className='text-xl font-bold text-zinc-900 dark:text-zinc-50'>
                            Delete Interview
                        </DialogTitle>
                        <DialogDescription className='mt-2 text-zinc-500 dark:text-zinc-400'>
                            Are you sure you want to delete this interview? This will permanently
                            remove the interview session and all associated answers, score, and
                            feedback. This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className='mt-6 gap-3 sm:gap-0'>
                        <Button
                            variant='outline'
                            onClick={() => setOpen(false)}
                            disabled={isPending}
                            className='border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900'
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleDelete}
                            disabled={isPending}
                            className='flex items-center justify-center gap-2 bg-red-600 font-semibold text-white hover:bg-red-700'
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className='size-4 animate-spin' />
                                    Deleting...
                                </>
                            ) : (
                                'Delete Permanently'
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
