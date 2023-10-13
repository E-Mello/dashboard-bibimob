"use client"

import Avatar from '../Avatar';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import avatarImage from '/public/bibimob.jpg';
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { isOpenNavBarAtom } from '@/atoms/openNavBarAtom';
import { supabase } from '@/lib/supabase';
import { useAtom } from 'jotai';

const MenuBar = () => {
    const avatarUrl: StaticImageData = avatarImage;

    const [isDarkMode] = useAtom(isDarkModeAtom);
    const [isOpenNavBar, setIsOpenNavBar] = useAtom(isOpenNavBarAtom); // estado para controlar se a barra lateral está aberta ou não
    return (
        <nav className={`h-16 flex items-center content-center z-50 justify-between flex-wrap transition-all duration-300 ${isOpenNavBar ? 'w-[88vw] ml-60' : 'w-[97vw] ml-[4vw]'}  bg-gray-800 p-6 ${isDarkMode ? 'bg-gray-300' : ''}`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="h-8 w-8 mr-2">
                    <Avatar src={avatarUrl} alt="Avatar" width={32} height={32} />
                </div>
                <p className="font-semibold text-xl tracking-tight cursor-default">{`Mello's Company`}</p>
            </div>
            <div className="flex items-center pr-10">
                <div className="h-8 w-8 rounded-full mr-2">
                    <Image src={avatarUrl} alt="Avatar" width={32} height={32} className='text-white' />
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
