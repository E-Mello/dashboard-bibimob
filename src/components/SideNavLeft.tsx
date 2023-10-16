"use client"

import { MdCall, MdClose, MdContactPage, MdDescription, MdMenu, MdPriceChange } from "react-icons/md";
import React, { useState } from 'react';

import { FaHome } from "react-icons/fa";
import { IconType } from 'react-icons';
import Link from 'next/link';
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { isOpenNavBarAtom } from '@/atoms/openNavBarAtom';
import { useAtom } from 'jotai';

interface MenuProps {
    name: string;
    Link: string;
    icon: IconType;
    haveOptions: boolean;
    auth: boolean;
}

const SideNavLeft: React.FC = () => {
    const [isOpenNavBar, setIsOpenNavBar] = useAtom(isOpenNavBarAtom);
    const [isDarkMode] = useAtom(isDarkModeAtom);
    const menu: MenuProps[] = [
        {
            name: 'Home',
            Link: '/pages/home',
            icon: () => <FaHome />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Faturamento',
            Link: '/pages/billing',
            icon: () => <MdPriceChange />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Perfil',
            Link: '/pages/my-data',
            icon: () => <MdContactPage />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Relatorios',
            Link: '/pages/reports',
            icon: () => <MdDescription />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Contato',
            Link: '/pages/contact',
            icon: () => <MdCall />,
            haveOptions: false,
            auth: false,
        },
    ]

    return (
        <nav className={`${isOpenNavBar ? 'w-72' : 'w-20'} pt-20 transition-all z-50 duration-300 bg-sidebar-background h-screen fixed left-0 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <div className={`p-4 flex flex-col gap-6 transition-all duration-300 ${isOpenNavBar ? '' : ''}`}>
                <ul className={`space-y-4 gap-10 pt-5  ${isOpenNavBar ? '' : 'flex flex-col self-center '}`}>
                    {
                        menu.map((item, index) => (
                            <Link href={item.Link} key={index} className=" flex flex-col items-center space-x-2 cursor-pointer text-3xl">
                                <div className="flex flex-row gap-5 w-full mb-10">
                                    <span className="text-3xl">
                                        <item.icon className="text-2xl" />
                                    </span>
                                    <span className={`transition-all duration-300 ${isOpenNavBar ? '' : 'hidden'} `}>{item.name}</span>
                                </div>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default SideNavLeft;
