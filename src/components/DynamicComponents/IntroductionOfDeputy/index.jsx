'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CircleX, PlayCircleIcon } from 'lucide-react';

const DefaultData = {
  title: 'معرفی معاونت',
  description:
    'معاونت دانشجویی دانشگاه جامع انقلاب اسلامی، با هدف ایجاد محیطی پویا و حمایت‌گر برای دانشجویان، خدمات متنوعی در حوزه‌های رفاهی، فرهنگی، بهداشتی و مشاوره‌ای ارائه می‌دهد. این معاونت با تأمین امکاناتی مانند خوابگاه‌های مجهز، تغذیه سالم، بیمه درمانی و برنامه‌های فرهنگی، تلاش می‌کند تا دوران تحصیل دانشجویان را به تجربه‌ای ارزشمند تبدیل کند. حمایت از تشکل‌های دانشجویی، برگزاری اردوها، مسابقات و مراسم‌های مذهبی، از جمله فعالیت‌هایی است که به رشد شخصیتی و اجتماعی دانشجویان کمک می‌کند. همچنین، خدمات مشاوره‌ای در زمینه‌های تحصیلی، شغلی و روان‌شناختی به دانشجویان ارائه می‌شود تا در مواجهه با چالش‌ها راهنمایی لازم را دریافت کنند. معاونت دانشجویی با نگاهی آینده‌نگر و مبتنی بر ارزش‌های اسلامی، در تلاش است تا دانشجویان را به عنوان انسان‌هایی مسئولیت‌پذیر و تأثیرگذار در جامعه تربیت کند. دانشجویان می‌توانند برای دریافت خدمات و اطلاعات بیشتر به دفتر معاونت دانشجویی مراجعه یا از طریق سامانه‌های ارتباطی دانشگاه با این معاونت در تماس باشند.',
  video: '/Images/introductionOfTheDeputy/test.mp4',
  thumbnail: '/Images/IntroductionOfWelfareServices/salon.png',
};

export default function IntroductionOfDeputyComponent({ data = DefaultData }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <div
      className={`w-full bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 px-4 lg:px-20 ${data.className}`}
    >
      <div className="flex flex-col gap-2 lg:gap-4 xxl:gap-8 justify-center">
        <h2 className="font-bold text-2xl lg:text-4xl xxl:text-5xl">{data.title || ''}</h2>
        <p className="text-sm lg:text-base text-grey-800 xxl:text-lg leading-6 lg:leading-7 xxl:leading-9 text-justify wrap-anywhere">
          {data.description || ''}
        </p>
      </div>

      <div className="relative cursor-pointer lg:mt-16">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={data.imagePath || '/placeholder.svg'}
            alt="Video thumbnail"
            className="object-cover"
            fill
            priority
          />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-black/50 to-transparent rounded-full lg:p-4 p-2 "
            onClick={openVideo}
          >
            <PlayCircleIcon className="lg:w-24 lg:h-24 w-16 h-16 text-white" strokeWidth={1} />
          </div>
        </div>

        {isVideoOpen && (
          <div className="fixed inset-0 bg-transparent backdrop-blur-xs grid place-items-center z-50">
            <div className="relative w-full max-w-4xl bg-transparent">
              <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 bg-white rounded-full"
              >
                <CircleX size={35} className="text-back" />
              </button>
              <video
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
                preload="auto"
                allowFullScreen
              >
                <source src={data.video} type="video/mp4" />
                مرورگر شما پخش ویدیو را پشتیبانی نمی‌کند!
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
