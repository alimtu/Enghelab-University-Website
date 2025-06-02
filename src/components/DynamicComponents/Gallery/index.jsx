'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';

import 'swiper/css';
import 'swiper/css/pagination';
import { handleClickOnItem } from '../../../lib/utils/useFulFunctions';
import { useRouter } from 'next/navigation';

const HomePageGallery = ({ data }) => {
  const [selectedSectionId, setSelectedSectionId] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  return (
    <div
      className={`w-full flex flex-col lg:gap-8 gap-4 px-4 lg:px-20 items-center justify-center ${data.className}`}
    >
      <div className="font-bold lg:text-2xl text-xl">{data.title}</div>

      <div className="w-full text-center justify-between flex flex-col lg:flex-row lg:gap-6 gap-2 mt-2 lg:mt-0 ">
        {data.sections.map(section => (
          <div
            key={`section_${section.id}`}
            className={`w-full lg:flex-1/4 py-3 rounded-sm cursor-pointer border border-gray-100 ${
              selectedSectionId === section.id
                ? 'bg-primary-500 text-white'
                : 'lg:bg-gray-50  text-black'
            }`}
            onClick={() => setSelectedSectionId(section.id)}
          >
            <div className="text-sm">{section.name}</div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between items-center ">
        <Swiper
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          className="w-full gallery-swiper custom-pagination-swiper"
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          autoplay
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.8,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {data.items.map((item, index) => (
            <SwiperSlide
              key={`slide_${index}`}
              className="flex items-center"
              onClick={() => {
                if (item.link) {
                  handleClickOnItem(item.link, router);
                } else {
                  console.warn(`item at index ${index} has no link property.`);
                }
              }}
            >
              <div className="flex flex-col h-[280px] lg:h-[537px] justify-center items-center">
                <div
                  className={`transition-all duration-300 ease-in-out h-[280px] ${
                    activeIndex === index % data.items.length ? 'lg:h-[537px]' : 'lg:h-[449px]'
                  } relative rounded-xl overflow-hidden w-full`}
                >
                  <Image src={item.img} alt="Gallery Image" className="object-cover" fill />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/70 z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-2 z-20 text-white">
                    <p className="text-xs line-clamp-2">{item.title}</p>
                    <p className="text-gray-300">{item.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full flex justify-center items-center">
        <Button className="bg-primary-500 min-h-12 hover:bg-primary-500/90">
          <div className="flex gap-2 items-center">
            {data.buttonTitle}
            <ChevronLeft size={20} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HomePageGallery;
