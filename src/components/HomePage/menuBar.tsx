"use client"

import Avatar from '../Avatar';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { isOpenNavBarAtom } from '@/atoms/openNavBarAtom';
import { supabase } from '@/lib/supabase';
import { useAtom } from 'jotai';

interface MenuBarProps {
    enterpriseName: string;
    avatarUrl: string;
}


const MenuBar: FC<MenuBarProps> = ({ enterpriseName, avatarUrl }) => {
    const [isDarkMode] = useAtom(isDarkModeAtom);
    const [isOpenNavBar, setIsOpenNavBar] = useAtom(isOpenNavBarAtom); // estado para controlar se a barra lateral está aberta ou não
    return (
        <nav className={`flex items-center justify-between flex-wrap ${isOpenNavBar ? 'w-[87vw] ml-60' : 'w-[95vw] ml-24'}  bg-gray-800 p-6 ${isDarkMode ? 'bg-gray-300' : ''}`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="h-8 w-8 mr-2">
                    <Avatar src={avatarUrl} alt="Avatar" width={32} height={32} />
                </div>
                <p className="font-semibold text-xl tracking-tight cursor-default">{enterpriseName}</p>
            </div>
            <div className="flex items-center pr-10">
                <div className="h-8 w-8 rounded-full mr-2">
                    <Image src={avatarUrl} alt="Avatar" width={32} height={32} />
                </div>
                <form action="./auth/signin" method='post'>
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                        formAction='./auth/signout'
                    >
                        Logout
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default MenuBar;
