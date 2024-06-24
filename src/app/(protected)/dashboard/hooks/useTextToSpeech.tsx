import { useEffect, useRef, useState } from 'react';

export const useTextToSpeech = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
    useEffect(() => {
        speechSynthesisRef.current = window.speechSynthesis;
    }, []);
    const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

    const textToSpeech = (text: string) => {
        if ('speechSynthesis' in window) {
            if (isSpeaking) {
                if (speechSynthesisRef.current) {
                    speechSynthesisRef.current.cancel();
                    setIsSpeaking(false);
                }
                return;
            }
            const speech = new SpeechSynthesisUtterance(text);
            speechRef.current = speech;
            speech.onend = () => setIsSpeaking(false);
            if (speechSynthesisRef.current) {
                speechSynthesisRef.current.speak(speech);
            }
            setIsSpeaking(true);
            return;
        }
        alert('Sorry, your browser does not support text to speech');
    };

    return {
        textToSpeech,
    };
};
