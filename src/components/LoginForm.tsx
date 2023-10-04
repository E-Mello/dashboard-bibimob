"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import React, { useState } from "react";

import Cookies from "js-cookie";
import type { Database } from "~/lib/database.types";
import Link from "next/link";
import { cookies } from "next/headers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { supabase } from "~/utils/createClient";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  onSubmit: (data: { email: string; password: string }) => void;
  onForgotPassword: () => void;
  onCreateAccount: (
    email: string,
    password: string
  ) => Promise<{ error?: string }>;
};

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
  onCreateAccount,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();
  const myCookie = createClientComponentClient<Database>({
    cookieOptions: {
      name: "mello-app",
      maxAge: 3600,
      domain: "localhost",
      path: "/",
      sameSite: "lax",
      secure: false,
    },
  });
  const [createAccount, setCreateAccount] = useState(false);

  async function signInWithGoogle() {
    console.log("Entrei no signInWithGoogle");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          sessionStorage: "true",
          cookies: "true",
          setCreateAccount: "true",
        },
      },
    });
    if (error) {
      console.error("Error signing in with Google:", error);
    } else {
      console.log("User signed in with Google:", data);
    }
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        queryParams: {
          sessionStorage: "true",
        },
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
    if (error) {
      console.error("Error signing in with GitHub:", error);
    } else {
      console.log("User signed in with GitHub:", data);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotPassword) {
      // Enviar e-mail para redefinir senha
      setEmailSent(true);
    } else {
      // Lidar com o envio do formulário de login
      onSubmit({ email, password });
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    setEmailSent(false);
    setCreateAccount(false);
  };

  const handleCreateAccount = () => {
    setForgotPassword(false);
    setEmailSent(false);
    setCreateAccount(true);
  };

  return (
    <form className="bg-[#000000] bg-opacity-50 drop-shadow-lg shadow-inner shadow-[#64646459] rounded-3xl px-8 pt-6 pb-8 mb-4">
      {forgotPassword ? (
        // Renderizar painel de recuperação de senha
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Painel de recuperação
          </h2>
          {emailSent ? (
            <>
              <p className="text-green-500">Envio de e-mail bem-sucedido!</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
                type="button"
                onClick={() => setForgotPassword(false)}
              >
                Voltar
              </button>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow-inputBoxShadow focus:shadow-inputFocus appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline text-white"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-5 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                  type="button"
                  onClick={() => setForgotPassword(false)}
                >
                  Voltar
                </button>
              </div>
            </>
          )}
        </>
      ) : createAccount ? (
        // Renderizar painel de criação de conta
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Criar uma nova conta
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow-inputBoxShadow focus:shadow-inputFocus appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline text-white"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-inputFocus bg-gray-800 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline text-white"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Create Account
            </button>
            <div className="flex items-center text-center justify-center">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center text-center justify-center">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                onClick={() => setCreateAccount(false)}
              >
                Back to Login
              </a>
            </div>
          </div>
        </>
      ) : (
        // Renderizar painel de login
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Painel de login
          </h2>
          <div className="flex pb-2">
            <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
              type="button"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              <FaGoogle className="inline-block mr-2" />
              Sign in with Google
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
              type="button"
              onClick={() => {
                signInWithGitHub();
              }}
            >
              <FaGithub className="inline-block mr-2" />
              Sign in with GitHub
            </button>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow-inputBoxShadow focus:shadow-inputFocus appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline text-white"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-inputFocus bg-gray-800 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline text-white"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <div className="flex items-center text-center justify-center">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center text-center justify-center">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                onClick={handleCreateAccount}
              >
                Create an Account
              </a>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default LoginForm;
