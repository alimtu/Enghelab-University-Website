"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Features() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const items = [
        {
            name: "سامانه آموزش بهستان",
            image: "/images/Features/1.svg",
        },
        {
            name: "سامانه کتابخانه",
            image: "/images/Features/2.svg",
        },
        {
            name: "صندوق رفاه دانشجویی",
            image: "/images/Features/3.svg",
        },
        {
            name: "سامانه تغذیه",
            image: "/images/Features/4.svg",
        },
        {
            name: "تقویم تحصیلی",
            image: "/images/Features/5.svg",
        },
    ];

    return (
        <div className="relative Features-bg h-[250px] lg:h-[350px] w-full flex items-center justify-center"> {/* Increased height and added padding-bottom */}
            <div className="absolute inset-0 bg-[#004355] bg-opacity-90"></div>

            <div className="w-11/12 flex justify-between items-center relative z-10 h-10/12 ">
                <Swiper
                    slidesPerView={isDesktop ? 4 : 3}
                    spaceBetween={isDesktop ? 16 : 8}
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-full h-full"
                    style={{
                        '--swiper-pagination-bottom': '0px',
                        '--swiper-pagination-padding-top': '0px',
                        '--swiper-pagination-bullet-size': '10px',
                        '--swiper-pagination-bullet-width': '10px',
                        '--swiper-pagination-bullet-height': '10px',
                        '--swiper-pagination-bullet-inactive-color': '#fff',
                        '--swiper-pagination-bullet-inactive-opacity': '0.5',
                        '--swiper-pagination-bullet-active-color': '#fff',
                        '--swiper-pagination-bullet-horizontal-gap': '6px',
                        '--swiper-pagination-bullet-border-radius': '50%',
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={`slide_${index}`} className="flex justify-center items-center h-full">
                            <div
                                className="h-10/12 bg-white flex justify-center items-center cursor-pointer rounded-2xl group hover:bg-[#0CC0BA]"
                            >
                                <div
                                    className="w-[110px] sm:w-[130px] md:w-[180px] lg:w-[230px] bg-white flex items-center justify-center flex-col gap-5 rounded-2xl border-none group-hover:bg-[#0CC0BA]"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={96}
                                        height={96}
                                        className="w-24 h-24 text-center"
                                    />
                                    <div className="font-medium lg:font-bold text-center group-hover:text-white">
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