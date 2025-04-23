"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import FooterSlider from "@/app/homePage/Components/Slider/FooterSlider";

export default function Slider({ title = "" }) {
    const [slides, setSlides] = useState([
        '/Images/Slider/3.png',
        '/Images/Slider/5.png',
        '/Images/Slider/2.png',
        '/Images/Slider/4.png',
    ]);

    return (
        <div className={`w-full min-h-[calc(100vh*3/4)] bg-white relative flex justify-center items-center `}>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                    el: '.custom-pagination',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Pagination, Navigation , Autoplay]}
                className={`w-full`}
                style={{
                    '--swiper-pagination-bottom': '42px',
                    '--swiper-pagination-bullet-width': '12px',
                    '--swiper-pagination-bullet-height': '12px',
                    '--swiper-pagination-bullet-inactive-color': '#ccc',
                    '--swiper-pagination-bullet-inactive-opacity': '0.5',
                    '--swiper-pagination-color': '#0CC0BA',
                    '--swiper-pagination-bullet-horizontal-gap': '6px',
                    '--swiper-pagination-bullet-border-radius': '50%'
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={`slide_${index}`}
                        className={`flex justify-center items-center h-full w-full`}
                    >
                        <div className="w-full h-screen flex justify-center items-center min-h-[calc(100vh*3/4)] max-h-[calc(100vh*3/4)]">
                            <Image
                                src={slide}
                                alt="Slide Image"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority={index === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
                {/* Custom container for Swiper pagination bullets */}
                <div
                    className="custom-pagination"
                    style={{
                        position: 'absolute',
                        bottom: '42px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10
                    }}
                ></div>
            </Swiper>

            {title && (
                <div className="absolute bottom-20 text-white z-20 font-bold text-xl">
                    {title}
                </div>
            )}

            <FooterSlider />
        </div>
    );
}