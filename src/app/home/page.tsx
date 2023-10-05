import Image from 'next/image' // Certifique-se de importar a biblioteca Image do Next.js
import Link from 'next/link'
import UserProfile from '@/components/userComponent/UserProfile'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

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
    console.log(user.identities)
    console.log('====================================');
  }


  return (
    <header className="w-full flex justify-between items-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
        <div className="flex items-center gap-4">
          {/*logo do site*/}
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    </header>
  )
}
