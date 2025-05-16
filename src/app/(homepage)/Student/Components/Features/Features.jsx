"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import bg from "../../../../../../public/Images/FooterIcons/BgResearch.jpg";

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
        <div className="relative Features-bg py-5 lg:py-14 h-full w-full flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={bg}
                    alt="University building"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-[#004355] bg-opacity-90 z-10"></div>

            <div className="w-11/12 flex flex-col justify-between items-center relative z-20 h-full">

                <Swiper
                    slidesPerView={isDesktop ? 5 : 4}
                    spaceBetween={isDesktop ? 32 : 18}
                    loop={true}
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                        dynamicBullets: true,
                        el: '.custom-pagination',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-full h-full"
                    style={{
                        '--swiper-pagination-bullet-size': '10px',
                        '--swiper-pagination-bullet-width': '10px',
                        '--swiper-pagination-bullet-height': '10px',
                        '--swiper-pagination-bullet-inactive-color': '#ccc',
                        '--swiper-pagination-bullet-inactive-opacity': '0.5',
                        '--swiper-pagination-color': '#0CC0BA',
                        '--swiper-pagination-bullet-horizontal-gap': '6px',
                        '--swiper-pagination-bullet-border-radius': '50%',
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={`slide_${index}`} className="flex justify-center items-center h-full">
                            <div
                                className="bg-white flex justify-center items-center h-24 lg:h-64 cursor-pointer rounded-2xl group hover:bg-[#0CC0BA]"
                            >
                                <div
                                    className="w-full p-2 h-full flex flex-col items-center justify-between lg:justify-center lg:gap-8 rounded-2xl border-none group-hover:filter group-hover:brightness-0 group-hover:invert"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={125}
                                        height={125}
                                        className="w-12 h-12 lg:w-32 lg:h-32 text-center"
                                    />
                                    <div className="font-medium align-text-bottom lg:font-medium lg:text-xl text-[#004355] text-center group-hover:text-white">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    className="custom-pagination"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        zIndex: 40,
                    }}
                ></div>
            </div>
        </div>
    );
}