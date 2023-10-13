"use client"

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import React, { useState } from 'react';

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { supabase } from "@/lib/supabase";
import { useAtom } from "jotai";

export default function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignIn, setIsSignIn] = useState(true);
    const [isDarkMode] = useAtom(isDarkModeAtom);
    const [showPassword, setShowPassword] = useState(false);


    const handleToggleSignInUp = () => {
        setIsSignIn(!isSignIn);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    async function signUpWithEmail() {
        console.log('====================================');
        console.log('signUpWithEmail, to aqui');
        console.log('====================================');
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert(`Erro ao tentar efetuar o cadastro: ${error.message}`);
        } else {
            alert(`Cadastro efetuado com sucesso! ${JSON.stringify(data)}`);
        }
    }

    async function signInWithEmail() {
        console.log('====================================');
        console.log('signInWithEmail, to aqui');
        console.log('====================================');
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(`Erro ao tentar efetuar o login: ${error.message}`);
        } else {
            alert(`Login efetuado com sucesso! ${JSON.stringify(data)}`);
        }
    }

    return (
        <div className="flex items-center justify-center h-[100vh] bg-gradient-to-b from-yellow-400 to-black">
            <div className="bg-white  transition-shadow p-8 w-[30rem]  rounded-lg justify-center flex flex-col text-center">
                <h1 className={`text-5xl font-bold mb-8 ${isDarkMode ? 'text-black' : ''}`}>
                    {isSignIn ? "Login" : "Cadastro"}
                </h1>
                <form className={'p-15 flex flex-col gap-5'}>
                    <input type="text"
                        required
                        aria-label="Email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-[0.85rem] border-2 border-gray-300 rounded-md"
                    />
                    <div className="flex justify-end ">
                        <input
                            required
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                            className="p-[0.85rem] border-2 border-gray-300 rounded-md w-full"
                        />
                        <a className={`fixed self-center pr-2 opacity-50 cursor-pointer ${isDarkMode ? 'text-black' : ''}`} onClick={handleShowPassword}>{showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</a>
                    </div>
                    <button
                        type="submit"
                        className={`p-[0.85rem] m-2 rounded-md cursor-pointer text-white  ${isSignIn ? 'bg-[#4CAF50] hover:bg-[#45a049] ' : 'bg-[#2196F3] hover:bg-[#1976D2]'}`}
                        onClick={isSignIn ? signInWithEmail : signUpWithEmail}
                    >
                        {isSignIn ? "Entrar" : "Cadastrar"}
                    </button>

                </form>
                <button
                    color="primary"
                    className={`bg-[#2196F3] text-white p-[0.85rem] m-2 rounded-md cursor-pointer hover:bg-[#1976D2]`} // Botão "Já tem uma conta? Faça login" em azul
                    onClick={handleToggleSignInUp}
                >
                    {isSignIn ? "Criar uma conta" : "Já tem uma conta? Faça login"}
                </button>
            </div>
        </div >
    );
}
