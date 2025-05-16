'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import bg from '../../../../public/Images/Slider/5.png';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useDeviceDetection } from '../../../lib/hooks/useDeviceDetection';

export default function FeaturesComponent({ data }) {
  const { isDesktop } = useDeviceDetection();

  return (
    <div className="relative Features-bg py-3 pt-6 lg:py-7 lg:pt-10  h-full w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-20">
        <Image src={bg} alt="University building" fill priority className="object-cover " />
      </div>
      <div className="absolute inset-0 bg-secondary-875/90 z-25" />

      <div className="w-11/12 flex flex-col justify-between items-center relative z-30 h-full">
        <Swiper
          slidesPerView={isDesktop ? 5 : 3}
          spaceBetween={isDesktop ? 32 : 18}
          loop={true}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-full h-full custom-pagination-swiper for-hero-section active-white"
        >
          {data.items.map((item, index) => (
            <SwiperSlide key={`slide_${index}`} className="flex justify-center items-center h-full">
              <div className="bg-white flex justify-center items-center h-32 lg:h-64 cursor-pointer rounded-2xl group hover:bg-[#0CC0BA]">
                <div className="w-full p-2 h-full flex flex-col items-center max-lggap-3 lg:justify-center lg:gap-8 rounded-2xl border-none group-hover:filter group-hover:brightness-0 group-hover:invert">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={125}
                    height={125}
                    className="w-16 h-16 lg:w-32 lg:h-32 text-center"
                  />
                  <div className="font-medium align-text-bottom lg:font-medium lg:text-xl text-[#004355] text-center group-hover:text-white max-lg:min-h-[37px] flex justify-center items-center">
                    {item.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
