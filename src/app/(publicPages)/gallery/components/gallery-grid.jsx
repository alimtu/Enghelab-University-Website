import { GalleryCard } from './gallery-card';

export function GalleryGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
      {data.map(item => (
        <GalleryCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
    </div>
  );
}
