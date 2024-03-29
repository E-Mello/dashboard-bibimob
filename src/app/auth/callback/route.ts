import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(req: NextRequest) {
  const cookieData = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieData })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL('/home', req.url))
}