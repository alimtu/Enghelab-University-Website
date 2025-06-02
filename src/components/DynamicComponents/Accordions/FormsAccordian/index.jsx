'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../../../ui/button';
import { Download } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function FormsAccordianComponent({ data, hasPadding = true }) {
  return (
    <div className={` w-full ${data.className} ${hasPadding ? 'px-4 lg:px-20 py-6' : ''}`}>
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value="forms" className="border-b-0">
          <AccordionTrigger
            className="bg-teal-500 text-white px-6 py-4 hover:bg-teal-600 hover:no-underline rounded-t-md"
            chevronClassName="text-white"
          >
            <span className="text-lg font-medium">{data.title}</span>
          </AccordionTrigger>

          <AccordionContent className="pt-0 pb-0 px-12 py-6">
            <div className="divide-y divide-gray-100">
              <div className="flex flex-col gap-4 p-4 py-6 border border-grey-100 rounded-md">
                {data.items.map((item, index, array) => (
                  <div key={item.id} className="flex flex-col ">
                    <div className="flex justify-between items-center px-4 ">
                      <div className="text-right">
                        <h3 className="text-sm font-bold text-gray-900 ">{item.title}</h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {item.lastUpdated}
                        </span>
                        <Button
                          size="sm"
                          className="bg-teal-500 hover:bg-teal-600 text-white border-none"
                          onClick={() => window.open(item.downloadUrl, '_blank')}
                        >
                          <Download className="h-4 w-4 ml-2" />
                          <span>دانلود فایل</span>
                        </Button>
                      </div>
                    </div>
                    <div className="w-full justify-center items-center flex">
                      {index < array.length - 1 && <Separator className="mt-6 max-w-3/4" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
