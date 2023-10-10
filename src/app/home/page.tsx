"use client"

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, { useState } from 'react';
import { othersPic, othersPic2 } from '../../../public/otherspic';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import freedom from '../../../public/freedom.jpg';
import partnership from '../../../public/partnership.jpg';
import trust from '../../../public/trust.jpg';

const Index: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="flex overflow-hidden z-0">
      <Carousel
        showArrows={true}
        showThumbs={true}
        showStatus={true}
        infiniteLoop={false}
        autoPlay={false}
        interval={3000}
        selectedItem={currentIndex}
        onChange={handleSlideChange}
        className='bg-red-500 w-[95.5vw] ml-[5rem] h-[93.5vh] overflow-hidden'
        verticalSwipe='standard'
      >
        <Carousel
          showArrows={true}
          showThumbs={true}
          showStatus={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          selectedItem={currentIndex}
          onChange={handleSlideChange}
          className='bg-red-500 w-[95.5vw] ml-[5rem] h-[93.5vh] overflow-hidden z-0'
        >
          {imageArray.map((image, index) => (
            <div key={index} className='h-[93.5vh] z-0'>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </Carousel>

        <div>
          <Image src={partnership} alt="Parceria de Sucesso" layout="fill" objectFit="cover" className="w-full h-full" />
        </div>

        <Carousel
          showArrows={true}
          showThumbs={true}
          showStatus={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          selectedItem={currentIndex}
          onChange={handleSlideChange}
          className='bg-red-500 w-[95.5vw] ml-[5rem] h-[93.5vh] overflow-hidden z-0'
        >
          {imageArray2.map((image, index) => (
            <div key={index} className='h-[93.5vh] z-0'>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          ))}
        </Carousel>

        <div>
          <Image src={freedom} alt="Liberdade Financeira" layout="fill" objectFit="cover" className="w-full h-full" />
        </div>
      </Carousel>
    </section>
  );
};

export default Index;
