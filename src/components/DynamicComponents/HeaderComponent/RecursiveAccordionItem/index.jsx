"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../ui/accordion"

export default function RecursiveAccordionItemComponent({ item, setOpenSideBar }) {

  const hasOnlyLeafChildren = item.children && item.children.every((child) => !child.children)

  return (
      <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-neutral-100 last:border-none font-medium">
        {item.children ? (
            <>
                <AccordionTrigger className="py-3 px-2 text-right hover:no-underline text-neutral-800 [&>svg]:text-neutral-900 [&>svg]:w-[16px] [&>svg]:h-[16px] [&>svg]:stroke-2">
                {item.name}
              </AccordionTrigger>
              <AccordionContent>
                <div
                    className={`flex flex-col space-y-2 pr-4 font-medium text-right text-neutral-800 ${
                        hasOnlyLeafChildren ? "border-r-2 border-secondary-500" : ""
                    }`}
                >
                  {item.children.map((child) =>
                      child.children ? (
                          <Accordion
                              type="multiple"
                              className="w-full border-b-1 last:border-b-0 border-b-neutral-100 cursor-pointer"
                              key={child.id}
                          >
                            <RecursiveAccordionItemComponent item={child} setOpenSideBar={setOpenSideBar} />
                          </Accordion>
                      ) : (
                          <Link
                              key={child.id}
                              href={child.path || "#"}
                              className="py-2 px-2 text-neutral-800 cursor-pointer"
                              onClick={() => setOpenSideBar(false)}
                          >
                            {child.name}
                          </Link>
                      ),
                  )}
                </div>
              </AccordionContent>
            </>
        ) : (
            <div className="py-3 px-2 text-right">
              <Link href={item.path || "#"} className="block w-full" onClick={() => setOpenSideBar(false)}>
                {item.name}
              </Link>
            </div>
        )}
      </AccordionItem>
  )
}
