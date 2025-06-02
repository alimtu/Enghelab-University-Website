import ContactCard from '../ContactCard/ContactCards';
import { Dot, Phone, NotebookTabs } from 'lucide-react';
import Image from 'next/image';

export default function ContactWithUni({ data }) {
  const { defaultImg, items } = data;

  return (
    <div className="w-full h-full  px-4 lg:px-20 ">
      <div className="w-full h-full grid lg:grid-cols-2 gap-4 lg:gap-6">
        {items.map((item, index) => (
          <ContactCard key={index} items={item.items} icon={item.icon} title={item.title} />
        ))}
        <Image
          width={2000}
          height={2000}
          className="w-full aspect-[4/3] h-auto object-cover rounded-lg "
          src={defaultImg}
          alt={'map'}
        />
      </div>
    </div>
  );
}
