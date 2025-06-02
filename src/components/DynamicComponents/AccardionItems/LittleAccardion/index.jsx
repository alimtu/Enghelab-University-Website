"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronUp } from "lucide-react"

export function CustomAccordionComponent({ data }) {
  const {items , className } = data
  return (
    <Accordion
      type="single"
      collapsible
      className={` ${className}`}
    >
      <div className={"border rounded-lg"}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className=" p-4 rounded-lg">
          <AccordionTrigger className=" p-6 text-right hover:no-underline  flex items-center justify-between">
            <span className="text-base lg:text-lg font-bold">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="px-10 pb-4 pt-0 text-right text-sm">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
      </div>
    </Accordion>

  )
}
