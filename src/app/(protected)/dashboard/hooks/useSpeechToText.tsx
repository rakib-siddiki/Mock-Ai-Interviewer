'use client';
import { useRef, useState } from 'react';
import { transcribeAudio } from '@/app/(protected)/dashboard/actions/transcribeAudio';
import { toast } from 'sonner';

export const useSpeechToText = () => {
    const [isListening, setIsListening] = useState<boolean>(false);
    const [transcript, setTranscript] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const isAbortedRef = useRef<boolean>(false);

    const handleRestart = () => {
        isAbortedRef.current = true;
        setTranscript('');
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        setIsListening(false);
        setIsProcessing(false);
    };

    const startRecording = async () => {
        try {
            isAbortedRef.current = false;
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            // eslint-disable-next-line @typescript-eslint/require-await
            mediaRecorder.onstop = async () => {
                // Stop all tracks on the stream to release the mic
                stream.getTracks().forEach((track) => track.stop());

                if (isAbortedRef.current) {
                    setIsProcessing(false);
                    return;
                }

                if (audioChunksRef.current.length === 0) {
                    setIsProcessing(false);
                    return;
                }

                const mimeType = mediaRecorder.mimeType || 'audio/webm';
                const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
                setIsProcessing(true);

                // Convert Blob to Base64 for the Server Action
                const reader = new FileReader();
                reader.readAsDataURL(audioBlob);
                reader.onloadend = async () => {
                    try {
                        if (isAbortedRef.current) {
                            setIsProcessing(false);
                            return;
                        }
                        const base64Data = (reader.result as string).split(',')[1];
                        const response = await transcribeAudio(base64Data, mimeType);

                        if (response.error) {
                            toast.error(response.error);
                        } else if (response.text) {
                            setTranscript((prev) => {
                                const newText = response.text || '';
                                return prev ? `${prev} ${newText}` : newText;
                            });
                        }
                    } catch (err) {
                        console.error('Transcription error:', err);
                        toast.error('Failed to transcribe audio.');
                    } finally {
                        setIsProcessing(false);
                    }
                };
            };

            mediaRecorder.start();
            setIsListening(true);
        } catch (error) {
            console.error('Error starting audio recording:', error);
            toast.error('Could not access microphone. Please check your browser permissions.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            setIsListening(false);
        }
    };

    const handleListen = () => {
        if (isListening) {
            stopRecording();
        } else {
            void startRecording();
        }
    };

    return { handleListen, isListening, transcript, isProcessing, handleRestart };
};
