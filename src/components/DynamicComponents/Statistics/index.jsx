'use client';

import React from 'react';
import Image from 'next/image';

export default function StatisticsComponent({ data }) {
  const { badge, title, description, backgroundImage, items } = data;
  return (
    <div className="w-full py-20 px-4 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 rtl">
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 border border-teal-600 rounded-full mb-5">
            {badge}
          </span>
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl leading-8 mx-auto text-base">{description}</p>
        </div>

        <div className="relative mt-12">
          <div className="absolute inset-0 z-0 overflow-hidden  ">
            <Image
              src={backgroundImage || '/placeholder.svg'}
              alt="Background"
              fill
              className="object-cover "
              priority
            />
            <div className="absolute inset-0 bg-black/30 "></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-14">
            {items.map((option, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm p-6 lg:p-12 rounded-lg shadow-lg text-center rtl hover:transition-all hover:scale-105 "
              >
                <div className="mb-4 text-white">
                  <h3 className="text-5xl font-bold ">{option.count}</h3>
                  <p className=" font-medium mt-5 text-base">{option.title}</p>
                </div>
                <p className=" text-sm text-white">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
