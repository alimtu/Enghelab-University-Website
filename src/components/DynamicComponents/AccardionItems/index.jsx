'use client';

import { useState } from 'react';
import AccordChildComponent from './Child';
export default function AccardionItemsComponent({ data }) {
  return (
    <div className="flex flex-col gap-2 py-4">
      {data.items.map(item => (
        <AccordChildComponent item={item} key={item.id} />
      ))}
    </div>
  );
}
