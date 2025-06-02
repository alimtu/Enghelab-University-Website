import { ChevronLeft } from 'lucide-react';

import Image from 'next/image';

const NewsCard = ({ category, image, text1, text2, date }) => (
  <div className="m-auto max-w-[305px] font-semibold rounded-lg w-full h-full">
    <div className="flex items-center justify-start gap-2 p-2 mb-4 text-right">
      <h2 className="text-lg">{category}</h2>
      <ChevronLeft />
    </div>

    <img src={image} alt="" className="w-full rounded-lg max-h-[209px]" />

    <p className="text-[#005B90] p-2 text-right text-base">{text1}</p>
    <p className="p-2 text-xs text-right opacity-50">{date}</p>
    <div className="border border-gray-200" />
    <p className="text-[#005B90] p-2 text-right text-base">{text2}</p>
    <p className="p-2 text-xs text-right opacity-50">{date}</p>
  </div>
);

export default NewsCard;
