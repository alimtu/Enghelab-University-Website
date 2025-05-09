'use client';

import React from 'react';
import Image from 'next/image';
import Cuir1 from '../../../../../public/Images/Cuir1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function WhyStudy({ data = [] }) {
    const renderCard = (title, desc) => (
        <div className="w-full h-full shadow-lg shadow-gray-300 rounded-[12px] p-4 hover:text-blue-700 border-t-2 border-b-gray-300">
            <p className="text-center text-[24px] lg:text-3xl font-bold mb-2 border-b-gray-300 border-b-2">{title}</p>
            <p className="text-sm lg:text-base/7">{desc}</p>
        </div>
    );

    return (
        <div className="mt-16">

            <div className="w-[92%] mx-auto flex justify-center flex-col gap-8">
                <h2 className="text-center text-4xl text-[#006273] font-bold">
                    چرا تحصیل در دانشگاه جامع انقلاب اسلامی؟
                </h2>

                <div className="relative w-full lg:h-[590px] h-60 rounded-[12px] overflow-hidden mt-5">
                    <Image
                        src={Cuir1}
                        alt="دانشگاه جامع انقلاب اسلامی"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[12px]"
                    />
                </div>
            </div>


            {Array.isArray(data) && data.length > 0 && (
                <div className="hidden lg:grid grid-cols-3 w-[95%] m-auto p-5 gap-7">
                    {renderCard(data[0].innovative, data[0].innovativedesc)}
                    {renderCard(data[0].Transformational, data[0].Transformationaldesc)}
                    {renderCard(data[0].civilizationmaker, data[0].civilizationmakerdesc)}
                </div>
            )}


            {Array.isArray(data) && data.length > 0 && (
                <div className="block lg:hidden w-[92%] mx-auto mt-5">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="swiper-custom-pagination"
                    >
                        <SwiperSlide>
                            {renderCard(data[0].innovative, data[0].innovativedesc)}
                        </SwiperSlide>
                        <SwiperSlide>
                            {renderCard(data[0].Transformational, data[0].Transformationaldesc)}
                        </SwiperSlide>
                        <SwiperSlide>
                            {renderCard(data[0].civilizationmaker, data[0].civilizationmakerdesc)}
                        </SwiperSlide>
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default WhyStudy;
