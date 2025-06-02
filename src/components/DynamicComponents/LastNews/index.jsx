'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { useRouter } from 'next/navigation';
import { handleClickOnItem } from '../../../lib/utils/useFulFunctions';

const NewsHeader = ({ title, description, portalLink }) => (
  <div className="flex lg:flex-row flex-col justify-between items-center w-full">
    <div className="lg:flex-col lg:justify-between justify-center items-start lg:items-center flex flex-col lg:gap-2 gap-3">
      <div className="w-full flex justify-center lg:justify-start">
        <h1 className="text-3xl font-bold text-right lg:mb-0">{title}</h1>
      </div>
      <p
        className="w-full text-right text-gray-600 text-sm leading-7"
        style={{ textAlign: 'justify' }}
      >
        {description}
      </p>
    </div>
    <div className=" items-center text-blue-600 text-right lg:flex hidden">
      <Button className="bg-primary-500 text-white">
        <div className="flex gap-2">
          <ArrowLeft className="h-5 w-5 ml-1" />
          <Link href={portalLink || '#'} className="text-sm">
            پرتال خبری
          </Link>
        </div>
      </Button>
    </div>
  </div>
);

const NewsItem = ({ title, description, imageSrc, imageAlt, id, link }) => {
  const router = useRouter();
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => {
        if (link) {
          handleClickOnItem(link, router);
        } else {
          console.warn(`item at index has no link property.`);
        }
      }}
    >
      <div className="flex lg:flex-row w-full">
        <div className="w-1/2">
          <div className="w-full lg:min-h-[171px] min-h-[160px] relative">
            <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
          </div>
        </div>
        <div className="p-4 text-right w-1/2">
          <h2 className="lg:text-lg text-sm max-lg:line-clamp-2 font-bold text-primary-500 mb-2 lg:leading-8 leading-6 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-500 lg:text-sm text-xs lg:leading-7 leading-6 max-lg:line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturedNews = ({ title, description, imageSrc, imageAlt, id, link }) => {
  const router = useRouter();
  return (
    <div
      id={id || ''}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={() => {
        if (link) {
          handleClickOnItem(link, router);
        } else {
          console.warn(`item at index has no link property.`);
        }
      }}
    >
      <div className="flex flex-col">
        <div className="w-full">
          <div className="w-full h-80 lg:h-96 relative">
            <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
          </div>
        </div>
        <div className="p-4 text-right">
          <h2 className="lg:text-xl text-base font-bold text-primary-500 mb-3 leading-8">
            {title}
          </h2>
          <p className="text-gray-500  lg:text-sm text-xs leading-6 lg:leading-7">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function LastNewsComponent({ data }) {
  const router = useRouter();
  const { header, news } = data;
  const featuredNews = news.find(item => item.type === 'featured') || null;
  const regularNews = news.filter(item => item.type === 'regular');

  return (
    <div
      className={`lg:px-20 px-4 flex flex-col gap-6 justify-center items-center lg:justify-start lg:items-start text-right w-full ${data.className}`}
    >
      <NewsHeader
        title={header.title}
        description={header.description}
        portalLink={header.portalLink}
      />

      {data.type === 'vertical' ? (
        <>
          {featuredNews && (
            <div
              className="rounded-lg overflow-hidden shadow-md flex flex-col cursor-pointer"
              onClick={() => {
                if (featuredNews.link) {
                  handleClickOnItem(featuredNews.link, router);
                } else {
                  console.warn(`item at index has no link property.`);
                }
              }}
            >
              <div className="relative w-full lg:min-h-[591px] min-h-[225px]">
                <Image
                  src={featuredNews.imageSrc}
                  alt={featuredNews.imageAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white flex-1 min-h-[177px] flex flex-col">
                <h2 className="text-lg font-semibold text-right mb-2">{featuredNews.title}</h2>
                <p className="text-gray-700 text-right text-sm leading-8">
                  {featuredNews.description}
                  اسلامی نشست عمومی جناب آقای دکتر قاضی زاده هاشمی از دانشگاه جامع انقلاب اسلامی
                  دانشگاه جامع انقلاب اسلامی نشست عمومی جناب آقای دکتر قاضی زاده هاشمی از دانشگاه
                  جامع انقلاب اسلامی
                </p>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {regularNews.map(item => (
              <div
                key={item.id || item.title}
                className="rounded-lg overflow-hidden shadow-md flex flex-col lg:flex-row cursor-pointer"
                onClick={() => {
                  if (item.link) {
                    handleClickOnItem(item.link, router);
                  } else {
                    console.warn(`item at index has no link property.`);
                  }
                }}
              >
                <div className="lg:w-5/12 relative min-h-[171px] max-h-[171px]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="object-cover"
                    fill
                    priority
                  />
                </div>
                <div className="lg:w-7/12 p-4 bg-white">
                  <h3 className="text-base font-semibold text-right mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-right text-sm leading-7 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredNews && (
            <FeaturedNews
              id={featuredNews.id}
              title={featuredNews.title}
              description={featuredNews.description}
              imageSrc={featuredNews.imageSrc}
              imageAlt={featuredNews.imageAlt}
              link={featuredNews.link}
            />
          )}
          <div className="space-y-8">
            {regularNews.map(item => (
              <NewsItem
                key={item.id || item.title}
                id={item.id}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                link={item.link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
