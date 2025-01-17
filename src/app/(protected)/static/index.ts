export const NAV_ITEMS = [
    {
        url: '/dashboard',
        label: 'Dashboard',
    },
    {
        url: '/how-it-works',
        label: 'How it works?',
    },
    {
        url: '/upgrade',
        label: 'Upgrade',
    },
];

export const INTERVIEW_FORM_FIELDS = [
    {
        name: 'jobRole',
        label: 'Job Role / Position',
        placeholder: 'Ex.Frontend Developer',
    },
    {
        name: 'techStack',
        label: 'Tech Stack / Skills (in short)',
        placeholder: 'Ex.React, NextJs, ExpressJs , MongoDB.',
    },
    {
        name: 'yearsOfExperience',
        label: 'Years of Experience',
        placeholder: 'Ex.5',
    },
];

export const GET_STARTED_NOTE = {
    heading: 'Information',
    description: {
        text: `Enable Video Web Cam and Microphone to Start your AI Generated Mock
        Interview, It Has ${process.env.QUESTION_AMOUNT} question which you can answer and at the last you will get the report
        on the basis of your answer.`,
        strong: 'NOTE: We never record your video , Web cam access you can disable at any time if you want',
    },
};
export const START_INTERVIEW_NOTE = {
    heading: 'Note',
    description: {
        text: `Click on Record Answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each of question and your answer to comapre it.`,
    },
};

export const UPGRADE_CARD = [
    {
        tier: 'Personal',
        monthlyPrice: '$9.99/month',
        annualPrice: '$99.99/year',
        features: [
            'Access to all basic interview questions',
            'Up to 5 interviews per month',
            'Basic performance analytics',
            'Email support',
        ],
    },
    {
        tier: 'Professional',
        monthlyPrice: '$29.99/month',
        annualPrice: '$299.99/year',
        features: [
            'Unlimited interviews',
            'Detailed performance analytics and insights',
            'Priority email and chat support',
            'Customizable interview templates',
            'Secure storage and export of interview data',
        ],
    },
];

export const HOW_IT_WORKS_POINTS = [
    {
        id: 1,
        title: 'Start or Add an Interview',
        points: [
            '🌟 Customized Setup: Begin a new interview or enhance an existing one by selecting your job position, tech stack, and experience level. Our intuitive setup ensures you get the most relevant questions.',
        ],
    },
    {
        id: 2,
        title: 'Choose Your Interview Mode',
        points: [
            '🎥 Webcam: Simulate a real interview environment with video responses.',
            '🎙️ Voice: Answer questions verbally for a dynamic practice session.',
            `📝 Typing: Prefer typing? We've got you covered!`,
        ],
    },
    {
        id: 3,
        title: 'Receive Instant Feedback',
        points: [
            '⭐ Real-Time Analysis: Get instant ratings and detailed feedback on your answers.',
            '📈 Improvement Tips: Identify strengths and areas for growth to boost your confidence.',
        ],
    },
    {
        id: 4,
        title: 'Secure Authentication',
        points: [
            '🔒 Login with Ease: Use Google, Gmail, or GitHub for secure and seamless access. Your data is safe with us.',
        ],
    },
];
export const HOW_IT_WORKS_ADITIONAL_POINTS = [
    {
        id: 1,
        title: 'Interactive Interface',
        points: [
            '🕹️ Realistic Simulations: Engage with a dynamic interface that mimics real interview scenarios. Our mock interviewers adapt to your responses for a lifelike experience.',
        ],
    },
    {
        id: 2,
        title: 'Subscription Plans',
        points: [
            '💼 Flexible Options: Explore subscription plans tailored to students, job seekers, and professionals. Find the perfect fit for your career goals.',
        ],
    },
];
