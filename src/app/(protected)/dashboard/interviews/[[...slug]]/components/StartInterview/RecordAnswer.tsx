import React, { FC } from 'react';
import { WebCam } from '..';
interface IProps extends TSpeechToText {
    mockId: string;
}
type TSpeechToText = {
    isListening: boolean;
    handleListen: () => void;
    transcript: string;
    isProcessing: boolean;
    handleRestart: () => void;
};
const RecordAnswer: FC<IProps> = ({ mockId, ...useSpeechToText }) => {
    return (
        <>
            <WebCam
                mockId={mockId}
                buttonText='End Interview'
                pathUrl='feedback'
                enebleAnswerOption
                {...useSpeechToText}
            />
        </>
    );
};

export default RecordAnswer;
