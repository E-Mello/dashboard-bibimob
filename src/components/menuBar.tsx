"use client"

import Avatar from './Avatar';
import Image from 'next/image';
import Link from 'next/link';
import avatarImage from '/public/bibimob.jpg';
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { isOpenNavBarAtom } from '@/atoms/openNavBarAtom';
import { supabase } from '@/lib/supabase';
import { useAtom } from 'jotai';

const MenuBar = () => {
    const [isDarkMode] = useAtom(isDarkModeAtom);
    const [isOpenNavBar, setIsOpenNavBar] = useAtom(isOpenNavBarAtom); // estado para controlar se a barra lateral está aberta ou não

    return (
        <section className={`top-0 fixed z-40 justify-between flex-wrap transition-all w-full  duration-300 p-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <div className='flex justify-between w-[100vw] pr-32 items-center content-center h-10'>
                <div className="flex ml-16 gap-6 items-center content-center  ">
                    <div className="h-10 w-10 mr-5">
                        <Image src={avatarImage} alt="Avatar" width={37} height={37} className='rounded-lg' />
                    </div>
                    <p className="font-semibold text-3xl tracking-tight cursor-default">{`Bibi Mob Brasil LTDA`}</p>
                </div>
                <div className="flex gap-10 items-center">
                    <div className="h-10 w-10 rounded-full ">
                        <Image src={avatarImage} alt="Avatar" width={40} height={40} className='rounded-xl' />
                    </div>
                    {/* Aqui deve deixar nesse caminho, o menubar fica em /pages/home */}
                    <form action={'../auth/signout'} method='POST'>
                        <button
                            className="bg-gray-700 hover:bg-gray-600  font-bold py-2 px-4 rounded"
                            type='submit'
                            onClick={() => {
                                console.log('logout')
                            }}
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
