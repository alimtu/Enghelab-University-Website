'use client';

import Image from 'next/image';
import React from 'react';
import { EllipsisVertical, Phone } from 'lucide-react';
import AppAvatar from '@/components/AppComponents/Avatar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';

function getLink(desc) {
  const isEmail = desc.includes('@');
  const isPhone = /^0\d{2,}-\d{3,}/.test(desc);
  const isAddress = !isEmail && !isPhone;

  if (isEmail) {
    return `mailto:${desc}`;
  } else if (isPhone) {
    return `tel:${desc.replace(/[^+\d]/g, '')}`;
  } else if (isAddress) {
    const encodedAddress = encodeURIComponent(desc);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }

  return '#';
}
export default function AccountablePersonCardComponent({ data }) {
  return (
    <div className={`w-full flex px-4 lg:px-20 ${data.className}`}>
      <div className="w-full bg-neutral-50 gap-6 p-6 flex flex-col justify-center items-center lg:flex-row lg:justify-between rounded-xl">
        <div className="w-full flex justify-center items-center gap-4">
          <AppAvatar
            data={{
              pic: data.image,
              name: data.name,
              className: 'border border-grey-200 lg:border-1  lg:w-24 lg:h-24 w-16 h-16 ',
            }}
          />

          <div className="w-full flex flex-col justify-start items-start lg:items-start gap-3">
            <h2 className="font-medium text-xl">{data.name}</h2>
            <p className="text-neutral-600 text-base">{data.position}</p>
          </div>
          <div className="w-32 flex flex-col gap-2 justify-center items-center lg:hidden ">
            <a
              className=""
              target="_blank"
              rel="noopener noreferrer"
              href={getLink(data.socialLink)}
            >
              <Image
                src={data.socialImage}
                width={32}
                height={32}
                className="w-8 h-8 rounded-md"
                alt={data.socialImage}
              />
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer">
                  <EllipsisVertical size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="middle">
                <DropdownMenuItem asChild>
                  <a
                    href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center justify-around gap-2"
                  >
                    <span>تماس</span>
                    <Phone className="w-4 h-4" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-row justify-between lg:justify-start lg:gap-4">
            <h3 className="text-neutral-500 text-base lg:text-sm font-medium text-nowrap">
              اطلاعات تماس:
            </h3>
            <a
              className="text-neutral-700 text-sm lg:text-base font-medium"
              rel="noopener noreferrer"
              target="_blank"
              href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
            >
              {data.phone}
            </a>
          </div>
          <div className="w-full flex flex-row justify-between lg:justify-start gap-4  ">
            <h3 className="text-neutral-500 text-base lg:text-sm font-medium text-nowrap">
              آدرس دفتر:
            </h3>
            <a
              className="text-neutral-700 text-sm lg:text-base font-medium"
              rel="noopener noreferrer"
              target="_blank"
            >
              {data.location}
            </a>
          </div>
        </div>

        <div className="w-32 justify-center items-center hidden gap-2 lg:flex">
          <a className="" target="_blank" rel="noopener noreferrer" href={getLink(data.socialLink)}>
            <Image
              src={data.socialImage}
              width={32}
              height={32}
              className="min-w-10 min-h-10 rounded-full"
              alt={data.socialImage}
            />
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer">
                <EllipsisVertical size={32} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <a
                  href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center justify-around gap-2"
                >
                  <span>تماس</span>
                  <Phone className="w-4 h-4" />
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
