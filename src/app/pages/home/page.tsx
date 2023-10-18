"use client"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useRef, useState } from 'react';

import Image from 'next/image';
import { isDarkModeAtom } from '@/atoms/themeModeAtom';
import { useAtom } from 'jotai';

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode] = useAtom(isDarkModeAtom);

  // Images for home page
  const mulheres_sorrindo = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/mulheres_sorrindo02.jpg'
  const carro_mapa = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/carro_mapa02.jpg'
  const celular_maps = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/celular_maps02.jpg'
  const homem_familia = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/homem_familia02.jpg'
  const melhores_ganhos = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/melhores_ganhos.png'
  const motorista = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/motorista02.jpg'
  const motorista_valorizado = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/motorista_valorizado.png'
  const mulher_chave = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/mulher_chave02.jpg'
  const mulher_cinto = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/mulher_cinto02.jpg'
  const mulher_sorrindo = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/mulher_sorrindo02.jpg'
  const preco_bom = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/preco_bom.png'
  const freedom = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/freedom02.jpg'
  const partnership = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/partnership02.jpg'
  const preco_justo = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/preco_justo.png'
  const segurando_mapa = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/segurando_mapa02.jpg'
  const trust = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/HomePagePics/trust.jpg'

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`overflow-hidden z-0 w-screen h-full`}>
      <Parallax ref={parallax} pages={3} style={{ display: 'flex', height: '100%' }} className={`${darkMode ? 'bg-gray-700' : 'bg-slate-300'}`}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <Image width={1980} height={500} src={freedom} alt="Liberdade" style={{ width: '15%', marginLeft: '70%', display: 'block' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image width={1980} height={500} src={trust} alt='Confianca' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <Image width={1980} height={500} src={carro_mapa} alt='Carro em cima do mapa' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image width={1980} height={500} src={motorista} alt='Motorista' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <Image width={1980} height={500} src={mulher_cinto} alt='Mulher colocando cinto' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image width={1980} height={500} src={segurando_mapa} alt='Segurando mapa dentro do carro' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <Image width={1980} height={500} src={celular_maps} alt='GPS no celular' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image width={1980} height={500} src={mulher_sorrindo} alt='Mulher sorrindo' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <Image width={1980} height={500} src={preco_bom} alt='Preco justo 02' style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <Image width={1980} height={500} src={preco_justo} alt='Preco justo' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image width={1980} height={500} src={motorista_valorizado} alt='Motorista valorizado' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image width={1980} height={500} src={melhores_ganhos} alt='Melhores ganhos' style={{ display: 'flex', width: '15%', marginLeft: '75%', marginBottom: '300px' }} />

        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <Image width={1980} height={500} src={mulher_chave} alt='Mulher segurando chave' style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image width={1980} height={500} src={partnership} alt='Parceria de Sucesso' style={{ width: '100%' }} className='' />
          <h1 className='absolute text-7xl font-bold translate-x-4 pt-96'>Parceria de Sucesso !!!</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <h1 className='pr-20 text-3xl font-bold'>Conte conosco sempre !!!</h1>
          <Image width={1980} height={500} src={mulheres_sorrindo} alt='Mulheres Sorrindo' style={{ width: '40%' }} className='pr-20' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <Image width={1980} height={500} src={homem_familia} alt='Homem e Familia' style={{ width: '40%' }} />
        </ParallaxLayer>

      </Parallax>
    </section>
  );
};