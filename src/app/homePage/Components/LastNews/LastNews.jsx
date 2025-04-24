import React from 'react';
import Image from 'next/image';

const LastNews = ({
                      title = 'اخرین اخبار',
                      description = 'برای اطلاع از آخرین اخبار به پورتال خبری دانشگاه مراجعه کنید.',
                      button = 'پرتال خبری>',
                      newstitle = []
                  }) => {
    return (
        <div className="flex flex-col">
            <div className="header m-2 flex flex-col lg:flex-row justify-between">
                <div>
                    <p className="text-[28px] text-center lg:text-right font-bold mt-4">{title}</p>
                    <p className="text-[15px] text-center lg:text-right">{description}</p>
                </div>
                <button
                    type="button" // Changed from "submit" to "button" since it's not in a form
                    className="invisible lg:visible p-4 bg-[#0cc0BA] text-white rounded-[12px] mt-4 lg:mt-0 hover:bg-[#0aa8a3] transition-colors" // Added hover effect
                >
                    {button}
                </button>
            </div>

            <div className="space-y-6"> {/* Added container for news items with spacing */}
                {newstitle.map((item, index) => (
                    <div className="h-fit" key={index}>
                        <div className="shadow-2xl shadow-gray-300 rounded-[12px] overflow-hidden"> {/* Added overflow-hidden */}
                            <div className="relative w-[80%] m-auto aspect-video">
                                <Image
                                    src={item.pic}
                                    alt={item.newstitle1 || 'news image'}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-[12px]"
                                    priority={index === 0} // Added priority for first image
                                />
                            </div>
                            <div className="w-[85%] m-auto p-3">
                                <p className="text-[20px] font-semibold">{item.newstitle1}</p> {/* Added font weight */}
                                <p className="text-gray-600">{item.desc1}</p> {/* Added text color */}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 w-[95%] m-auto rounded-[12px] gap-4 mt-4">
                            {/* Second News */}
                            <div className="grid grid-cols-2 shadow-2xl shadow-gray-300 rounded-[12px] overflow-hidden"> {/* Added overflow-hidden */}
                                <div className="relative w-full aspect-[4/3] p-2">
                                    <Image
                                        src={item.pic2}
                                        alt={item.newstitle2 || 'news image 2'}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-[12px]"
                                    />
                                </div>
                                <div className="mr-2 flex flex-col justify-center">
                                    <p className="text-[13px] lg:text-[20px] text-[#005B90] font-medium">{item.newstitle2}</p> {/* Added font weight */}
                                    <p className="text-[10px] lg:text-[14px] text-gray-600">{item.desc2}</p> {/* Added text color */}
                                </div>
                            </div>

                            {/* Third News */}
                            <div className="grid grid-cols-2 shadow-2xl shadow-gray-300 rounded-[12px] overflow-hidden"> {/* Added overflow-hidden */}
                                <div className="relative w-full aspect-[4/3] p-2">
                                    <Image
                                        src={item.pic3}
                                        alt={item.newstitle3 || 'news image 3'}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-[12px]"
                                    />
                                </div>
                                <div className="mr-2 flex flex-col justify-center">
                                    <p className="text-[13px] lg:text-[20px] text-[#005B90] font-medium">{item.newstitle3}</p> {/* Added font weight */}
                                    <p className="text-[10px] lg:text-[14px] text-gray-600">{item.desc3}</p> {/* Added text color */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Only Button */}
            <div className="lg:hidden mt-4 grid place-content-center">
                <button
                    type="button" // Changed from "submit" to "button"
                    className="p-4 bg-[#0cc0BA] text-white rounded-[12px] w-[100px] hover:bg-[#0aa8a3] transition-colors" // Added hover effect
                >
                    {button}
                </button>
            </div>
        </div>
    );
};

export default LastNews;