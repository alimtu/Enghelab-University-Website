import { Images } from 'lucide-react';

const ImageCard = ({ text, url, time }) => (
  <a className="m-auto text-sm bg-gray-700 rounded-lg w-full h-full" href="#">
    <div className="relative ">
      <div className="absolute top-2 right-2 bg-opacity-80 rounded-2xl p-2">
        <Images className="text-[#0CC0BA]" size={32} />
      </div>
      <img src={url} alt="Building" className="w-full rounded-t-lg h-45 object-cover" />
      <span className="absolute bottom-0 right-0 z-10 p-2 text-white mt-35 transparent rounded-tl-lg">
        {time}
      </span>
    </div>
    <p className="p-2 text-right text-white">{text}</p>
  </a>
);
export default ImageCard;
