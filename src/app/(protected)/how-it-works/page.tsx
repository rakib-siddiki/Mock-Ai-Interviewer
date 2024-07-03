import { Metadata } from 'next';
import React from 'react';
import HowItWorks from './HowItWorks';
import { Container } from '@/app/(protected)/components/Container';
export const metadata: Metadata = {
    title: 'How It Works',
};
const HowItWorksPage = () => {
    return (
        <Container>
            <HowItWorks />
        </Container>
    );
};

export default HowItWorksPage;
