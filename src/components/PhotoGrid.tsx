"use client";

import Image from "next/image";
import LoveHearDarkIMG from "../../public/love-heart-dark.jpg";
import { useState } from "react";

export function PhotoGrid() {
  const stopMovie = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    (e.target as HTMLVideoElement).pause();
    // console.log('off');
  };

  const playMovie = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    (e.target as HTMLVideoElement).play();
    // console.log('on');
  };

  const DarlingMP4 =
    "https://wmzeujdrtbfnaeyjakxf.supabase.co/storage/v1/object/public/movies/Darling.mp4?t=2023-06-16T11%3A36%3A33.581Z";

  return (
    <section className="flex flex-col items-center w-full text-center bg-[#1c0522] gap-5">
      <h1 className="text-5xl text-white">Media Projects</h1>

      {/* Photo Grid */}
      <div className="flex flex-col  w-full">
        <div className="flex items-center justify-center gap-20 self-center">
          <div className="flex flex-col gap-5 w-1/2">
            <video
              poster={LoveHearDarkIMG.src}
              src={DarlingMP4}
              onMouseOver={playMovie}
              onMouseOut={stopMovie}
              preload="none"
              loop
              className="w-[40vw]"
            />
            <video
              poster={LoveHearDarkIMG.src}
              src={DarlingMP4}
              onMouseOver={playMovie}
              onMouseOut={stopMovie}
              preload="none"
              loop
              className="w-[40vw]"
            />
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <video
              poster={LoveHearDarkIMG.src}
              src={DarlingMP4}
              onMouseOver={playMovie}
              onMouseOut={stopMovie}
              preload="none"
              loop
              className="w-[40vw]"
            />
            <video
              poster={LoveHearDarkIMG.src}
              src={DarlingMP4}
              onMouseOver={playMovie}
              onMouseOut={stopMovie}
              preload="none"
              loop
              className="w-[40vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
