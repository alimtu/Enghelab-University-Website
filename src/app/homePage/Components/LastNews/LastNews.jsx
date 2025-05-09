'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

function LastNews({ newstitle = [] }) {
    return (
        <div className="flex flex-col">

            <div className="header w-[92%] m-auto flex flex-col lg:flex-row justify-between">
                <div>
                    <p className="text-3xl text-center lg:text-right font-bold mt-8">آخرین اخبار</p>
                    <p className="text-lg text-center lg:text-right mt-2">
                        برای اطلاع از آخرین اخبار به پورتال خبری دانشگاه مراجعه کنید.
                    </p>
                </div>
                <div className="grid items-end hidden lg:block p-4">
                    <button className="flex items-center gap-2 text-[#6b7280] hover:bg-gray-100 p-3 transition-colors duration-200">
                        <span className="text-lg font-medium">پرتال خبری</span>
                        <ArrowLeft size={20} strokeWidth={2} />
                    </button>
                </div>
            </div>


            {Array.isArray(newstitle) &&
                newstitle.map((item, index) => (
                    <div className="w-[92%] mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6" key={index}>

                        <div className="order-2 lg:order-1 shadow-2xl rounded-[12px] overflow-hidden">
                            <div className="relative w-full h-[250px] lg:h-[356px]">
                                <Image
                                    src={item.pic}
                                    alt={item.newstitle1 || 'news image'}
                                    fill
                                    className="object-cover rounded-[12px]"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-xl font-black text-[#005B90]">{item.newstitle1}</p>
                                <p className="text-base/8 mt-4">{item.desc1}</p>
                            </div>
                        </div>


                        <div className="order-2 flex flex-col gap-4">
                            {[2, 3, 4].map((i) => {
                                const pic = item[`pic${i}`];
                                const title = item[`newstitle${i}`];
                                const desc = item[`desc${i}`];
                                if (!pic || !title || !desc) return null;

                                return (
                                    <div
                                        key={i}
                                        className="grid grid-cols-2 border-t-2 border-b-gray-300 shadow-xl shadow-gray-200 rounded-[12px] overflow-hidden"
                                    >
                                        <div className="relative w-full aspect-[6/4] lg:aspect-[6/3] min-h-[110px] lg:min-h-[171px]">
                                            <Image
                                                src={pic}
                                                alt={title}
                                                fill
                                                className="object-cover rounded-[12px]"
                                            />
                                        </div>
                                        <div className="p-3 flex flex-col justify-center">
                                            <p className="text-sm lg:text-lg font-bold text-[#005B90] overflow-hidden text-base/7">{title}</p>
                                            <p className="text-[10px] lg:text-[14px] line-clamp-2 text-base/6 lg:text-base/7 overflow-hidden">{desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}


            <div className="flex items-end justify-center lg:hidden visible p-4 m-4">
                <button className="flex items-center gap-2 text-[#6b7280] hover:text-[#005B90] transition-colors duration-200">
                    <span className="text-lg font-medium">پرتال خبری</span>
                    <ArrowLeft size={20} strokeWidth={2} />
                </button>
            </div>
        </div>
    );
}

export default LastNews;
