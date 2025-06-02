'use client';

import Image from 'next/image';
import { Input } from '../../ui/input';
import { Search } from 'lucide-react';

export default function ContactWithWeHalfHeroSection({ data }) {
  return (
    <div className={`relative w-full h-[400px] lg:h-[700px]  overflow-hidden ${data.className}`}>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data.backgroundImage}
          alt="University building"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary-950/90"></div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
        <div className="text-3xl lg:text-6xl font-bold text-white mb-4 leading-12 xl:leading-24 max-w-3xl">
          {data.title}
        </div>
        {data?.hasSearch && (
          <div className="absolute bottom-24 text-white z-20 font-bold text-xl lg:text-2xl w-full justify-center flex">
            <div className="w-2/5  self-center flex flex-col gap-4">
              <div className="flex gap-1 w-full justify-center">
                <Search />
                <span className="font-bold text-lg">جستجو</span>
              </div>
              <Input />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
