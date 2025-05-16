'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import FooterSlider from './FooterSlider';

export default function FullScreenSliderComponent({ title = 'علی منتظریون' }) {
  const slides = [
    '/Images/Slider/3.png',
    '/Images/Slider/5.png',
    '/Images/Slider/2.png',
    '/Images/Slider/4.png',
  ];

  return (
    <div className="w-full relative h-[calc(100vh-var(--header-height))] lg:min-h-screen max-lg:mt-18">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`slide_${index}`}
            className="flex justify-center items-center h-full w-full relative"
          >
            <Image
              src={slide}
              alt="Slide Image"
              fill
              sizes="100vw"
              className="object-cover lg:object-fill"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {title && (
        <div className="absolute bottom-30 text-white z-20 font-bold text-2xl w-full text-center justify-center items-center">
          {title}
        </div>
      )}

      <FooterSlider />
    </div>
  );
}
