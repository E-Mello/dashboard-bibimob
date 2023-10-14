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
        <section className={`top-0 fixed z-40 justify-between flex-wrap transition-all w-full  duration-300 p-6 ${isDarkMode ? '' : ''}`}>
            <div className='flex justify-between w-[100vw] pr-32 items-center content-center h-10'>
                <div className="flex items-center content-center text-white ">
                    <div className="h-10 w-10 mr-5">
                        <Avatar src={avatarUrl} alt="Avatar" width={32} height={32} />
                    </div>
                    <p className="font-semibold text-3xl tracking-tight cursor-default">{`Mello's Company`}</p>
                </div>
                <div className="flex gap-10 items-center">
                    <div className="h-8 w-8 rounded-full ">
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
            </div>
        </section>
    );
};

export default MenuBar;
