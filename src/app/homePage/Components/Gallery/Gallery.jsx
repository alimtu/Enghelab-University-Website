'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePageGallery = () => {
    const [selectedSectionId, setSelectedSectionId] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        { id: 1, name: "زندگی در دانشگاه" },
        { id: 2, name: "مصاحبه جذب هیئت علمی" },
        { id: 3, name: "بسیج دانشجویی" },
        { id: 4, name: "ثبت نام دانشجویان" },
    ];

    const items = [
        "/images/Gallery/1.png",
        "/images/Gallery/2.png",
        "/images/Gallery/3.png",
        "/images/Gallery/4.png",
        "/images/Gallery/1.png",
        "/images/Gallery/2.png",
        "/images/Gallery/3.png",
        "/images/Gallery/4.png",
    ];

    const updateActiveSlide = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const onSwiper = (swiper) => {
        console.log(swiper);
    };

    return (
        <div className="w-full flex flex-col gap-6 items-center justify-center mt-6">
            <div className="font-bold text-xl">فیلم و عکس</div>

            <div className="w-full lg:w-1/2 justify-between flex flex-col lg:flex-row gap-2 lg:gap-0">
                {sections.map((section) => (
                    <div
                        key={`section_${section.id}`}
                        className={`px-3 py-2 rounded-md cursor-pointer border ${
                            selectedSectionId === section.id
                                ? 'bg-green-400 border-green-600 text-white'
                                : 'lg:bg-gray-50 border-gray-200 text-black'
                        }`}
                        onClick={() => setSelectedSectionId(section.id)}
                    >
                        {section.name}
                    </div>
                ))}
            </div>

            <div className="w-full lg:w-11/12 flex justify-between items-center">
                <Swiper
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                    }}
                    className='w-full h-[400px]'
                    style={{
                        '--swiper-pagination-color': '#4CAF50',
                        '--swiper-pagination-bullet-inactive-color': '#E0E0E0',
                        '--swiper-pagination-bullet-inactive-opacity': '1',
                    }}
                    modules={[Autoplay, Pagination]}
                    spaceBetween={16}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    onSwiper={onSwiper}
                    onSlideChange={updateActiveSlide}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={`slide_${index}`}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                padding: '20px',
                            }}
                        >
                            <div
                                className="w-full bg-white border border-gray-200 flex items-center justify-center flex-col gap-3 rounded-md"
                                style={{
                                    height: index === activeIndex ? '362px' : '262px',
                                    maxWidth: '867px',
                                    transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                <div className="h-[500px] w-full">
                                    <Image
                                        src={item}
                                        alt="Feature Image"
                                        width={867}
                                        height={542}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full flex justify-center items-center">
                <button className="flex gap-3 items-center border bg-primary-500 border-white rounded px-4 py-2 text-white hover:bg-primary-700 transition-colors">

                    مشاهده تصاویر
                    <span className="text-lg ">

              <Image
                  className="w-[24px]"
                  src='/Images/Notifications/arrow-left-01-sharp.png'
                  alt=""
                  width={24}
                  height={24}
              />
          </span>
                </button>
            </div>
        </div>
    );
};

export default HomePageGallery;