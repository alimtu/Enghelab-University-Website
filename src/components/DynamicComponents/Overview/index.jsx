import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function OverviewComponent({ data }) {
  return (
    <div className="p-4 lg:px-20">
      <section className="bg-[#FAFAFA] rounded-md  p-6 text-gray-800 px-4 lg:px-20">
        <h2 className="text-xl font-bold mb-4">{data.title}</h2>
        <p className="mb-6 text-base">{data.description}</p>

        <Separator className="my-6" />
        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:space-y-4 lg:space-y-0">
          {data.items.map((item, index) => (
            <div className="flex flex-col md:flex-row gap-8" key={index}>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <ul className="list-disc list-inside space-y-4 text-sm text-grey-600">
                  <li>{item.desc1}</li>
                  <li>{item.desc2}</li>
                  <li>{item.desc3}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
