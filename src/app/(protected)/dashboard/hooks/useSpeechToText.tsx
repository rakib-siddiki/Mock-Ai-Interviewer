'use client';
import { useEffect, useRef, useState } from 'react';
type TSpeechRecognition = SpeechRecognition;
export const useSpeechToText = () => {
    const [isListening, setIsListening] = useState<boolean>(false);
    const [transcript, setTranscript] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const recognitionRef = useRef<TSpeechRecognition | null>(null);
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

        newRecongnition.onresult = (event) => {
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
        isListening && recognitionRef?.current?.abort();
    };
    const handleListen = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            recognitionRef.current?.start();
        }
    };
    return { handleListen, isListening, transcript, isProcessing, handleRestart };
};
