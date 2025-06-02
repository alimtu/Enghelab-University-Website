import { defaultImagePath } from '../../../../constants';
import { NewsCard } from './news-card';

export function NewsGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
      {data.map(item => (
        <NewsCard
          key={item.id}
          title={item.title}
          pic={item.pic}
          description={item.description}
          date={item.date}
        />
      ))}
    </div>
  );
}
