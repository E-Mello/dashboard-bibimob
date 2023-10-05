import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const UserProfile: React.FC = async () => {
    const supabase = createServerComponentClient({ cookies });

    const { data: { user }, } = await supabase.auth.getUser()

    if (!user) {
        return (
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        )
    } else {
        console.log('====================================');
        console.log(user);
        console.log('====================================');
    }

    return (
        <div className="flex items-center gap-4">
            {user.user_metadata == null ? (
                <Image
                    src={''}
                    alt="User Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                />
            ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-600"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="2" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12" y2="22" />
                    </svg>
                </div>
            )}
            Hey, {user.email || 'Usuário'}!
        </div>
    );
};

export default UserProfile;
