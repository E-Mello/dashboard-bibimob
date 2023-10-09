"use client"

import Image from 'next/image';
import React from 'react';

const ParallaxHome: React.FC = () => {
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrollY = window.scrollY;

    parallaxElements.forEach((element: any) => {
      const speed = parseFloat(element.getAttribute('data-speed'));
      const translateY = scrollY * speed;

      element.style.transform = `translateY(${translateY}px)`;
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="flex relative overflow-hidden">
      {/* Background image */}
      <div
        className="h-screen"
        data-speed="0.3"
      >
        <Image
          src="/path-to-your-background-image.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="flex">
        <section className="pt-32 pb-16">
          <h1 className="text-5xl font-bold">Seja Bem-Vindo</h1>
          <p className="text-xl">Sua mensagem de boas-vindas.</p>
        </section>
      </div>
    </section>
  );
};

export default ParallaxHome;
