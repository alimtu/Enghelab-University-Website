import { CirclePlay } from 'lucide-react';

const VideoCard = ({ text, url, time }) => (
  <a className="w-full h-full m-auto text-sm bg-gray-700 rounded-lg" href="#">
    <div className="relative ">
      <CirclePlay className="text-[#0CC0BA] absolute top-2 right-2 text-2xl" size={32} />
      <img src={url} alt="Building" className="w-full rounded-t-lg h-45 object-cover" />
      <span className="absolute bottom-0 right-0 z-10 p-2 text-white mt-35 transparent rounded-tl-lg">
        {time}
      </span>
    </div>
    <p className="p-2 text-right text-white">{text}</p>
  </a>
);
export default VideoCard;
