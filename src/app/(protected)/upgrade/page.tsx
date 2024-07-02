import { Metadata } from 'next';
import React from 'react';
import { Container } from '@/app/(protected)/components/Container';
import UpGrade from './UpGrade';
export const metadata: Metadata = {
    title: 'Upgrade',
};
const UpgradePage = () => {
    return (
        <Container>
            <UpGrade />
        </Container>
    );
};

export default UpgradePage;
