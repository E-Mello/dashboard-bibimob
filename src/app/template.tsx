"use client"

import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import React, { useState } from "react";

import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { useAtom } from "jotai";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <span onClick={toggleDarkMode} className="transition-all duration-300">
        {isDarkMode ? (
          <BsSun className={"absolute text-3xl cursor-pointer right-0 mr-3 mt-3"} style={{ color: "#a14e17" }} />
        ) : (
          <BsMoonStarsFill className={"absolute text-3xl cursor-pointer right-0 mr-3 mt-3"} style={{ color: "#1e177c", transform: "scaleX(-1)" }} />
        )}
      </span>
      {children}
    </div>
  );
}
