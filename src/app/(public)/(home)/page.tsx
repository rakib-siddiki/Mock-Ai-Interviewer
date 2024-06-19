import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Welcome } from './components';

const HomePage = () => {
    return (
        <>
            <Welcome />
            <LoginLink
                authUrlParams={{
                    connection_id:
                        process.env.NEXT_PUBLIC_KINDE_GOOGLE_CONNECTION_ID ||
                        '',
                }}
            >
                Google
            </LoginLink>
            <LogoutLink>LogOut</LogoutLink>
        </>
    );
};

export default HomePage;
