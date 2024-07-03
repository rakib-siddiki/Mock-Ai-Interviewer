import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';

export default withAuth({
    isReturnToCurrentPage: true,
    loginPage: '/sign-in',
});

export const config = {
    matcher: ['/upgrade', '/how-it-works', '/dashboard', '/dashboard/:path*'],
};
