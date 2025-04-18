import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Notifications({
                                          items = [],
                                          CompTitle = 'اطلاعیه ها',
                                          buttonText = 'مشاهده همه اطلاعیه ها',
                                          iconSrc = '/Images/Notifications/arrow-left-01-sharp.png',
                                          // hasScrollBar = true,
                                      }) {
    return (
        <div className="w-full">
            <div className="relative w-full pb-[30px] mx-auto">
                <div className="block text-center mb-[35px] lg:text-right lg:mt-[10px] lg:mr-[15px]">
                    <h3 className="text-[#101828] text-2xl pt-[30px]">{CompTitle}</h3>
                </div>

                <Swiper
                    loop={true}

                    slidesPerView={1.2}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 30
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2.2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30
                        }
                    }}

                    className="cards_container w-full flex lg:flex-nowrap gap-[30px] overflow-x-auto scroll-smooth mb-[20px] xl:justify-start pb-3">
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={`item_${index}`}
                            className="card flex flex-col min-w-[240px] min-h-[320px] max-w-[302px] max-h-[460px] border-[1px] rounded-xl shadow border-[#F5F5F5]"
                        >
                            <div className="img rounded-[12px] pb-[16px]">
                                <Image
                                    className="w-full"
                                    src={item.pic}
                                    alt=""
                                    width={302}
                                    height={200}
                                    layout="responsive"
                                />
                            </div>

                            <div className="title pb-[16px] px-[12px]">
                                <Link
                                    className="text-[#005B90] text-s font-bold justify line-clamp-1 "
                                    href="#"
                                >
                                    {item.title}
                                </Link>
                            </div>

                            <div className="text justify text-[#252B37] text-opacity-75 pb-[16px] px-[12px]">
                                <p className="line-clamp-3">
                                    {item.description}
                                </p>
                            </div>

                            <div className="date text-[#717680] text-[13px] text-left pb-[16px] pl-[16px]">
                                <p>{item?.date || '-'}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="bg-[#0CC0BA] transition-all duration-500 hover:bg-[#155957] flex items-center justify-center mt-[24px] rounded-[8px] h-[48px] w-[210px] mx-auto lg:absolute lg:left-0 lg:top-0 lg:mt-[20px]"
                >
                    <Link className="text-white p-[12px]" href="#">{buttonText}</Link>
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