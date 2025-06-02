'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import FooterSlider from './FooterSlider';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { handleClickOnItem } from '../../../lib/utils/useFulFunctions';
import { useRouter } from 'next/navigation';

export default function FullScreenSliderComponent({ data }) {
  const { slides, title } = data;
  const router = useRouter();

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
            onClick={() => {
              if (slide.link) {
                handleClickOnItem(slide.link, router);
              } else {
                console.warn(`item at index ${index} has no link property.`);
              }
            }}
          >
            <Image
              src={slide.image}
              alt="Slide Image"
              fill
              className="object-cover aspect-square"
              priority={index === 0}
            />

            {slide.title && (
              <div className="absolute bottom-30 text-white z-20 font-bold text-2xl w-full text-center justify-center items-center flex">
                {slide.title}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <FooterSlider />
    </div>
  );
}
