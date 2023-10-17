"use client"

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import React, { useState } from "react";

import { MdMenu } from "react-icons/md";
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { isOpenNavBarAtom } from "@/atoms/openNavBarAtom";
import { useAtom } from "jotai";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  const [isOpenNavBar, setIsOpenNavBar] = useAtom(isOpenNavBarAtom); // estado para controlar se a barra lateral está aberta ou não

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='flex'>
      <span className="flex cursor-pointer">
        <MdMenu className={`fixed h-15 w-15 mt-7 ml-6 cursor-pointer text-3xl z-[60] ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={() => setIsOpenNavBar(!isOpenNavBar)} />
      </span>
      <span onClick={toggleDarkMode} className=" transition-all duration-300 absolute right-0 pr-10 pt-7 text-3xl cursor-pointer z-50">
        {isDarkMode ? (
          <BsSunFill style={{ color: "#d1b722" }} />
        ) : (
          <BsMoonStarsFill style={{ color: "#1e177c", transform: "scaleX(-1)" }} />
        )}
      </span>
      {children}
    </div >
  );
}
