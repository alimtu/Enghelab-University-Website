'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import {ChevronLeft} from "lucide-react";

const HomePageGallery = () => {
    const [selectedSectionId, setSelectedSectionId] = useState(1);
    const [realIndex, setRealIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getSlideHeight = (index) => {
        const isReal = index === realIndex;
        if (windowWidth < 1024) {
            return isReal ? '280px' : '220px';
        } else {
            return isReal ? '500px' : '440px';
        }
    };

    const sections = [
        { id: 1, name: 'زندگی در دانشگاه' },
        { id: 2, name: 'مصاحبه جذب هیئت علمی' },
        { id: 3, name: 'بسیج دانشجویی' },
        { id: 4, name: 'ثبت نام دانشجویان' },
    ];

    const items = [
        {
            img: '/images/Gallery/1.png',
            title: 'ثبت نام دانشجو مقطه کارشناسی ارشد 1403-1404',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/2.png',
            title: 'جذب هیئت علمی',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/3.png',
            title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/4.png',
            title: 'ثبت نام دانشجو مقطه کارشناسی ارشد 1403-1404',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/1.png',
            title: 'جذب هیئت علمی',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/2.png',
            title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/3.png',
            title: 'ثبت نام دانشجو مقطه کارشناسی ارشد 1403-1404',
            date: '1402/12/01',
        },
        {
            img: '/images/Gallery/4.png',
            title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
            date: '1402/12/01',
        },
    ];

    const updateActiveSlide = (swiper) => {
        setRealIndex(swiper.realIndex);
    };

    const onSwiper = (swiper) => {

    };

    return (
        <div className="w-full flex flex-col gap-6 px-5 items-center justify-center mt-6">
            <div className="font-bold text-xl">فیلم و عکس</div>

            <div className="w-full text-center justify-center flex flex-col lg:px-20 lg:flex-row lg:gap-8">
                {sections.map((section) => (
                    <div
                        key={`section_${section.id}`}
                        className={`w-full lg:flex-1/4 py-2 rounded-md cursor-pointer ${
                            selectedSectionId === section.id
                                ? 'bg-[#0CC0BA] text-white'
                                : 'lg:bg-gray-50 border-gray-200 text-black'
                        }`}
                        onClick={() => setSelectedSectionId(section.id)}
                    >
                        {section.name}
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-between items-center">
                <Swiper
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                    }}
                    className="w-full h-10/12 px-96"
                    style={{
                        '--swiper-pagination-color': '#244a9a',
                        '--swiper-pagination-bullet-inactive-color': '#E0E0E0',
                        '--swiper-pagination-bullet-inactive-opacity': '1',
                    }}
                    modules={[Autoplay, Pagination]}
                    spaceBetween={16}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    onSwiper={onSwiper}
                    onSlideChange={updateActiveSlide}
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
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={`slide_${index}`}
                            className="rounded-xl"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                padding: '20px',
                            }}
                        >
                            <div
                                className="w-full bg-white border rounded-xl border-gray-200 flex items-center justify-center flex-col gap-3 relative overflow-hidden"
                                style={{
                                    height: getSlideHeight(index),
                                    maxWidth: '867px',
                                    transform: index === realIndex ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                <div className="h-full w-full relative rounded-xl">
                                    <Image
                                        src={item.img}
                                        alt="Gallery Image"
                                        width={867}
                                        height={542}
                                        className="lg:w-full h-full object-fit rounded-xl"
                                    />
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
                <button className="flex justify-between items-center">
                    <Link className="text-gray-500 font-medium p-[12px]" href="#">
                        گالری تصاویر و ویدیو‌ها
                    </Link>
                    <ChevronLeft size={20} />
                </button>
            </div>
        </div>
    );
};

export default HomePageGallery;
