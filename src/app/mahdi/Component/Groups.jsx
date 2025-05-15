'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { clsx } from 'clsx';
export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-2 px-4 lg:px-16 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center bg-[#006273] py-4 mt-10 text-right text-white rounded-sm  transition-colors"
      >
        <ChevronDown
          className={clsx(
            'h-5 w-5 m-2 transition-transform duration-200',
            isOpen ? 'rotate-180' : ''
          )}
        />
        <span className="font-bold text-lg">{title}</span>
      </button>
      {isOpen && <div className="bg-white py-4 text-right ">{children}</div>}
    </div>
  );
}

export function Accordion({ items }) {
  return (
    <div className="w-full ">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
