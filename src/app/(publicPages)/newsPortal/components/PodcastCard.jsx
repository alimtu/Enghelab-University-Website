import { Headphones } from 'lucide-react';

const PodcastCard = ({ text }) => (
  <div className="flex flex-col items-end gap-6 p-2 text-sm font-bold bg-gray-200 rounded-md w-90">
    <div className="flex items-center gap-2">
      <h2 className="text-xs">پادکست</h2>
      <Headphones />
    </div>

    <p>{text}</p>
    <p className="text-xs opacity-50">امروز 10:18</p>
  </div>
);

export default PodcastCard;
