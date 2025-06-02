'use client';

import React from 'react';
import Image from 'next/image';
import bgImage from '../../../../public/Images/confrancehall.jpg';
import { useDeviceDetection } from '../../../lib/hooks/useDeviceDetection';

const UniversityStatsComponent = ({ data }) => {
  const { isDesktop } = useDeviceDetection();

  return (
    <div className={`relative ${data.className}`}>
      <div className="absolute inset-0 z-0 ">
        <Image src={bgImage} alt="Conference Hall" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-primary-950/90"></div>
      </div>

      <div className="w-full relative z-10 grid grid-cols-2 lg:grid-cols-6 justify-items-center justify-content-center text-white text-center leading-4 line-clamp-2 p-12 lg:-16 gap-12 ">
        {data.stats.map((item, index) => (
          <div key={index} className={'flex flex-col gap-4 lg:gap-6 justify-center items-center '}>
            <div className="bg-white border border-grey-300 rounded-full p-4">
              <Image
                src={item.img}
                alt={`stat-${index}`}
                width={isDesktop ? 45 : 55}
                height={55}
                className="rounded-md"
              />
            </div>
            <p className="text-sm flex justify-center lg:font-bold text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityStatsComponent;
