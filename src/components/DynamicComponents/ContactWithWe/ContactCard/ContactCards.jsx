import React from "react";
import { Phone, NotebookTabs } from 'lucide-react';

function getLink(desc) {
    const persianToEnglishDigits = (str) => {
        const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
        return str.replace(/[۰-۹]/g, d => persianDigits.indexOf(d).toString());
    };

    const normalized = persianToEnglishDigits(desc.trim());

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    const isPhone = /^(?:\+98|0)?\d{2,4}[-\s]?\d{3,4}[-\s]?\d{3,4}$/.test(normalized);
    const isAddress = !isEmail && !isPhone;

    if (isEmail) {
        return `mailto:${normalized}`;
    } else if (isPhone) {
        const digitsOnly = normalized.replace(/[^+\d]/g, '');
        return `tel:${digitsOnly}`;
    } else if (isAddress) {
        const encodedAddress = encodeURIComponent(desc);
        return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }

    return '#';
}



export default function ContactCards({ items, title }) {
  return (
    <div className="w-full h-full flex flex-col gap-9 bg-neutral-100 px-2 py-4 lg:px-6 lg:py-8 rounded-lg ">
      <div className="flex flex-row gap-2 items-center justify-start">
          <NotebookTabs className='text-primary-500' size={30} />
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex flex-row gap-1 items-center ">
              <span className="text-grey-700"><Phone size={20} /></span>
              <h4 className="text-base font-medium">{item.title}:</h4>
            </div>
              <a
                  href={getLink(item.desc)}
                  className="text-primary-600 text-base flex flex-wrap justify-end items-center"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  {item.desc}
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}
