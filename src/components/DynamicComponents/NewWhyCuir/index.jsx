'use client';

import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import { defaultImagePath } from '../../../constants';
import { useState } from 'react';
import { PlayCircleIcon } from 'lucide-react';

export default function WhyCuIrComponent({ data }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };
  return (
    <div className={`px-4 lg:px-20 lg:py-8 py-4 flex flex-col lg:gap-8 gap-6 ${data.className}`}>
      <div className="flex flex-col lg:gap-4 gap-2 bg-[#F9FAFB] p-6 rounded-lg">
        <h1 className="text-xl lg:text-3xl font-bold text-gray-900 ">{data.title}</h1>
        <p className="text-gray-500 text-sm leading-7 lg:text-base">{data.description}</p>
      </div>
      <div className="flex flex-col max-lg:flex-col-reverse lg:flex-row gap-6 items-center lg:max-h-[584px] lg:h-[584px]">
        <div className="w-full lg:w-5/12 flex flex-col justify-between h-full gap-6 lg:gap-2">
          {data.items.map(card => (
            <div
              key={card.id}
              className="bg-white rounded-lg p-4 xxl:p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:text-blue-500"
            >
              <h2 className="lg:text-2xl text-xl font-bold  text-gray-900 hover:text-blue-500">
                {card.title}
              </h2>
              <p className="text-gray-500 text-sm leading-7 hover:text-blue-500">{card.content}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-7/12 relative rounded-md overflow-hidden aspect-video lg:aspect-auto group cursor-pointer h-full">
          <Image
            src={data.pic || defaultImagePath}
            alt="University Video Thumbnail"
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/70 group-hover:bg-white transition-all">
              <FaPlay className="text-primary-500 text-2xl ml-1" />
            </div>
          </div>
          <div className="relative h-full cursor-pointer">
            <div className="relative w-full  aspect-video rounded-lg overflow-hidden">
              <Image
                src={data.videoImagePath || '/placeholder.svg'}
                alt="Video thumbnail"
                className="object-cover"
                fill
                priority
              />

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-black/50 to-transparent rounded-full lg:p-4 p-2"
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
                    <source src={DefaultData.video} loading="lazy" type="video/mp4" />
                    مرورگر شما پخش ویدیو را پشتیبانی نمی‌کند!
                  </video>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
