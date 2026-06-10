'use server';
import { GEMINI_API_KEY, GEMINI_MODEL } from '@/configs/env';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const transcribeAudio = async (base64Audio: string, mimeType: string) => {
    try {
        if (!GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY is not configured');
        }

        // Use configured GEMINI_MODEL or fall back to gemini-1.5-flash
        const modelName = GEMINI_MODEL || 'gemini-1.5-flash';
        const model = genAI.getGenerativeModel({ model: modelName });

        // Clean MIME type (e.g. "audio/webm;codecs=opus" -> "audio/webm")
        const cleanMimeType = mimeType.split(';')[0] || 'audio/webm';

        const response = await model.generateContent([
            {
                inlineData: {
                    data: base64Audio,
                    mimeType: cleanMimeType,
                },
            },
            {
                text: 'Transcribe the following audio. Output only the transcription, nothing else. If there is no speech or it is completely silent, return an empty string.',
            },
        ]);

        const text = response.response.text();
        return { text: text.trim() };
    } catch (error) {
        console.error('Gemini Transcription Server Action Error:', error);
        return { error: 'Failed to transcribe audio' };
    }
};
