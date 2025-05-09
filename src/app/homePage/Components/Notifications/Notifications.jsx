'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Notifications({
                                          items = [],
                                          CompTitle = 'اطلاعیه ها',
                                          buttonText = 'مشاهده همه',
                                          iconSrc = '/Images/Notifications/AngleLeft.svg',
                                      }) {
    return (
        <div className="w-full">
            <div className="relative w-full px-5 lg:px-20 pb-8 mx-auto mt-7 lg:mt-16">
                <div className="flex flex-row items-center justify-between text-center mb-10 lg:text-right">
                    <h3 className="text-[#101828] font-medium text-3xl">{CompTitle}</h3>
                    <button className="hidden lg:flex justify-between items-center">
                        <Link className="text-gray-500 font-medium p-[12px]" href="#">
                            {buttonText}
                        </Link>
                        <Image
                            className="w-6 bg-clip-text text-transparent bg-gray-500"
                            src={iconSrc}
                            alt=""
                            width={24}
                            height={24}
                        />
                    </button>
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
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
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
                    className="cards_container w-full scroll-smooth mb-[20px] pb-3"
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={`item_${index}`}
                            className="card h-full flex flex-col pb-4 border-[1px] rounded-2xl border-neutral-100"
                        >
                            <div className="img rounded-2xl w-full aspect-[4/3] overflow-hidden"> {/* Fixed aspect ratio for image */}
                                <Image
                                    className="w-full h-full object-cover" /* Ensure image covers the space */
                                    src={item.pic}
                                    alt={item.title}
                                    width={250}
                                    height={200}
                                />
                            </div>

                            <div className="flex flex-col px-4 h-full"> {/* Full height for content */}
                                <div className="title mt-4 mb-3 min-h-[3.5em]"> {/* Fixed height for title */}
                                    <Link
                                        className="text-[#005B90] text-sm font-bold line-clamp-2"
                                        href="#"
                                    >
                                        {item.title}
                                    </Link>
                                </div>

                                <div className="text text-[#252B37] text-opacity-75 mb-3 flex-grow min-h-[7.5em]"> {/* Fixed height for description */}
                                    <p className="text-sm leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="date text-[#717680] text-sm text-left flex justify-end items-center gap-2">
                                    <p>{item?.date || '-'}</p>
                                    <Image
                                        src="/images/Features/1.svg"
                                        alt={"Calendar"}
                                        width={16}
                                        height={16}
                                        className="w-4 h-4 text-center "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex items-center justify-center lg:hidden">
                    <button className="flex justify-between items-center">
                        <Link className="text-gray-500 font-medium p-[12px] text-base " href="#">
                            {buttonText}
                        </Link>
                        <Image
                            className="w-6 bg-clip-text text-transparent bg-gray-500"
                            src={iconSrc}
                            alt=""
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}