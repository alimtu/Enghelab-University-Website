'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const sections = [
    { id: 1, name: 'زندگی در دانشگاه' },
    { id: 2, name: 'مصاحبه جذب هیئت علمی' },
    { id: 3, name: 'بسیج دانشجویی' },
    { id: 4, name: 'ثبت نام دانشجویان' },
];

const images = [
    '/images/Gallery/1.png',
    '/images/Gallery/2.png',
    '/images/Gallery/3.png',
    '/images/Gallery/4.png',
    '/images/Gallery/1.png',
    '/images/Gallery/2.png',
    '/images/Gallery/3.png',
    '/images/Gallery/4.png',
];

export default function HomePageGallery() {
    const [selectedSectionId, setSelectedSectionId] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full flex flex-col gap-6 items-center justify-center mt-6">
            <div className="font-bold text-xl">فیلم و عکس</div>

            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`px-3 py-2 rounded-md cursor-pointer ${
                            selectedSectionId === section.id
                                ? 'bg-green-400 border border-green-600 text-white'
                                : 'lg:bg-gray-100 border border-gray-200 text-black'
                        }`}
                        onClick={() => setSelectedSectionId(section.id)}
                    >
                        {section.name}
                    </div>
                ))}
            </div>

            <div className="w-full lg:w-11/12 flex justify-between items-center">
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    centeredSlides
                    spaceBetween={16}
                    modules={[Pagination, Autoplay]}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {images.map((imgSrc, index) => (
                        <SwiperSlide key={`slide_${index}`} className="flex justify-center items-center h-full">
                            <div className="h-[542px] bg-white flex w-[867px]">
                                <div className="h-[500px] w-full bg-white border border-gray-200 flex items-center justify-center flex-col gap-3 rounded-md">
                                    <Image
                                        src={imgSrc}
                                        alt={`Slide ${index}`}
                                        width={800}
                                        height={500}
                                        className="w-full h-full object-fill rounded-md"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full flex justify-center items-center">
                <button className="flex gap-3 items-center border border-primary px-4 py-2 rounded-md">
                    <i className="fa-regular fa-gallery-thumbnails text-lg text-blue-600"></i>
                    مشاهده تصاویر
                </button>
            </div>
        </div>
    );
}
