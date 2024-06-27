/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
//@ ts-nocheck
'use client';
import { useEffect, useRef, useState } from 'react';
export const useSpeechToText = () => {
    const [isListening, setIsListening] = useState<boolean>(false);
    const [transcript, setTranscript] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const recognitionRef = useRef(null);
    useEffect(() => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert(
                'Your browser does not support speech recognition. Please try using Chrome browser.',
            );
            return;
        }

        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        const newRecongnition = new SpeechRecognition();
        newRecongnition.continuous = true;
        newRecongnition.interimResults = true;

        newRecongnition.onstart = () => {
            setIsListening(true);
        };
        newRecongnition.onend = () => {
            setIsListening(false);
            setIsProcessing(false);
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newRecongnition.onresult = (event: any) => {
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                setIsProcessing(true);
                const result = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += result;
                }
            }
            setTranscript((prev) => prev + finalTranscript);
            if (finalTranscript) {
                setIsProcessing(false);
            }
        };
        recognitionRef.current = newRecongnition;
    }, []);

    const handleRestart = () => {
        setTranscript('');
        // @ts-expect-error  build error
        isListening && recognitionRef?.current?.abort();
    };
    const handleListen = () => {
        if (isListening) {
            // @ts-expect-error  build error
            recognitionRef.current?.stop();
        } else {
            // @ts-expect-error  build error
            recognitionRef.current?.start();
        }
    };
    return { handleListen, isListening, transcript, isProcessing, handleRestart };
};
