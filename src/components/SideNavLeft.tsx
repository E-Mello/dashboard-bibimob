"use client"

import { MdCall, MdClose, MdContactPage, MdDescription, MdMenu, MdPriceChange } from "react-icons/md";
import React, { useState } from 'react';

import { FaHome } from "react-icons/fa";
import { IconType } from 'react-icons';
import Link from 'next/link';
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

    const menu: MenuProps[] = [
        {
            name: 'Home',
            Link: '/home',
            icon: () => <FaHome />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Faturamento',
            Link: '/home/billing',
            icon: () => <MdPriceChange />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Meus Dados',
            Link: '/home/my-data',
            icon: () => <MdContactPage />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Relatorios',
            Link: '/home/reports',
            icon: () => <MdDescription />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Contato',
            Link: '/home/contact',
            icon: () => <MdCall />,
            haveOptions: false,
            auth: false,
        },
    ]

    return (
        <nav className={`${isOpenNavBar ? 'w-64' : 'w-20'} transition-all z-50 duration-300 bg-sidebar-background h-screen fixed top-0 left-0 border-r border-r-foreground bg-green-500`}>
            <div className={`p-4 flex flex-col gap-6 transition-all duration-300 ${isOpenNavBar ? '' : ''}`}>
                <div className={`flex flex-row justify-between transition-all duration-300 ${isOpenNavBar ? '' : 'self-center'}`}>
                    <h2 className={`text-2xl font-semibold transition-all duration-300 ${isOpenNavBar ? '' : 'hidden'}`}>Menu</h2>
                    {
                        isOpenNavBar ? (
                            <MdClose className="flex top-4 right-4  cursor-pointer z-50" onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
                        ) : (
                            <MdMenu className="flex top-4 right-4  cursor-pointer z-50" onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
                        )
                    }
                </div>

                <ul className={`space-y-4 transition-all duration-300 ${isOpenNavBar ? '' : 'flex flex-col self-center gap-3'}`}>
                    {
                        menu.map((item, index) => (
                            <Link href={item.Link} key={index} className=" flex items-center space-x-2 cursor-pointer">
                                <item.icon />
                                <span className={`transition-all duration-300 ${isOpenNavBar ? '' : 'hidden'}`}>{item.name}</span>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default SideNavLeft;
