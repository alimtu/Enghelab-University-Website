import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { defaultImagePath } from '../../../../constants';
import AdminCardComponent from '../../AccountablePersonCard/adminCard';

export default function AdminsAccordionComponent({ data }) {
  return (
    <div className={`flex flex-col gap-12 px-8 lg:px-20 ${data.className}`}>
      {data.items.map(item => {
        return (
          <Accordion type="single" className="w-full" collapsible key={item.id}>
            <AccordionItem value="forms" className="border-b-0">
              <AccordionTrigger
                className="bg-teal-500 text-white px-6 py-4 hover:bg-teal-600 hover:no-underline rounded-t-md"
                chevronClassName="text-white"
              >
                <span className="text-lg font-medium">{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-0 px-0 lg:px-10 py-6 flex flex-col gap-6">
                <AdminCardComponent data={item.rootData} />

                {item.children.map(child => {
                  return (
                    <Accordion type="single" className="w-full" collapsible key={child.id}>
                      <AccordionItem value="forms" className="border-b-0">
                        <AccordionTrigger
                          className="bg-teal-500 text-white px-6 py-4 hover:bg-teal-600 hover:no-underline rounded-t-md"
                          chevronClassName="text-white"
                        >
                          <span className="text-lg font-medium">{child.title}</span>
                        </AccordionTrigger>

                        <AccordionContent className="pt-0 pb-0 py-6 gap-6 flex flex-col">
                          <AdminCardComponent data={child.children.find(ch => ch.level === 1)} />

                          {child.children
                            .filter(item => item.level !== 1)
                            .map(ch => {
                              return <AdminCardComponent data={ch} key={ch.id} />;
                            })}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
