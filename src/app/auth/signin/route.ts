import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(req: { formData: () => any; url: string | URL | undefined; }) {
  const formData = await req.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const supabase = createRouteHandlerClient({ cookies });

  await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return NextResponse.redirect(new URL("/home", req.url), {
    status: 302,
  });
}