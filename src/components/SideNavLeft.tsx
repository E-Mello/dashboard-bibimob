"use client"

import React, { useState } from 'react';

import CloseIcon from '@material-ui/icons/Close'; // ícone de fechar
import { Divider } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu'; // ícone do menu
import { isOpenNavBarAtom } from '@/atoms/openNavBarAtom';
import { useAtom } from 'jotai';

const SideNavLeft: React.FC = () => {
    const [isOpenNavBar, setIsOpenNavBar] = useAtom(isOpenNavBarAtom); // estado para controlar se a barra lateral está aberta ou não
    return (
        <nav className={`${isOpenNavBar ? 'w-64' : 'w-24'} bg-sidebar-background h-screen fixed top-0 left-0 border-r border-r-foreground bg-green-500`}>
            <div className="p-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                    {
                        isOpenNavBar ? (
                            <MenuIcon className="absolute top-4 right-4 text-white cursor-pointer" onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
                        ) : (
                            <CloseIcon className="absolute top-4 right-4 text-white cursor-pointer" onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
                        )
                    }
                </div>
                <Divider />
                <ul className="space-y-4">
                    <li>
                        <a
                            href="#"
                            className="flex items-center hover:bg-primary-light rounded-md p-2 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center hover:bg-primary-light rounded-md p-2 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            Produtos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center hover:bg-primary-light rounded-md p-2 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            Clientes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SideNavLeft;
