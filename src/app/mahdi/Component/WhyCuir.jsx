import React from 'react';
import Image from 'next/image';
import Cuir from '../assets/Image/Cuir.jpg'; // Ensure the image is placed in /public/assets/images/

const WhyStudy = () => {
    return (
        <div className="mt-8">
            <div className="w-[95%] mx-auto flex justify-center flex-col gap-4">
                <h2 className="text-center text-[28px] text-blue-500">چرا تحصیل در دانشگاه جامع انقلاب اسلامی؟</h2>
                <div className="relative w-full h-[300px] rounded-[12px] overflow-hidden">
                    <Image
                        src={Cuir}
                        alt="دانشگاه جامع انقلاب اسلامی"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-[12px]"
                    />
                </div>
            </div>

            <div className="carts grid overflow-x-auto lg:grid-cols-3 mt-8 p-4 mb-4 gap-7">
                {/* نوآور */}
                <div className="w-[95%] h-full mx-auto flex-shrink-0 shadow-lg shadow-gray-500 rounded-[12px] hover:text-blue-900">
                    <p className="text-center text-[28px] p-4 font-bold">نوآور</p>
                    <p className="p-3">
                        دانشگاه جامع انقلاب اسلامی با شعار "نوآور"، همواره در تلاش است تا با بهره‌گیری از آخرین
                        دستاوردهای علمی و فناوری، فضایی پویا و خلاق برای دانشجویان و پژوهشگران فراهم کند...
                    </p>
                </div>

                {/* تحول گرا */}
                <div className="w-[95%] h-full mx-auto flex-shrink-0 shadow-lg shadow-gray-500 rounded-[12px] hover:text-blue-900">
                    <p className="text-center text-[28px] p-4 font-bold">تحول گرا</p>
                    <p className="p-2">
                        شعار "تحول گرا" در دانشگاه جامع انقلاب اسلامی بیانگر تعهد این نهاد به ایجاد تغییرات مثبت و پایدار
                        در جامعه است...
                    </p>
                </div>

                {/* تمدن ساز */}
                <div className="w-[95%] h-full mx-auto flex-shrink-0 shadow-lg shadow-gray-500 rounded-[12px] hover:text-blue-900">
                    <p className="text-center text-[28px] p-4 font-bold">تمدن ساز</p>
                    <p className="p-2">
                        دانشگاه جامع انقلاب اسلامی با شعار "تمدن ساز"، رسالت خود را ایجاد پایه‌های تمدن نوین اسلامی
                        می‌داند...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyStudy;
