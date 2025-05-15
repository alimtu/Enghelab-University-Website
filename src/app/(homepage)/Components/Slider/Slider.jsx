'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import FooterSlider from './FooterSlider';

export default function Slider({ title = '' }) {
  const [slides, setSlides] = useState([
    '/Images/Slider/3.png',
    '/Images/Slider/5.png',
    '/Images/Slider/2.png',
    '/Images/Slider/4.png',
  ]);

  const containerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const navbar = document.querySelector('nav'); // Adjust selector to your navbar
        const navbarHeight = navbar?.offsetHeight || 0;
        const screenHeight = window.innerHeight;

        if (window.innerWidth < 1024) {
          // Only apply on mobile
          containerRef.current.style.height = `${
            screenHeight - navbarHeight
          }px`;
        } else {
          // On desktop/larger screens use full height
          containerRef.current.style.height = '100vh';
        }
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white relative flex justify-center items-center"
    >
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
        style={{
          '--swiper-pagination-bullet-width': '12px',
          '--swiper-pagination-bullet-height': '12px',
          '--swiper-pagination-bullet-inactive-color': '#ccc',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
          '--swiper-pagination-color': '#0CC0BA',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
          '--swiper-pagination-bullet-border-radius': '50%',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={`slide_${index}`}
            className="flex justify-center items-center h-full w-full"
          >
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={slide}
                alt="Slide Image"
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className="custom-pagination"
          style={{
            position: 'absolute',
            bottom: '60px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
          }}
        ></div>
      </Swiper>

      {title && (
        <div className="absolute bottom-20 text-white z-20 font-bold text-xl">
          {title}
        </div>
      )}

      <FooterSlider />
    </div>
  );
}
