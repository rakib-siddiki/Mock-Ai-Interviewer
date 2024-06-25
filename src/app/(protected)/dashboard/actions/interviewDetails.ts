'use server';

import { db } from '@/db/drizzle';
import { mockAiInterviewer } from '@/db/schema';
import { eq } from 'drizzle-orm';
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
