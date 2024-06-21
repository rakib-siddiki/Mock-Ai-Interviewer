import { Roboto } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'Mock Ai Interviewer';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - A Smart Interviewer For You.`;
export const SITE_DESCRIPTION_DEFAULT =
    'A smart Interviewer for your interview needs here.';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto-sans',
    display: 'swap',
});
