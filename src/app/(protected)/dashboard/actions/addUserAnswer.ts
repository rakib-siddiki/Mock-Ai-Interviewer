'use server';
import { db } from '@/db/drizzle';
import { userAnswerTable } from '@/db/schema';
import { chatSession } from '@/lib/gemini-ai-model';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
type TUserAnswer = {
    data: { question: string; answer: string }[] | null;
    currentQuestion: number;
    userAnswer: string;
    mockId: string;
};
type TFeedback = {
    rating: number;
    feedback: string;
};

export const addUserAnswer = async ({ ...userData }: TUserAnswer) => {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();
        const { data, currentQuestion, userAnswer, mockId } = userData;
        const feedbackPrompt = `
            Question: ${data?.[currentQuestion]?.question}
            User Answer: ${userAnswer}
            Based on the above question and answer, please provide a rating and feedback in the following JSON format:
            {
            "rating": "<rate the answer from 1 to 10>",
            "feedback": "<provide specific feedback on the answer, including areas of improvement if any, in 3 to 5 lines>"
            }
            `;
        const aiFeedbackRes = await chatSession.sendMessage(feedbackPrompt);
        if (!aiFeedbackRes) throw new Error('An unexpected error occurred! Please try again later');
        const stringAiFeedbackRes = aiFeedbackRes.response.text().replace(/```json|```/g, '');
        const mockAiFeedback = JSON.parse(stringAiFeedbackRes) as TFeedback;
        const res = await db.insert(userAnswerTable).values({
            //@ts-expect-error unknown error
            correctAnswer: data?.[currentQuestion]?.answer,
            question: data?.[currentQuestion]?.question,
            mockIdRef: mockId,
            feedback: mockAiFeedback.feedback,
            rating: mockAiFeedback.rating,
            userAnswer: userAnswer,
            userEmail: user?.email,
        });
        return res;
    } catch (error) {
        return { error: 'An unexpected Error occurred! please try again later' };
    }
};
