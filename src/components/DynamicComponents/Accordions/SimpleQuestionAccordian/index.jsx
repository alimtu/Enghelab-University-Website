'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

export default function RepeadSimpleQuestionAccordianComponent({ data, hasPadding = true }) {
  const [activeValue, setActiveValue] = useState('group-names');

  return (
    <div className={`${hasPadding ? 'px-4 lg:px-20' : ''} ${data.className}`}>
      <Accordion
        type="single"
        collapsible
        value={activeValue}
        onValueChange={setActiveValue}
        className={`rounded-lg overflow-hidden flex flex-col  w-full border border-grey-100`}
      >
        {data.items.map(item => {
          return (
            <AccordionItem
              value={item.id}
              className="border-0 [&:not(:last-child)]:border-b border-grey-100"
              key={item.id}
            >
              <AccordionTrigger
                className="bg-white p-4 hover:no-underline flex justify-between items-center"
                chevronClassName="text-black"
              >
                <div className="flex flex-col gap-3 justify-start items-start">
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="data-[state=open]:pb-0 px-4 ">
                <div>{item.content}</div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
