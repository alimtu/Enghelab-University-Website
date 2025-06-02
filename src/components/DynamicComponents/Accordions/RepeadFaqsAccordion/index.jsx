import FaqAccordionComponent from '../FaqAccordion';

export default function RepeadFaqsAccordionComponent({ data }) {
  return (
    <div className={`flex flex-col gap-14 px-4 lg:px-20 ${data.className}`}>
      {data.items.map(item => {
        return <FaqAccordionComponent key={item.id} data={item} hasPadding={false} />;
      })}
    </div>
  );
}
