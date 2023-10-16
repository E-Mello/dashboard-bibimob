"use client"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useRef, useState } from 'react';
import { othersPic, othersPic2 } from '../../../../public/otherspic';

import Image from 'next/image';
import carro_mapa from '../../../../public/otherspic/carro_mapa.jpg';
import celular_maps from '../../../../public/otherspic/celular_maps.jpg';
import freedom from '../../../../public/freedom.jpg';
import homem_familia from '../../../../public/otherspic/homem_familia.jpg';
import { isDarkModeAtom } from '@/atoms/themeModeAtom';
import melhores_ganhos from '../../../../public/bibimob/melhores_ganhos.png'
import motorista from '../../../../public/otherspic/motorista.jpg';
import motorista_valorizado from '../../../../public/bibimob/motorista_valorizado.png'
import mulher_chave from '../../../../public/otherspic/mulher_chave.jpg';
import mulher_cinto from '../../../../public/otherspic/mulher_cinto.jpg';
import mulher_sorrindo from '../../../../public/otherspic/mulher_sorrindo.jpg';
import mulheres_sorrindo from '../../../../public/otherspic/mulheres_sorrindo.jpg';
import partnership from '../../../../public/partnership.jpg';
import preco_bom from '../../../../public/bibimob/preco_bom.png'
import preco_justo from '../../../../public/bibimob/preco_justo.png'
import segurando_mapa from '../../../../public/otherspic/segurando_mapa.jpg';
import trust from '../../../../public/trust.jpg'
import { useAtom } from 'jotai';

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode] = useAtom(isDarkModeAtom);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const imageArray = Object.entries(othersPic).map(([key, value]) => ({
    src: value.src,
    alt: key,
  }));

  const imageArray2 = Object.entries(othersPic2).map(([key, value]) => ({
    src: value.src,
    alt: key,
  }));

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
          <Image src={freedom} alt="Liberdade" style={{ width: '15%', marginLeft: '70%', display: 'block' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image src={trust} alt='Confianca' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <Image src={carro_mapa} alt='Carro em cima do mapa' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image src={motorista} alt='Motorista' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <Image src={mulher_cinto} alt='Mulher colocando cinto' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image src={segurando_mapa} alt='Segurando mapa dentro do carro' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <Image src={celular_maps} alt='GPS no celular' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image src={mulher_sorrindo} alt='Mulher sorrindo' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <Image src={preco_bom} alt='Preco justo 02' style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <Image src={preco_justo} alt='Preco justo' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image src={motorista_valorizado} alt='Motorista valorizado' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image src={melhores_ganhos} alt='Melhores ganhos' style={{ display: 'flex', width: '15%', marginLeft: '75%', marginBottom: '300px' }} />

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
          <Image src={mulher_chave} alt='Mulher segurando chave' style={{ width: '60%' }} />
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
          <Image src={partnership} alt='Parceria de Sucesso' style={{ width: '100%' }} className='' />
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
          <Image src={mulheres_sorrindo} alt='Mulheres Sorrindo' style={{ width: '40%' }} className='pr-20' />
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
          <Image src={homem_familia} alt='Homem e Familia' style={{ width: '40%' }} />
        </ParallaxLayer>

      </Parallax>
    </section>
  );
};