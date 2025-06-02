'use client';

import NestedAccordionsComponent from '../NestedAccordions';

export default function RepeadNestedAccordionsComponent({ data }) {
  return (
    <div className={`flex w-full flex-col gap-4 px-4 lg:px-20 ${data.className}`}>
      {data.items.map(item => (
        <NestedAccordionsComponent key={item.id} data={item} hasPadding={false} />
      ))}
    </div>
  );
}
