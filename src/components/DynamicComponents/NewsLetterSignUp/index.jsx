'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function NewsLetterSignUpComponent({ data }) {
  const [email, setEmail] = useState('');
  return (
    <div
      className={`w-full flex flex-col-reverse  lg:flex-row-reverse lg:items-center gap-10 px-4 lg:px-20 bg-white ${data.className}`}
    >
      <div className="lg:w-1/2 flex flex-col gap-8 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-primary-900 text-2xl lg:text-4xl font-bold">{data.title}</h2>
          <p className="text-gray-600 te lg:text-base font-normal text-justify wrap-anywhere leading-relaxed">
            {data.description}
          </p>
        </div>
        <form className="flex flex-col lg:flex-row gap-4">
          <div className="w-full flex flex-1 flex-col gap-2">
            <label className="w-full">{data.label}</label>
            <input
              className="w-full rounded-md border border-neutral-300 focus:outline-none placeholder:text-sm px-4 py-3 text-sm font-medium text-neutral-900 leading-normal box-border"
              type={data.InputType}
              name={data.InputName}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={data.placeholder}
            />
          </div>
          <div className="max-lg:w-full flex items-end">
            <button
              type={data.btnType}
              onClick={() => {}}
              className="w-full lg:w-auto lg:min-w-0 py-3 lg:px-8 text-sm font-medium bg-secondary-550 rounded-md text-white leading-normal box-border border border-transparent"
            >
              {data.btnText}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/2  rounded-lg overflow-hidden">
        <Image
          width={500}
          height={500}
          quality={100}
          src={data.image}
          alt={data.alt}
          className="w-full  object-cover object-center aspect-[4/3]"
        />
      </div>
    </div>
  );
}
