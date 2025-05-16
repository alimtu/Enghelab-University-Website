import Image from 'next/image';

export default function TwoColumnGalleryComponent({ data }) {
  const renderItem = (item, index) => (
    <div key={index} className="flex flex-col gap-6">
      {index === 0 && (
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-white w-full text-xl lg:text-3xl font-bold text-justify lg:mb-16 mb-0 leading-9">
            {data.title}
          </h1>
        </div>
      )}
      <Image
        src={item.img || ''}
        alt={`Image ${index}`}
        height={400}
        width={588}
        className="w-full h-auto lg:border-3 lg:border-white rounded-xl"
      />
      <p className="text-white  text-base lg:text-xl lg:font-bold lg:leading-12 leading-8 text-justify">
        {item.desc}
      </p>
    </div>
  );

  return (
    <div className="relative bg-no-repeat bg-cover bg-center bg-fixed w-full bg-Footer-100 flex flex-col justify-center items-center p-4 lg:px-20 lg:py-14">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data.backgroundImagePath}
          alt="University building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/90" />
      </div>
      <div className="z-20 w-full p-2 lg:p-0">
        <div className="grid grid-cols-1 gap-10 lg:hidden w-full">
          {data.items.map((item, index) => renderItem(item, index))}
        </div>
        <div className="hidden lg:flex lg:flex-row lg:gap-10 gap-4 w-full">
          <div className="flex flex-col lg:gap-10 gap-4 w-1/2 ">
            {data.items.map((item, index) => {
              if (index % 2 === 0) {
                return renderItem(item, index, index === 0);
              }
              return null;
            })}
          </div>
          <div className="flex flex-col lg:gap-10 gap-4 w-1/2 ">
            {data.items.map((item, index) => {
              if (index % 2 !== 0) {
                return renderItem(item, index, false);
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
