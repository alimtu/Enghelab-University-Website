'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function SubNavComponent({ data }) {
  const pathname = usePathname();
  const [openSubNav, setOpenSubNav] = useState(true);

  if (pathname === '/' || !data.length) return null;

  return (
    <>
      <div
        className={`absolute hidden lg:flex header-component max-lg:w-full lg:min-w-[calc(100vw*10.5/12)] lg:max-w-[calc(100vw*10.5/12)] min-h-14 h-14 bg-white rounded-b-full border border-grey-100 top-0 lg:top-17 -z-5 py-2 items-center justify-center left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out ${
          openSubNav
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="hidden lg:flex w-11/12 justify-between items-center">
          {data.map(item => (
            <div key={`item_${item.id}`}>
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer text-neutral-800 text-sm font-medium hover:text-neutral-950 flex items-center gap-1">
                    {item.name}
                    <ChevronDown className="w-4 h-4 text-neutral-800" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mt-5 px-4 py-4" align="start" dir="rtl">
                    {item.children.map((child, index) => (
                      <React.Fragment key={child.id}>
                        <DropdownMenuItem asChild>
                          <Link
                            href={child.path || '#'}
                            className="w-full flex flex-col items-start font-medium py-3 !rounded-sm cursor-pointer"
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                        {index < item.children.length - 1 && <Separator className="" />}
                      </React.Fragment>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.path || '#'}
                  className="text-neutral-800 text-sm font-medium hover:text-neutral-950 cursor-pointer"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ease-in-out 
            ${openSubNav ? 'top-28' : 'top-14 '}
            `}
      >
        <button
          className="bg-primary-400 rounded-full p-1"
          onClick={() => setOpenSubNav(prev => !prev)}
        >
          {openSubNav ? (
            <ChevronUp size={20} className="stroke-2 text-white" />
          ) : (
            <ChevronDown size={20} className="stroke-2 text-white" />
          )}
        </button>
      </div>
    </>
  );
}
