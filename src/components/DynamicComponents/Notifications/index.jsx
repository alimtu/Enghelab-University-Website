'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Calendar, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { handleClickOnItem } from '../../../lib/utils/useFulFunctions';

export default function NotificationsComponent({ data }) {
  const router = useRouter();
  return (
    <div className={`relative w-full pr-4 lg:px-20  flex flex-col gap-6 ${data.className}`}>
      <div className="flex flex-row items-center justify-center lg:justify-between lg:text-right">
        <h3 className="text-[#101828] font-bold text-2xl lg:text-3xl">{data.title}</h3>
        <Button className="bg-primary-500 hidden lg:flex">
          {data.buttonTitle}
          <ChevronLeft size={20} />
        </Button>
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={1}
        spaceBetween={15}
        roundLengths={true}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 15,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="w-full scroll-smooth"
      >
        {data.items.map((item, index) => (
          <SwiperSlide
            key={`item_${index}`}
            className="h-full flex flex-col lg:pb-4  pb-6 border rounded-2xl border-neutral-100 "
            onClick={() => {
              if (item.link) {
                handleClickOnItem(item.link, router);
              } else {
                console.warn(`item at index ${index} has no link property.`);
              }
            }}
          >
            <div className="rounded-t-2xl w-full overflow-hidden lg:min-h-[221px] lg:max-h-[221px] min-h-[168px] max-h-[168px] relative">
              <Image
                className="w-full h-full object-cover"
                fill
                priority
                src={item.pic}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col px-4 h-full lg:min-h-[224px] lg:max-h-[224px] min-h-[199px] max-h-[199px]">
              <div className="title mt-4 lg:mb-3">
                <Link className=" text-sm lg:text-base leading-6 font-bold line-clamp-2" href="#">
                  {item.title}
                </Link>
              </div>
              <div className="text text-[#252B37] text-opacity-75 mb-3 flex-grow">
                <p className="lg:text-sm text-xs text-gray-500 leading-7 line-clamp-3">
                  {item.description}
                </p>
              </div>
              <div className="date text-[#717680] text-sm text-left flex justify-end items-center gap-2">
                <Calendar size={18} />
                <p className="text-xs lg:text-sm">{item.date || '-'}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center lg:hidden w-full">
        <Button className="bg-primary-500 font-light">
          {data.buttonTitle}
          <ChevronLeft size={20} />
        </Button>
      </div>
    </div>
  );
}
