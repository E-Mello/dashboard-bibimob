import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  console.log('signout route')
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/`, {
    status: 301,
  })
}