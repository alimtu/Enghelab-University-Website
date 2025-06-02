'use client';
import { ChevronLeft } from 'lucide-react';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { defaultImagePath } from '../../../../constants';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

export const videosData = [
  {
    id: 1,
    url: defaultImagePath,
    time: 'شهریور 1403',
    text: 'ویژه برنامه دانشگاه جامع انقلاب اسلامی به مناسبت ایام الله دهه فجر و نیمه شعبان',
  },

  {
    id: 3,
    url: defaultImagePath,
    time: 'شهریور 1403',
    text: 'برگزاری ویزه برنامه هفته بصیرت در دانشگاه جامع انقلاب اسلامی',
  },
  {
    id: 4,
    url: defaultImagePath,
    time: 'شهریور 1403',
    text: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
  },
  {
    id: 2,
    url: defaultImagePath,
    time: 'شهریور 1403',
    text: 'مصاحبه دانشجویان دکتری دانشگاه جامع انقلاب اسلامی 1403',
  },
];

const Media = ({ catTitle = 'ویدئوها', mediaType = 'video' }) => {
  return (
    <>
      <div className="p-5 flex items-center justify-start gap-2 mt-10">
        <h2 className="text-lg">{catTitle}</h2>
        <ChevronLeft />
      </div>

      {mediaType === 'video' && (
        <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 text-center px-4 lg:px-20">
          {videosData.map(card => (
            <VideoCard key={card.id} text={card.text} url={card.url} time={card.time} />
          ))}
        </div>
      )}
      {mediaType === 'img' && (
        <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 px-4 lg:px-20">
          {videosData.map(card => (
            <ImageCard key={card.id} text={card.text} url={card.url} time={card.time} />
          ))}
        </div>
      )}
      <div className="mt-3 border border-gray-200" />
    </>
  );
};
export default Media;
