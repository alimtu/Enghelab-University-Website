// components/NewsSection.jsx
import { Calendar } from 'lucide-react';



export default function NewsSection() {
    const Newsdata = {
        "امور سراها": [
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
        ],


        "امور صندوق رفاه": [
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
        ],
        "امور تغذیه": [
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
            "نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب",
        ],

    };
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10  px-16 mt-8 ">
            {Object.entries(Newsdata).map(([category, items]) => (
                <div
                    key={category}
                    className="flex-1 bg-white shadow-md rounded-md overflow-hidden border"
                >
                    <div className="bg-[#0CC0BA] text-white text-center py-10 font-semibold text-lg">
                        {category}
                    </div>
                    <div className="p-4 space-y-4">
                        {items.map((item, index) => (
                            <div key={index} className="border-b pb-2">
                                <p className="text-sm text-gray-800 leading-8">{item}</p>
                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                    <Calendar className="w-4 h-4 ml-1" />
                                    ۱۴۰۳/۰۲/۲۰
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
