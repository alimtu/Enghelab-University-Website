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
                                          buttonText = 'مشاهده همه اطلاعیه ها',
                                          iconSrc = '/Images/Notifications/arrow-left-01-sharp.png',
                                      }) {
    return (
        <div className="w-full">
            <div className="relative w-full px-6 lg:px-[125px] xl:px-50 pb-[30px] mx-auto">
                <div className="block text-center mb-[35px] lg:text-right lg:mt-[10px] lg:mr-[15px]">
                    <h3 className="text-[#101828] pt-[30px]">{CompTitle}</h3>
                </div>

                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView={1} // Default to 1 for safety
                    spaceBetween={15}
                    roundLengths={true} // Prevents blurry text/images
                    breakpoints={{
                        320: {
                            slidesPerView: 1, // Use whole numbers for exact slides
                            spaceBetween: 15,
                        },
                        425: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    }}
                    className="cards_container w-full scroll-smooth mb-[20px] pb-3"
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={`item_${index}`}
                            className="card flex flex-col w-[250px] min-h-[320px] max-h-[460px] border-[1px] rounded-xl shadow border-[#F5F5F5]"
                        >
                            <div className="img rounded-[12px] pb-[16px]">
                                <Image
                                    className="w-full rounded-t-[12px]"
                                    src={item.pic}
                                    alt={item.title}
                                    width={250}
                                    height={200}
                                    layout="responsive"
                                />
                            </div>

                            <div className="title pb-[16px] px-[12px]">
                                <Link
                                    className="text-[#005B90] text-sm font-bold line-clamp-1"
                                    href="#"
                                >
                                    {item.title}
                                </Link>
                            </div>

                            <div className="text justify text-[#252B37] text-opacity-75 pb-[16px] px-[12px]">
                                <p className="line-clamp-3 text-sm">{item.description}</p>
                            </div>

                            <div className="date text-[#717680] text-[13px] text-left pb-[16px] pl-[16px]">
                                <p>{item?.date || '-'}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="bg-[#0CC0BA] transition-all duration-500 hover:bg-[#155957] flex items-center justify-center mt-[24px] rounded-[8px] h-[48px] w-[210px] mx-auto lg:absolute lg:left-32 xl:left-52 lg:top-0 lg:mt-[20px]"
                >
                    <Link className="text-white p-[12px]" href="#">
                        {buttonText}
                    </Link>
                    <Image
                        className="w-[24px]"
                        src={iconSrc}
                        alt=""
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
}