'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { ChevronsLeft } from 'lucide-react';
import 'swiper/css';

import Link from "next/link";
import Image from "next/image";

// Sample news items
const newsItems = [
    {
        news: "مهمترین اخبار روز: بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news1",
    },
    {
        news: "بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news2",
    },
    {
        news: "مهمترین اخبار روز: بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news1",
    },
    {
        news: "بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news2",
    },
    {
        news: "مهمترین اخبار روز: بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news1",
    },
    {
        news: "بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news2",
    },
    {
        news: "مهمترین اخبار روز: بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news1",
    },
    {
        news: "بغداد الیوم مدعی شد: عمان پیام مهم آمریکا را به ایران داد",
        link: "https://www.example.com/news2",
    },
    // Add more news as needed
];

export default function FooterSlider() {
    return (
        <div className="w-full h-11 absolute bottom-0 z-20 bg-opacity-20 backdrop-blur-sm">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={4500} // Smooth speed
                autoplay={{
                    delay: 0, // No delay between transitions
                    disableOnInteraction: false,
                }}
                freeMode={true}
                grabCursor={false}
                allowTouchMove={false}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 300,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1240: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="w-full h-full "
            >
                {newsItems.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="w-auto flex flex-wrap text-center  items-center justify-center px-4 text-sm text-white lg:whitespace-nowrap"
                    >
                        <div className="w-full h-full flex flex-row justify-center items-center gap-2 ">
                            <p className="line-clamp-1">{item.news}</p>
                            <Link
                                className="bg-white py-1 px-2 text-xs text-[#004355] rounded-2xl border border-[#004355] flex items-center justify-center whitespace-nowrap gap-1"
                                href={item.link}>
                                دیدن خبر
                                <ChevronsLeft />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
