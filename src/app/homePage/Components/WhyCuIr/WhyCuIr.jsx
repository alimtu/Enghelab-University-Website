import React from 'react';
import Image from 'next/image';

const WhyCuIr = () => {
    return (
        <div className="mt-8">
            <div className="w-[95%] mx-auto flex justify-center flex-col gap-4">
                <h2 className="text-center text-[28px] text-blue-500 font-bold">چرا تحصیل در دانشگاه جامع انقلاب اسلامی؟</h2>
                <div className="relative w-full h-[300px] rounded-[12px] overflow-hidden">
                    <Image
                        src="/Images/Cuir.jpg" // Updated path to public directory
                        alt="دانشگاه جامع انقلاب اسلامی"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-[12px]"
                        priority // Added for better loading performance
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 p-4 mb-4 gap-7 w-[95%] mx-auto">
                {/* نوآور */}
                <div className="w-full h-full shadow-lg shadow-gray-300 rounded-[12px] hover:text-blue-900 transition-colors duration-300 border border-gray-100">
                    <p className="text-center text-[28px] p-4 font-bold">نوآور</p>
                    <p className="p-4 text-gray-700">
                        دانشگاه جامع انقلاب اسلامی با شعار "نوآور"، همواره در تلاش است تا با بهره‌گیری از آخرین
                        دستاوردهای علمی و فناوری، فضایی پویا و خلاق برای دانشجویان و پژوهشگران فراهم کند...
                    </p>
                </div>

                {/* تحول گرا */}
                <div className="w-full h-full shadow-lg shadow-gray-300 rounded-[12px] hover:text-blue-900 transition-colors duration-300 border border-gray-100">
                    <p className="text-center text-[28px] p-4 font-bold">تحول گرا</p>
                    <p className="p-4 text-gray-700">
                        شعار "تحول گرا" در دانشگاه جامع انقلاب اسلامی بیانگر تعهد این نهاد به ایجاد تغییرات مثبت و پایدار
                        در جامعه است...
                    </p>
                </div>

                {/* تمدن ساز */}
                <div className="w-full h-full shadow-lg shadow-gray-300 rounded-[12px] hover:text-blue-900 transition-colors duration-300 border border-gray-100">
                    <p className="text-center text-[28px] p-4 font-bold">تمدن ساز</p>
                    <p className="p-4 text-gray-700">
                        دانشگاه جامع انقلاب اسلامی با شعار "تمدن ساز"، رسالت خود را ایجاد پایه‌های تمدن نوین اسلامی
                        می‌داند...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyCuIr;