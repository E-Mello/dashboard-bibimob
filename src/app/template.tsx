"use client"

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import React, { useState } from "react";

import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { useAtom } from "jotai";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-white' : 'bg-black'}`}>
      <span onClick={toggleDarkMode} className="transition-all duration-300 absolute right-0 pr-10 pt-7 text-3xl cursor-pointer z-50">
        {isDarkMode ? (
          <BsSunFill style={{ color: "#d1b722" }} />
        ) : (
          <BsMoonStarsFill style={{ color: "#1e177c", transform: "scaleX(-1)" }} />
        )}
      </span>
      {children}
    </div>
  );
}
