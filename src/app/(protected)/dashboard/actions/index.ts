'use server';

import { QUSTION_AMOUNT } from '@/configs/env';
import { db } from '@/db/drizzle';
import { mockAiInterviewer } from '@/db/schema';
import { chatSession } from '@/lib/gemini-ai-model';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { randomUUID } from 'crypto';

interface IFromData {
    jobRole: string;
    techStack: string;
    yearsOfExperience: string;
}
export const addInterview = async (data: IFromData) => {
    try {
        const { jobRole, techStack, yearsOfExperience } = data;
        const { getUser } = getKindeServerSession();
        const user = await getUser();
        if (!user) {
            throw new Error('User not found');
        }
        const propmt = `
        Job Position: ${jobRole}
        TECH stacks : ${techStack}
        Years of Experience: ${yearsOfExperience} Please provide ${QUSTION_AMOUNT} interview questions along with their simple answers in JSON format. Ensure the questions are relevant to the specified job position, description, and required experience level. The output should be structured with each question and its corresponding answer in a separate JSON object, formatted as follows:`;
        const result = await chatSession.sendMessage(propmt);
        const jsonMockResponse = result.response.text().replace('```json', '').replace('```', '');

        const res = await db
            .insert(mockAiInterviewer)
            .values({
                jobRole,
                techStack,
                yearsOfExperience,
                jsonMockResponse,
                createdBy: user.email!,
                mockId: randomUUID(),
            })
            .returning({ mockId: mockAiInterviewer.mockId });
        return {
            mockId: res[0].mockId,
        };
    } catch (error) {
        return {
            error: 'An unexpected error occurred! Please try again later.',
        };
    }
};
