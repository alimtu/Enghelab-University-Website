'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function NestedAccordionsComponent({ data, hasPadding = true }) {
  const [activeValue, setActiveValue] = useState('group-names');
  const [childActiveValue, setChildActiveValue] = useState('cultural-social');

  return (
    <div className={`${hasPadding ? 'px-4 lg:px-20' : ''} w-full ${data.className}`}>
      <Accordion
        type="single"
        collapsible
        value={activeValue}
        onValueChange={setActiveValue}
        className="rounded-lg overflow-hidden"
      >
        <AccordionItem value="group-names" className="border-0">
          <AccordionTrigger
            className="bg-gray-100 p-4 hover:no-underline flex justify-between items-center border border-grey-100"
            chevronClassName="text-black"
          >
            <div className="flex flex-col gap-3 justify-start items-start">
              <span className="text-lg font-medium">{data.title}</span>
              <div className="bg-gray-100 ">
                <p
                  className="text-sm text-gray-600 text-start leading-7"
                  style={{ textAlign: 'justify' }}
                >
                  {data.description}
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="data-[state=open]:pb-0 p-8">
            <Accordion
              type="single"
              collapsible
              value={childActiveValue || undefined}
              onValueChange={setChildActiveValue}
              className="w-full flex flex-col gap-4"
            >
              {data.items.map(item => (
                <div key={item.id} className="flex w-full p-4 border border-grey-100 rounded-md">
                  <AccordionItem value={item.id} className="border-b border-gray-200 w-full">
                    <AccordionTrigger className="bg-teal-800 text-white p-4 hover:no-underline hover:bg-teal-700">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pb-0 text-right">
                      <div className="text-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
