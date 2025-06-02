'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Input } from '../../ui/input';

export default function HalfSliderComponent({ data }) {
  const { title, slides, className, hasSearch } = data;

  return (
    <div
      className={`w-full h-full bg-white relative flex justify-center items-center mt-18 lg:mt-0 ${className}`}
    >
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
        className="w-full h-full half-page hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`slide_${index}`}
            className="flex justify-center items-center h-full w-full "
          >
            <div className="w-full h-screen flex justify-center items-center lg:min-h-[calc(100vh*9/12)] lg:max-h-[calc(100vh*9/12)] min-h-[calc(100vh*3/5)] max-h-[calc(100vh*3/5)]">
              <Image
                src={slide.image}
                alt="Slide Image"
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>

            {slide.title && (
              <div className="absolute bottom-14 text-white z-20 font-bold text-xl lg:text-2xl w-full justify-center flex">
                {slide.title}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
