'use client';

import Image from 'next/image';
import Link from 'next/link';

const defaultLinks = [
  {
    text: 'دفترچه تلفن',
    href: '#',
    iconSrc: '/Images/FooterIcons/book.svg',
    iconAlt: 'Phone Book',
  },
  {
    text: 'تماس با ریاست',
    href: '#',
    iconSrc: '/Images/FooterIcons/Phone.svg',
    iconAlt: 'Contact President',
  },
  {
    text: 'خبرنامه',
    href: '#',
    iconSrc: '/Images/FooterIcons/atSign.svg',
    iconAlt: 'Newsletter',
  },
  {
    text: 'اینستاگرام',
    href: 'https://instagram.com/Uni-account',
    iconSrc: '/Images/FooterIcons/instagram.svg',
    iconAlt: 'Instagram',
    isSocialMedia: true,
  },
  {
    text: 'ایتا',
    href: 'https://eitaa.com/Uni-account',
    iconSrc: '/Images/FooterIcons/eitaa.svg',
    iconAlt: 'Eitaa',
    isSocialMedia: true,
  },
  {
    text: 'واتس‌آپ',
    href: 'https://wa.me/Uni-number',
    iconSrc: '/Images/FooterIcons/whatsapp.svg',
    iconAlt: 'WhatsApp',
    isSocialMedia: true,
  },
];

const UpperFooter = ({ links = defaultLinks }) => {
  return (
    <div className="h-auto w-full mx-auto bg-secondary-950 py-5 px-6 lg:px-0 lg:py-7 flex justify-center items-center mt-5">
      <div className="connect-infos-container text-xs lg:text-sm text-white  grid grid-cols-2 gap-7 sm:grid-cols-3 sm:place-items-center md:grid-cols-6 w-full">
        {links.map((link, index) => {
          const commonClasses =
            'flex items-center gap-2 hover:text-orange-400 group hover:scale-110 transition-transform';
          const imageElement = (
            <Image
              src={link.iconSrc || '/placeholder.svg'}
              alt={link.iconAlt}
              width={20}
              height={20}
              className="group-hover:scale-110 transition-transform"
            />
          );

          return link.isSocialMedia ? (
            <a
              key={index}
              className={commonClasses}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {imageElement}
              {link.text}
            </a>
          ) : (
            <Link key={index} className={commonClasses} href={link.href}>
              {imageElement}
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UpperFooter;
