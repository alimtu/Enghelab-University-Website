'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mainNewsList = [
  {
    id: 1,
    title: 'بیانیه نمایندگان درباره مذاکرات ایران و آمریکا',
    img: 'https://uploadkon.ir/uploads/b07d30_25ir-usd.png',
    text: `به گزارش خبرنگار پارلمانی خبرگزاری تسنیم، احمد نادری عضو هیئت رئیسه مجلس شورای
                  اسلامی در جلسه علنی امروز، چهارشنبه، بیانیه نمایندگان مجلس شورای اسلامی درباره
                  مذاکرات ایران و آمریکا را قرائت کرد...`,
    createdAt: '۱۲ اسفند ۱۴۰۳',
  },
];
const newsList = [
  {
    id: 1,
    title: 'قالیباف: ترامپ نشان داد که در توهم بسر می‌برد',
    img: 'https://uploadkon.ir/uploads/b07d30_25ir-usd.png',
    region: 'خبرگزاری فارس',
    tag: 'اخبار جهان',
    time: '۱۰ ساعت پیش',
    readTime: '۲ دقیقه',
  },
  {
    id: 2,
    title: 'توهم اقتدار آمریکا؛ سقوط قدرت نرم و سخت ایالات متحده',
    img: 'https://uploadkon.ir/uploads/170130_258e3884d92948fea8eaedbc539421c2df39b822ea.png',
    region: 'خبرگزاری فارس',
    tag: 'اخبار جهان',
    time: '۳ ساعت پیش',
    readTime: '۳ دقیقه',
  },
  {
    id: 3,
    title: 'کرملین: پوتین برای سفر به ایران دعوت شد',
    img: 'https://uploadkon.ir/uploads/170130_258e3884d92948fea8eaedbc539421c2df39b822ea.png',
    region: 'خبرگزاری فارس',
    tag: 'اخبار جهان',
    time: '۱۳ ساعت پیش',
    readTime: '۴ دقیقه',
  },
  {
    id: 4,
    title: 'افشای مأموریت روبیتزر و رسانه‌های غربی علیه ایران',
    img: 'https://uploadkon.ir/uploads/170130_258e3884d92948fea8eaedbc539421c2df39b822ea.png',
    region: 'خبرگزاری فارس',
    tag: 'اخبار جهان',
    time: '۲۴ ساعت پیش',
    readTime: '۶ دقیقه',
  },
];

export default function NewsSection() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 rounded-md overflow-hidden text-right">
      {/* خبر اصلی */}
      <div className="lg:col-span-2 relative flex items-center justify-center p-4">
        {mainNewsList.map((news, index) => (
          <div className="relative w-full max-w-[906px] aspect-[906/621]" key={index}>
            <img
              src={news.img}
              alt={news.title}
              // layout="fill"
              // objectFit="cover"
              className="w-full h-full object-cover rounded"
            />
            <div className="[right:-15px] top-50 absolute inset-y-0 bg-[#F8F8F8] bg-opacity-90 w-[50%] h-[50%] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold leading-relaxed">{news.title}</h2>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">{news.text}</p>
                <span className="text-sm text-blue-600 cursor-pointer mt-2 block">
                  ادامه مطلب...
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500">{news.createdAt}</span>
                <div className="flex gap-2">
                  <button className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer">
                    <ChevronRight />
                  </button>
                  <button className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer">
                    {' '}
                    <ChevronLeft />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-span-1 grid grid-rows-4 p-4 items-center">
        {newsList.map((item, index) => (
          <div key={item.id} className="flex h-full items-center gap-2">
            <div className="w-1/4 h-3/4">
              <img
                src={item.img}
                alt={item.title}
                // layout="fill"
                // objectFit="cover"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col w-3/4 h-3/4 items-start text-sm">
              <div className="text-gray-600 h-1/3 font-medium flex items-center gap-1">
                <img
                  width={24}
                  height={24}
                  src="https://uploadkon.ir/uploads/fc2d30_25icon1.png"
                  alt="icon"
                />
                {item.region} • {item.time}
              </div>
              <h3 className="text-blue-900 h-1/3 font-semibold leading-5 mt-1">{item.title}</h3>
              <div className="flex justify-between h-1/3 items-start mt-2 w-full">
                <span className="text-xs text-blue-600 mt-1">{item.tag}</span>
                <span className="text-xs text-gray-400 mt-1">زمان مطالعه: {item.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
