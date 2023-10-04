"use client";

import { Inter } from "next/font/google";
import Link from "next/link";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex flex-col gap-5 h-full bg-[#230c49] `}>
      <div
        id="header"
        className="flex h-20 z-50 pt-4 w-full pr-28 justify-between items-center bg-gradient-to-r from-[#331138] via-[#6a64c3] to-[#301231] text-white rounded-lg p-4 shadow-lg"
      >
        <Link
          href="#logo"
          className="text-white tracking-widest uppercase no-underline font-bold text-3xl pl-16"
          id="logo"
        >
          Logo
        </Link>
        <div className="flex justify-center items-center gap-10">
          <Link href="/" className="text-white  hover:text-purple-500">
            Home
          </Link>
          <Link
            href="/services/projects"
            className="text-white hover:text-purple-500"
          >
            Projetos
          </Link>
          <Link
            href="/services/about"
            className="text-white hover:text-purple-500"
          >
            About
          </Link>
          <Link
            href="/services/contact"
            className="text-white hover:text-purple-500"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-full">{children}</div>
    </section>
  );
}
