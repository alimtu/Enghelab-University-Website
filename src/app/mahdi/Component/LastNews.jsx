'use client';
import React from 'react';
import Image from 'next/image';
// import { Button } from 'antd';
import { ArrowLeft } from 'lucide-react';
function LastNews({ newstitle = [] }) {
    return (
        <div className="flex flex-col">

            <div className="header w-[92%] m-auto flex flex-col lg:flex-row justify-between">
                <div>
                    <p className="text-[28px] text-center lg:text-right font-bold mt-4">آخرین اخبار</p>
                    <p className="text-[15px] text-center lg:text-right">
                        برای اطلاع از آخرین اخبار به پورتال خبری دانشگاه مراجعه کنید.
                    </p>
                </div>
                <div className="flex items-end invisible lg:visible p-4">

                    <button
                        className="flex items-center gap-2 text-[#6b7280] hover:text-[#005B90] transition-colors duration-200"
                    >

                        <span className="text-lg font-medium">پرتال خبری</span>
                        <ArrowLeft size={20} strokeWidth={2}/>
                    </button>
                </div>
            </div>

            {Array.isArray(newstitle) && newstitle.map((item, index) => (
                <div className="w-[92%] mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6" key={index}>

                    <div className="order-2 lg:order-1 shadow-2xl rounded-[12px] overflow-hidden">
                        <div className="relative w-full h-[420px]">
                            <Image
                                src={item.pic}
                                alt={item.newstitle1 || 'news image'}
                                fill
                                className="object-cover rounded-[12px]"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-xl font-black text-[#005B90]">{item.newstitle1}</p>
                            <p className="text-base/7 mt-4">{item.desc1}</p>
                        </div>
                    </div>


                    <div className="order-2 lg:order-2 flex flex-col gap-5">
                        {[2, 3, 4].map(i => {
                            const pic = item[`pic${i}`];
                            const title = item[`newstitle${i}`];
                            const desc = item[`desc${i}`];
                            if (!pic || !title || !desc) return null;

                            return (
                                <div
                                    key={i}
                                    className="grid grid-cols-2 shadow-xl shadow-gray-200 rounded-[12px] overflow-hidden"
                                >
                                    <div className="relative w-full aspect-[3/3] lg:aspect-[4/3]">
                                        <Image
                                            src={pic}
                                            alt={title}
                                            fill
                                            className="object-cover rounded-[12px]"
                                        />
                                    </div>
                                    <div className="p-3 flex flex-col justify-center">
                                        <p className="t lg:text-[18px] font-bold text-[#005B90]">{title}</p>
                                        <p className="text-[10px] lg:text-[14px] line-clamp-3">{desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            <div className="flex items-end justify-center lg:invisible visible p-4 m-4">

                <button
                    className="flex items-center gap-2 text-[#6b7280] hover:text-[#005B90] transition-colors duration-200"
                >

                    <span className="text-lg font-medium">پرتال خبری</span>
                    <ArrowLeft size={20} strokeWidth={2}/>
                </button>
            </div>
        </div>
        <button
          type="submit"
          className="invisible lg:visible p-4 bg-[#0cc0BA] text-white rounded-[12px] mt-4 lg:mt-0"
        >
          {/* {t('button')} */}
        </button>
      </div>

      {Array.isArray(newstitle) &&
        newstitle.map((item, index) => (
          <div className="h-fit" key={index}>
            <div className="shadow-2xl shadow-gray-300 rounded-[12px]">
              <div className="relative w-[80%] m-auto aspect-video">
                <Image
                  src={item.pic}
                  alt={item.newstitle1 || 'news image'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[12px]"
                />
              </div>
              <div className="w-[85%] m-auto p-3">
                {/* <p className="text-[20px]">{t('newstitle1')}</p> */}
                {/* <p>{t('desc1')}</p> */}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-[95%] m-auto rounded-[12px] gap-4 mt-4">
              {/* Second News */}
              <div className="grid grid-cols-2 shadow-2xl shadow-gray-300 rounded-[12px]">
                <div className="relative w-full aspect-[4/3] p-2">
                  <Image
                    src={item.pic2}
                    alt={item.newstitle2 || 'news image 2'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[12px]"
                  />
                </div>
                <div className="mr-2 flex flex-col justify-center">
                  <p className="text-[13px] lg:text-[20px] text-[#005B90]">
                    {/* {t('newstitle2')} */}
                  </p>
                  {/* <p className="text-[10px] lg:text-[14px]">{t('desc2')}</p> */}
                </div>
              </div>

              {/* Third News */}
              <div className="grid grid-cols-2 shadow-2xl shadow-gray-300 rounded-[12px]">
                <div className="relative w-full aspect-[4/3] p-2">
                  <Image
                    src={item.pic3}
                    alt={item.newstitle3 || 'news image 3'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[12px]"
                  />
                </div>
                <div className="mr-2 flex flex-col justify-center">
                  <p className="text-[13px] lg:text-[20px] text-[#005B90]">
                    {/* {t('newstitle3')} */}
                  </p>
                  {/* <p className="text-[10px] lg:text-[14px]">{t('desc3')}</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Mobile Only Button */}
      <div className="lg:hidden mt-4 grid place-content-center">
        <button
          type="submit"
          className="p-4 bg-[#0cc0BA] text-white rounded-[12px] w-[100px]"
        >
          {/* {t('button')} */}
        </button>
      </div>
    </div>
  );
}

export default LastNews;
