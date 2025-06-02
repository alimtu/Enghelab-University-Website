import { useState } from 'react';

export default function AccordChildComponent({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" rounded-lg overflow-hidden px-4 lg:px-20" key={item.id}>
      <div
        className="bg-teal-500 text-white rounded-md p-3 flex items-center   cursor-pointer"
        onClick={toggleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <h2 className="text-lg font-medium p-2">{item.title}</h2>
      </div>

      <div
        className={`border border-gray-200 p-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <div className="p-4">
          {item.items.map(doc => (
            <div key={doc.id} className="grid grid-cols-1 lg:grid-cols-3 py-2 ">
              <div className="flex-1 text-center lg:text-right">
                <p className="font-medium text-gray-800">{doc.title}</p>
              </div>
              <div></div>
              <div className={'flex flex-col lg:flex-row gap-3 items-center'}>
                <p className="text-sm text-gray-500">{doc.date}</p>
                <a
                  href={doc.fileUrl}
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors mr-4"
                  download
                >
                  دانلود فایل
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
