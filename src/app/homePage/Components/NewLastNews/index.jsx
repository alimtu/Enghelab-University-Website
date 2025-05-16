import { PlayCircleIcon } from 'lucide-react';
import Image from 'next/image';

export default function WhyCuIrSection({ data }) {
  return (
    <div className="px-4 lg:px-20  flex flex-col lg:gap-8 gap-6">
      <div className="flex flex-col lg:gap-4 gap-2">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 ">{data.title}</h1>
        <p className="text-gray-600 text-base leading-7 lg:text-xl">{data.description}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center lg:h-[584px]">
        <div className="w-full lg:w-5/12 flex flex-col justify-between h-full gap-6 lg:gap-0">
          {data.items.map(card => (
            <div
              key={card.id}
              className="bg-white rounded-lg p-7 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              <h2 className="text-2xl font-bold  text-gray-900">{card.title}</h2>
              <p className="text-gray-800 text-base leading-8">{card.content}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-7/12 relative rounded-md overflow-hidden h-full aspect-video lg:aspect-auto cursor-pointer">
          <Image
            src={data.videoImagePath}
            alt="University building"
            className="w-full h-full object-fill"
            priority
            fill
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-black/50 to-transparent rounded-full lg:p-4 p-2">
            <PlayCircleIcon className="lg:w-24 lg:h-24 w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
