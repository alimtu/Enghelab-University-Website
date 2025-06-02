'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { HardDriveDownload } from 'lucide-react';
import bg from '../../../../public/Images/Slider/5.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useDeviceDetection } from '../../../lib/hooks/useDeviceDetection';
import { handleClickOnItem } from '../../../lib/utils/useFulFunctions';
import { useRouter } from 'next/navigation';

// Constants
const SLIDE_CONFIG = {
  DESKTOP_MAX_SLIDES: 5,
  MOBILE_MAX_SLIDES: 3,
  DESKTOP_BREAKPOINT: 4,
  MOBILE_BREAKPOINT: 2,
  DESKTOP_SPACING: 32,
  MOBILE_SPACING: 12,
  AUTOPLAY_DELAY: 2500,
};

const STYLES = {
  container:
    'relative Features-bg py-3 pt-6 lg:py-7 lg:pt-10 h-full w-full flex flex-col items-center justify-center',
  backgroundImage: 'absolute inset-0 w-full h-full z-20',
  overlay: 'absolute inset-0 bg-secondary-875/90 z-25',
  content: 'w-11/12 flex flex-col justify-between items-center relative z-30 h-full',
  swiper: 'w-full h-full custom-pagination-swiper for-hero-section active-white',
  slide: 'flex relative justify-center items-center h-full',
  card: 'bg-white flex justify-center items-center h-28 lg:h-58 cursor-pointer group hover:bg-[#0CC0BA] relative',
  downloadButton: 'absolute rounded-full text-white z-40 cursor-pointer hover:bg-neutral-300',
  cardContent:
    'w-full p-2 h-full flex flex-col items-center max-lg:gap-3 lg:justify-center lg:gap-8 rounded-2xl border-none group-hover:filter group-hover:brightness-0 group-hover:invert',
  image: 'w-9 h-9 lg:w-20 lg:h-20 text-center rounded-md',
  title:
    'font-medium align-text-bottom lg:font-medium lg:text-xl text-[#004355] text-center group-hover:text-white max-lg:min-h-[37px] flex justify-center items-center',
};

const calculateSlidesPerView = (itemsLength, isDesktop) => {
  if (isDesktop) {
    return itemsLength > SLIDE_CONFIG.DESKTOP_BREAKPOINT
      ? SLIDE_CONFIG.DESKTOP_MAX_SLIDES
      : itemsLength;
  }
  return itemsLength > SLIDE_CONFIG.MOBILE_BREAKPOINT
    ? SLIDE_CONFIG.MOBILE_MAX_SLIDES
    : itemsLength;
};

const getCardClassName = isDesktop => {
  const roundedClass = isDesktop ? 'rounded-xl' : 'rounded-md';
  return `${STYLES.card} ${roundedClass}`;
};

const getDownloadButtonClassName = isDesktop => {
  const sizeClass = isDesktop ? 'top-2 left-2 p-2 bg-neutral-200' : 'top-1 left-1 p-1';
  return `${STYLES.downloadButton} ${sizeClass}`;
};

const handleSlideClick = (item, index, router) => {
  if (item.link) {
    handleClickOnItem(item.link, router);
  } else {
    console.warn(`Item at index ${index} has no link property.`);
  }
};

const DownloadButton = ({ hasDownload, isDesktop, downloadUrl }) => {
  if (!hasDownload) return null;

  const handleDownloadClick = e => {
    e.stopPropagation(); // Prevent the card click from triggering
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <button className={getDownloadButtonClassName(isDesktop)} onClick={handleDownloadClick}>
      <HardDriveDownload size={isDesktop ? 17 : 15} className="text-primary-800 stroke-1" />
    </button>
  );
};

const FeatureCard = ({ item, index, isDesktop, router }) => (
  <div
    className={getCardClassName(isDesktop)}
    onClick={() => handleSlideClick(item, index, router)}
  >
    <DownloadButton
      hasDownload={item.hasDownload}
      isDesktop={isDesktop}
      downloadUrl={item.downloadUrl}
    />
    <div className={STYLES.cardContent}>
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.name}
        width={80}
        height={80}
        className={STYLES.image}
      />
      <div className={STYLES.title}>{item.name}</div>
    </div>
  </div>
);

export default function FeaturesComponent({ data }) {
  const { isDesktop } = useDeviceDetection();
  const router = useRouter();

  const swiperConfig = {
    slidesPerView: calculateSlidesPerView(data.items.length, isDesktop),
    spaceBetween: isDesktop ? SLIDE_CONFIG.DESKTOP_SPACING : SLIDE_CONFIG.MOBILE_SPACING,
    loop: true,
    pagination: {
      clickable: true,
      type: 'bullets',
    },
    autoplay: {
      delay: SLIDE_CONFIG.AUTOPLAY_DELAY,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    modules: [Autoplay, Pagination],
  };

  return (
    <div className={`${STYLES.container} ${data.className}`}>
      <div className={STYLES.backgroundImage}>
        <Image
          src={bg || '/placeholder.svg'}
          alt="University building"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className={STYLES.overlay} />

      <div className={STYLES.content}>
        <Swiper {...swiperConfig} className={STYLES.swiper}>
          {data.items.map((item, index) => (
            <SwiperSlide key={`slide_${index}`} className={STYLES.slide}>
              <FeatureCard item={item} index={index} isDesktop={isDesktop} router={router} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
