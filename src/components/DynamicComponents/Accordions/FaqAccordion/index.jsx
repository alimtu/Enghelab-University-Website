'use client';

import { ChevronDown, CircleHelp, Rss } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const defaultFaqData = [
  {
    id: 'item-1',
    question: 'چگونه می‌توانم آیتم‌های خاصی را پیدا کنم؟',
    answer: 'از نوار جستجو یا دسته‌بندی‌ها استفاده کنید.',
  },
  {
    id: 'item-2',
    question: 'آیا این اسناد به‌روز هستند؟',
    answer: 'بله. اسناد مرتب به‌روزرسانی می‌شوند. تاریخ آخرین تغییر در هر سند ذکر شده است.',
  },
  {
    id: 'item-3',
    question: 'در صورت ابهام در قوانین چه کنم؟',
    answer: 'با دفتر مربوطه از طریق بخش تماس ارتباط برقرار کنید.',
  },
];

export default function FaqAccordionComponent({ data, hasPadding = true }) {
  return (
    <div className={`${hasPadding ? 'px-4 lg:px-20' : ''} w-full ${data.className}`}>
      <div className="flex flex-col gap-6 border border-gray-100 rounded-md p-8 ">
        <CardHeader className="flex flex-row items-center justify-between px-0">
          <div className="flex gap-2">
            <Rss strokeWidth={1} />
            <h2 className="text-xl font-bold">{data.title || ''}</h2>
          </div>
        </CardHeader>
        <Accordion type="single" className="w-full border border-gray-150 rounded-md p-4 py-2">
          {data.items.map(faq => (
            <AccordionItem key={faq.id} value={faq.id} className=" border-b-grey-100 py-2">
              <AccordionTrigger className="flex  hover:no-underline" chevronClassName="text-black">
                <div className="text-right font-medium text-base flex gap-2">
                  <CircleHelp strokeWidth={1} />
                  {faq.question}
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-right">
                <p className="text-black">
                  <span className="font-bold "> پاسخ : </span>
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
