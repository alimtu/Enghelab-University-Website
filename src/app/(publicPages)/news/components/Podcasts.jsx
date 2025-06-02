import { ChevronLeft } from 'lucide-react';
import SpeechCard from './SpeechCard';
import PodcastCard from './PodcastCard';

export const podcastData = [
  {
    id: 1,
    category: 'سخنرانی',
    title: 'سخنرانی رهبر انقلاب در مورد مذاکرات',

    text: '...بیاموزیم که چگونه بیاموزیم',
  },
  {
    id: 2,
    text: 'سخنرانی رهبر انقلاب در باب دانشجو',
  },
];

const Podcasts = () => (
  <>
    <div className="p-5 pb-0 flex items-center justify-start gap-2">
      <h2 className="text-lg mb-3">پادکست ها و سخنرانی</h2>
      <ChevronLeft />
    </div>

    <div className="flex justify-between gap-4">
      <SpeechCard />

      {podcastData.map(data => (
        <PodcastCard key={data.id} text={data.text} />
      ))}
    </div>
  </>
);
export default Podcasts;
