'use client';

import {useState} from 'react';
import {ChevronDown} from 'lucide-react';

import {clsx} from 'clsx';

export function AccordionItem({title, children, defaultOpen = false, color}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className=" w-[90%] m-auto  bg-white  ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx("flex w-full items-center  py-4 mt-10 text-right text-white rounded-sm  transition-colors", color === undefined ? "bg-[#006273]" : color)}
            >
                <ChevronDown
                    className={clsx(
                        'h-5 w-5 m-2 transition-transform duration-500',
                        isOpen ? `rotate-180 ${color} ` : ''
                    )}
                />
                <span className={clsx("font-bold text-lg  ", color)}>{title}</span>
            </button>
            {isOpen && <div className={clsx("   bg-white py-4 text-right",color)}>{children}</div>}
        </div>
    );
}

export function Accordion({items}) {
    return (
        <div className="w-full ">
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    title={item.title}
                    defaultOpen={item.defaultOpen}
                    color={item.color}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
