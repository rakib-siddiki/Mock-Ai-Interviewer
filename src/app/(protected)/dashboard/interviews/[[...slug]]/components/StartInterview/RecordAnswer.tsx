import React, { FC } from 'react';
import { WebCam } from '..';
interface IProps extends TSpeechToText {
    mockId: string;
    data: { question: string; answer: string }[] | null;
    currentQuestion: number;
}
type TSpeechToText = {
    isListening: boolean;
    handleListen: () => void;
    transcript: string;
    isProcessing: boolean;
    handleRestart: () => void;
};
const RecordAnswer: FC<IProps> = ({ data, mockId, currentQuestion, ...useSpeechToText }) => {
    return (
        <>
            <WebCam
                currentQuestion={currentQuestion}
                mockId={mockId}
                data={data}
                buttonText='End Interview'
                pathUrl='feedback'
                enebleAnswerOption
                {...useSpeechToText}
            />
        </>
    );
};

export default RecordAnswer;
