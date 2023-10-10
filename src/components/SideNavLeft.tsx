"use client"

import { Call, Description, Home, PermContactCalendar, PriceChange } from '@mui/icons-material';
import React, { useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { Divider } from '@mui/material';
import { IconType } from 'react-icons';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
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
            icon: () => <Home />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Faturamento',
            Link: '/home/billing',
            icon: () => <PriceChange />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Meus Dados',
            Link: '/home/my-data',
            icon: () => <PermContactCalendar />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Relatorios',
            Link: '/home/reports',
            icon: () => <Description />,
            haveOptions: false,
            auth: false,
        },
        {
            name: 'Contato',
            Link: '/home/contact',
            icon: () => <Call />,
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
                            <CloseIcon className="flex top-4 right-4 text-white cursor-pointer z-50" onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
                        ) : (
                            <MenuIcon className="flex top-4 right-4 text-white cursor-pointer z-50" onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
                        )
                    }
                </div>
                <Divider />
                <ul className={`space-y-4 transition-all duration-300 ${isOpenNavBar ? '' : 'flex flex-col self-center gap-3'}`}>
                    {
                        menu.map((item, index) => (
                            <Link href={item.Link} key={index} className="text-white flex items-center space-x-2 cursor-pointer">
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
