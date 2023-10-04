"use client";

import { useEffect, useState } from "react";

import { Footer } from "./Footer";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { PhotoGrid } from "./PhotoGrid";
import ProfileDropdown from "./ProfileDropdown";
import { supabase } from "~/utils/createClient";
import { useRouter } from "next/navigation";

type Session = {};

const Parallax: React.FC = () => {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stars = document.getElementById("stars");
      const moon = document.getElementById("moon");
      const mountainsB = document.getElementById("mountainsB");
      const text = document.getElementById("text");
      const btn = document.getElementById("btn");
      const mountainsF = document.getElementById("mountainsF");
      const header = document.getElementById("header");

      if (stars && moon && mountainsB && text && btn && mountainsF && header) {
        const value = window.scrollY;

        stars.style.left = `${value * 0.05}rem`;
        moon.style.top = `${value * 0.04}rem`;
        mountainsB.style.top = `${value * 0.05}rem`;
        mountainsF.style.top = `${value * 0}rem`;
        text.style.marginRight = `${value * 0.15}rem`;
        text.style.transform = `translateX(-${value * 1}px)`; // Altere o valor de acordo com a velocidade desejada
        text.style.marginTop = `${value * 0.02}rem`;
        btn.style.marginTop = `${value * 0.06}rem`;
        header.style.top = `${value * 0.05}rem`;
        header.style.transform = `translateY(${value * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       setIsAuthenticated(event === "SIGNED_IN");
  //     }
  //   );

  //   return () => {
  //     authListener?.subscription.unsubscribe();
  //   };
  // }, []);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  return (
    <section className="relative flex flex-col w-full  overflow-x-hidden bg-gradient-to-t from-[#2a0e57] to-[#2a0e57d0]">
      <section
        id="header"
        className="absolute h-0 top-0 left-0 z-50 flex w-full pt-10 pr-28 justify-between items-center"
      >
        <LinkScroll
          to="logo"
          smooth
          spy
          offset={-70}
          className="text-white tracking-widest uppercase no-underline font-bold text-3xl pl-20"
          id="logo"
        >
          <Image alt="" src="/Logo.png" width={50} height={50} />
        </LinkScroll>

        <div className="flex justify-center items-center gap-10">
          <Link
            href="/"
            className="hover:text-purple-500  hover:border-purple-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/admin/editing-panel"
            className="hover:text-purple-500  hover:border-purple-500 transition-colors duration-300"
          >
            Painel de Configuração
          </Link>
          <Link
            href="/services/projects"
            className="hover:text-purple-500  hover:border-purple-500 transition-colors duration-300"
          >
            Projetos
          </Link>
          <Link
            href="/services/about"
            className="hover:text-purple-500  hover:border-purple-500 transition-colors duration-300"
          >
            Sobre Mim
          </Link>
          <Link
            href="/services/contact"
            className="hover:text-purple-500  hover:border-purple-500 transition-colors duration-300"
          >
            Contato
          </Link>
          {session && <ProfileDropdown />}
        </div>
      </section>
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden before:box-content before:bottom-0 before:w-full before:absolute before:h-24 before:bg-gradient-to-t before:from-[#1c0522] before:to-transparent before:z-50">
        <Image
          src="/stars.png"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          id="stars"
          alt=""
          width={1920}
          height={1080}
        />
        <Image
          src="/moon.png"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
          id="moon"
          alt=""
          width={1920}
          height={1080}
        />
        <Image
          src="/mountains_behind.png"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          id="mountainsB"
          alt=""
          width={1920}
          height={1080}
        />
        <h2
          className="absolute -right-44 top-80 text-white whitespace-nowrap font-bold text-7xl z-9 transform transition-transform translate-x-0 translate-y-[6.25rem]"
          id="text"
        >
          Mello's Home
        </h2>
        <LinkScroll
          to="sec"
          smooth
          spy
          offset={-70}
          className="absolute top-48 no-underline text-lg bg-white text-[#2b1055] px-8 py-2 rounded-full z-9 cursor-pointer transform transition-transform translate-y-[6rem]"
          id="btn"
        >
          Explorer
        </LinkScroll>
        <Image
          src="/mountains_front.png"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10"
          id="mountainsF"
          alt=""
          width={1920}
          height={1080}
        />
      </section>
      <section
        className="flex py-20 bg-[#1c0522] flex-col gap-4 w-full relative"
        id="sec"
      >
        <h2 className="text-5xl text-white text-center">Scrolling Effects</h2>
        <div className="flex flex-col text-justify gap-4 pl-10 pr-10">
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            explicabo, earum totam eveniet vero exercitationem autem id
            incidunt? Illo tenetur Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </section>
      <PhotoGrid />
      <Footer />
    </section>
  );
};

export default Parallax;
