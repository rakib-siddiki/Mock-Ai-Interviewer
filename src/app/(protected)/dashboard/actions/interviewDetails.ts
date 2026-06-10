'use server';

import { db } from '@/db/drizzle';
import { mockAiInterviewer, userAnswerTable } from '@/db/schema';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
export type TInterviewDetails = {
    id: string;
    jobRole: string;
    techStack: string;
    yearsOfExperience: string;
    jsonMockResponse: string;
    createdBy: string;
    createdAt: Date;
    mockId: string;
};
export type TInterviewDetailsResponse = TInterviewDetails[] | { error: string };

export type TInterviewQA = {
    question: string;
    answer: string;
};
export type TInterviewQAResponse = TInterviewQA[] | { error: string };

export const GetInterviewDetails = async (mockId: string): Promise<TInterviewDetailsResponse> => {
    try {
        const res = await db
            .select()
            .from(mockAiInterviewer)
            .where(eq(mockAiInterviewer.mockId, mockId));
        return res;
    } catch (error) {
        return {
            error: 'An unexpected error occurred! please try again later.😢',
        };
    }
};

export const GetInterviewqustions = async (mockId: string): Promise<TInterviewQAResponse> => {
    try {
        const res = await db
            .select({ jsonMockResponse: mockAiInterviewer.jsonMockResponse })
            .from(mockAiInterviewer)
            .where(eq(mockAiInterviewer.mockId, mockId));
        const parsedResponse = JSON.parse(res[0].jsonMockResponse) as TInterviewQAResponse;
        return parsedResponse;
    } catch (error) {
        return {
            error: 'An unexpected error occurred! please try again later.😢',
        };
    }
};

export const getFeedback = async (mockId: string) => {
    try {
        const res = await db
            .select()
            .from(userAnswerTable)
            .where(eq(userAnswerTable.mockIdRef, mockId));
        if (res.length === 0) return { error: 'No feedback found' };
        revalidatePath(`/dashboard/interviews/${mockId}/feedback`);

        return res;
    } catch (error) {
        return {
            error: 'An unexpected error occurred! please try again later.😢',
        };
    }
};

export const getPreviousInterviews = async () => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();
        if (!user || !user.email) return { error: 'Data not found' };
        const res = await db
            .select()
            .from(mockAiInterviewer)
            .where(eq(mockAiInterviewer.createdBy, user.email));
        return res;
    } catch (error) {
        console.log('🚀 > file: interviewDetails.ts:77 > getPreviousInterviews > error:', error);
        return {
            error: 'An unexpected error occurred! please try again later.😢',
        };
    }
};

export const deleteInterview = async (mockId: string) => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();
        if (!user || !user.email) return { error: 'Unauthorized' };

        // Verify the interview exists and belongs to the user
        const interview = await db
            .select()
            .from(mockAiInterviewer)
            .where(eq(mockAiInterviewer.mockId, mockId))
            .limit(1);

        if (interview.length === 0) {
            return { error: 'Interview not found' };
        }

        if (interview[0].createdBy !== user.email) {
            return { error: 'Unauthorized' };
        }

        // Delete associated user answers/feedback first
        await db.delete(userAnswerTable).where(eq(userAnswerTable.mockIdRef, mockId));

        // Delete the interview itself
        await db.delete(mockAiInterviewer).where(eq(mockAiInterviewer.mockId, mockId));

        revalidatePath('/dashboard');
        revalidatePath('/dashboard/interviews');

        return { success: true };
    } catch (error) {
        console.error('deleteInterview error:', error);
        return {
            error: 'An unexpected error occurred! please try again later.😢',
        };
    }
};
