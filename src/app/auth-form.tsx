"use client"

import '../styles/AuthForm.css';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';

type AuthView = 'sign_in' | 'sign_up';

export default function AuthForm() {
    const supabase = createClientComponentClient();
    const [view, setView] = useState<AuthView>('sign_in');
    const [isFading, setIsFading] = useState(false);

    const handleViewChange = () => {
        setIsFading(true); // Ativar a animação de fade

        setTimeout(() => {
            setView((prevView) => (prevView === 'sign_in' ? 'sign_up' : 'sign_in'));
            setIsFading(false); // Desativar a animação de fade após a troca
        }, 300); // A animação de fade deve durar 300ms
    };

    return (
        <div className="flex items-center justify-center h-[100vh] w-full bg-gradient-to-b from-yellow-400 to-black">
            <div className="bg-white shadow-black shadow-2xl transition-shadow p-8 w-[30rem] rounded-lg">
                <h1 className="text-center text-2xl font-semibold text-black mb-4">Bem-vindo!</h1>
                <div className={`transition-opacity ${isFading ? 'animate-fadeout' : 'animate-fade'}`}>
                    {view === 'sign_in' && (
                        <Auth
                            supabaseClient={supabase}
                            view="sign_in"
                            appearance={{ theme: ThemeSupa }}
                            theme="dark"
                            showLinks={false}
                            providers={[]}
                            redirectTo="http://localhost:3000/auth/callback"
                        />
                    )}
                    {view === 'sign_up' && (
                        <Auth
                            supabaseClient={supabase}
                            view="sign_up"
                            appearance={{ theme: ThemeSupa }}
                            theme="dark"
                            showLinks={false}
                            providers={[]}
                            redirectTo="http://localhost:3000/auth/callback"
                        />
                    )}
                </div>
                <p className="mt-4 text-white flex">
                    {view === 'sign_in' ? (
                        <span className='w-full pl-1 justify-center flex-col gap-5 flex'>
                            <p className='text-black text-center'>Novo por aqui?</p>
                            <button
                                onClick={handleViewChange}
                                className="text-blue-500 cursor-pointer"
                            >
                                <span className="bg-blue-500 rounded-lg p-2 text-white">Crie uma conta</span>
                            </button>
                        </span>
                    ) : (
                        <span className='w-full pl-1 justify-center flex-col gap-5 flex'>
                            <p className='text-black text-center'>Já tem uma conta?</p>
                            <button
                                onClick={handleViewChange}
                                className="text-blue-500 cursor-pointer"
                            >
                                <span className="bg-blue-500 rounded-lg p-2 text-white">Faça login</span>
                            </button>
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}
