import React, { FC } from 'react';
import { WebCam } from '..';
interface IProps {
    mockId: string;
}
const RecordAnswer: FC<IProps> = ({ mockId }) => {
    return (
        <>
            <WebCam mockId={mockId} buttonText='End Interview' pathUrl='feedback' />
        </>
    );
};

export default RecordAnswer;
