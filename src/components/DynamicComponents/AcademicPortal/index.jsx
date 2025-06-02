'use client';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function AcademicPortalComponent({ data }) {
  const { items, rightItemTitle, leftItemTitle, className } = data;

  const rightItems = items.filter(item => item.position === 'right');
  const leftItems = items.filter(item => item.position === 'left');

  return (
    <div className={`rounded-xl px-4 lg:px-20 py-8 h-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-6 rounded-md shadow-md">
            <h2 className="text-center font-semibold text-xl">{rightItemTitle || ''}</h2>
          </div>

          <div className="rounded-md overflow-hidden">
            <div className="flex flex-col gap-4">
              {rightItems.map((item, index) => (
                <div
                  key={index}
                  className="lg:p-4 lg:pr-0 lg:py-0 p-0  hover:bg-slate-50 transition-colors bg-white rounded-md shadow-md border border-grey-50"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {item.image && (
                      <div className="md:w-2/5 min-h-48 relative rounded-md lg:rounded-tl-none lg:rounded-bl-none overflow-hidden">
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.title}
                          fill
                          className="object-cover h-full w-full"
                        />
                      </div>
                    )}
                    <div className="md:w-3/5 flex flex-col justify-between lg:py-4 py-0 px-3 pb-3">
                      <div>
                        <h3 className="text-teal-700 font-bold text-lg mb-2 text-right line-clamp-1 lg:line-clamp-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-right text-sm line-clamp-2 lg:line-clamp-2 leading-7">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full gap-4">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-6 rounded-md shadow-md">
            <h2 className="text-center font-semibold text-xl">{leftItemTitle || ''}</h2>
          </div>

          <div className="bg-white rounded-md shadow-md overflow-hidden border border-t-0 border-slate-200">
            <div className="divide-y divide-slate-100 flex flex-col gap-0.5">
              {leftItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className=" p-4 flex justify-between items-center hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-slate-700 group-hover:text-teal-700 text-right text-xs md:text-sm font-medium transition-colors gap-2 flex">
                    <span className="text-grey-500">{index + 1}.</span>
                    {item.title}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-teal-600 transition-colors " />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
