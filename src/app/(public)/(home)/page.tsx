import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Welcome } from './components';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomePage = () => {
    return (
        <div className='grid place-items-center gap-4 py-20 text-center'>
            <Welcome />
            <Link href={'dashboard'}>
                <Button>Dashboard</Button>
            </Link>
            <LoginLink
                authUrlParams={{
                    connection_id:
                        process.env.NEXT_PUBLIC_KINDE_GOOGLE_CONNECTION_ID ||
                        '',
                }}
            >
                <Button>Google</Button>
            </LoginLink>
            <LogoutLink>
                <Button>LogOut</Button>
            </LogoutLink>
        </div>
    );
};

export default HomePage;
