import { useState, useEffect } from 'react';

type TWebCamState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export const useWebcamState = (): TWebCamState => {
    const [webCamEnabled, setWebCamEnabled] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            try {
                const toggleState = localStorage.getItem('toggle-state');
                if (toggleState !== null) {
                    return !!JSON.parse(toggleState);
                }
            } catch (error) {
                console.error('Error parsing toggle state from localStorage', error);
            }
        }
        return false;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('toggle-state', JSON.stringify(webCamEnabled));
            } catch (error) {
                console.error('Error setting toggle state in localStorage', error);
            }
        }
    }, [webCamEnabled]);

    return [webCamEnabled, setWebCamEnabled];
};
