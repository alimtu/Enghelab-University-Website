'use client';

import Image from 'next/image';
import { Button } from '../../ui/button';

export default function CustomHalfSliderComponent({ data }) {
  const {
    title,
    className,
    imagePath,
    description,
    buttonText,
    buttonText2,
    searchPlaceholder,
    searchPlaceholder2,
    searchPlaceholder3,
  } = data;

  return (
    <div className={`w-full h-full bg-white relative flex mt-18 lg:mt-0 ${className}`}>
      <div className="w-full h-screen flex justify-center items-center lg:min-h-full lg:max-h-full min-h-full max-h-full">
        <Image
          src={imagePath}
          alt="Slide Image"
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
        />
      </div>

      <div className="absolute inset-0 bg-primary-950/80"></div>

      <div className="absolute flex flex-col gap-22 justify-between z-10 lg:py-44 py-16 px-4 lg:px-20 w-full text-start">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-center items-start max-lg:text-center lg:w-1/2 w-full gap-8">
            <h1 className="text-white text-3xl font-bold leading-12 whitespace-pre-line">
              {title}
            </h1>
            <p className="text-white text-lg leading-9">{description}</p>

            <div className="flex  justify-center lg:justify-between gap-4 ">
              <Button className=" lg:w-full py-6" variant={'secondary'}>
                {buttonText}
              </Button>
              <Button className=" lg:w-full py-6" variant={'default'}>
                {buttonText2}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full max-w-1/2 relative">
            <Image
              src={imagePath}
              alt="Slide Image"
              fill
              className="object-cover rounded-md"
              priority={true}
            />
          </div>
        </div>

        <div className="w-full flex-col gap-4  justify-center items-center hidden lg:flex">
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <div className="text-white font-bold text-lg">{searchPlaceholder}</div>
            <input
              className=" bg-white text-white rounded-md w-6/12 py-2 "
              placeholder={searchPlaceholder}
            />
          </div>
          <div className="flex flex-row gap-4 justify-center items-center w-6/12">
            <div className="flex flex-col gap-2 justify-center items-center w-full">
              <div className="text-white font-bold text-lg">{searchPlaceholder2}</div>
              <input
                className=" bg-white text-white rounded-md w-full py-2 "
                placeholder={searchPlaceholder2}
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full">
              <div className="text-white font-bold text-lg">{searchPlaceholder3}</div>
              <input className=" bg-white text-white rounded-md w-full py-2 " placeholder="جستجو" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
