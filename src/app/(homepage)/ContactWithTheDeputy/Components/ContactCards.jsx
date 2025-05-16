import React from "react";

function getLink(desc) {
    const isEmail = desc.includes('@');
    const isPhone = /^0\d{2,}-\d{3,}/.test(desc);
    const isAddress = !isEmail && !isPhone;

    if (isEmail) {
        return `mailto:${desc}`;
    } else if (isPhone) {
        return `tel:${desc.replace(/[^+\d]/g, '')}`;
    } else if (isAddress) {
        const encodedAddress = encodeURIComponent(desc);
        return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }

    return '#';
}


export default function ContactCards({ items, title , icon}) {
  return (
    <div className="w-full h-full flex flex-col gap-9 bg-neutral-100 px-2 py-4 lg:px-6  lg:py-8 rounded-lg ">
      <div className="flex flex-row gap-2 items-center justify-start">
          {React.cloneElement(icon, { size: 30 ,className:'text-primary-500' })}
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex flex-row gap-1 items-center ">
              <span className="text-grey-700">{React.cloneElement(item.icon, { size: 20 })}</span>
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
