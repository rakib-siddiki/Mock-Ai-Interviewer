'use server';

import { db } from '@/db/drizzle';
import { mockAiInterviewer } from '@/db/schema';
import { eq } from 'drizzle-orm';
type TInterviewDetails = {
    id: string;
    jobRole: string;
    techStack: string;
    yearsOfExperience: string;
    jsonMockResponse: string;
    createdBy: string;
    createdAt: Date;
    mockId: string;
};
type TInterviewDetailsResponse = TInterviewDetails[] | { error: string };
export const GetInterviewDetails = async (
    interViewId: string,
): Promise<TInterviewDetailsResponse> => {
    try {
        const res = await db
            .select()
            .from(mockAiInterviewer)
            .where(eq(mockAiInterviewer.mockId, interViewId));
        return res;
    } catch (error) {
        return {
            error: 'An unexpected error occurred! Please try again later.',
        };
    }
};
