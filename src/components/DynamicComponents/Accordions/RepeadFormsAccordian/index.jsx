'use client';

import FormsAccordianComponent from '../FormsAccordian';

export default function RepeadFormsAccordianComponent({ data }) {
  return (
    <div className={`flex flex-col  gap-8 px-4 lg:px-20 ${data.className}`}>
      {data.items.map((item, index) => {
        return <FormsAccordianComponent key={item.id || index} data={item} hasPadding={false} />;
      })}
    </div>
  );
}
