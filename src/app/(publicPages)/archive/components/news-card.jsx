import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function NewsCard({ title, pic, description, date }) {
  return (
    <div className="h-full flex flex-col pb-4 border rounded-2xl border-neutral-100 ">
      <div className="rounded-t-2xl w-full overflow-hidden lg:min-h-[221px] lg:max-h-[221px] min-h-[168px] max-h-[168px] relative">
        <Image className="w-full h-full object-cover" fill priority src={pic} alt={title} />
      </div>
      <div className="flex flex-col px-4 h-full lg:min-h-[224px] lg:max-h-[224px] min-h-[199px] max-h-[199px]">
        <div className="title mt-4 mb-3">
          <Link
            className="text-[#005B90] text-sm lg:text-base leading-8 font-bold line-clamp-2"
            href="#"
          >
            {title}
          </Link>
        </div>
        <div className="text text-[#252B37] text-opacity-75 mb-3 flex-grow">
          <p className="text-sm leading-7 line-clamp-3">{description}</p>
        </div>
        <div className="date text-[#717680] text-sm text-left flex justify-end items-center gap-2">
          <Calendar size={18} />
          <p>{date || '-'}</p>
        </div>
      </div>
    </div>
  );
}
