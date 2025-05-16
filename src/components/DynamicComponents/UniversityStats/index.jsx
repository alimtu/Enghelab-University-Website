'use client';

import React from 'react';
import Image from 'next/image';
import bgImage from '../../../../public/Images/confrancehall.jpg';
import { useDeviceDetection } from '../../../lib/hooks/useDeviceDetection';

const UniversityStatsComponent = ({ data }) => {
  const { isDesktop } = useDeviceDetection();

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 ">
        <Image src={bgImage} alt="Conference Hall" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-primary-950/90"></div>
      </div>

      <div className="w-full relative z-10 grid grid-cols-2 lg:grid-cols-6 justify-items-center justify-content-center  text-white text-center lg:gap-8 max-lg:gap-y-24 max-lg:gap-x-12 py-8 px-2 lg:px-24 leading-4 line-clamp-2">
        {data.stats.map((item, index) => (
          <div key={index} className={'flex flex-col gap-2 lg:gap-6 justify-center items-center'}>
            <Image
              src={item.img}
              alt={`stat-${index}`}
              width={isDesktop ? 105 : 75}
              height={100}
              className="rounded-full"
            />
            <p className="text-sm flex justify-center lg:font-bold text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityStatsComponent;
