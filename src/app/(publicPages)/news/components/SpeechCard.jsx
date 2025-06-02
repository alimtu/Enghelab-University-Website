import { CirclePlay, Headphones } from 'lucide-react';

const SpeechCard = () => (
  <div className="flex items-center justify-between p-2 text-sm font-bold bg-gray-200 rounded-md w-170">
    <div className="flex gap-3">
      <img
        src="https://uploadkon.ir/uploads/b50429_250f8b17625d3149a9205f00b75ce07658c81c6d5b.jpg"
        alt="Building"
        className="w-40 rounded-md h-30"
      />
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="flex items-center gap-2">
          <Headphones />
          <h2 className="text-xs">سخنرانی</h2>
        </div>
        <h2 className="text-bold">سخنرانی رهبر انقلاب در مورد مذاکرات</h2>
        <p className="text-xs opacity-50 ">10:18 امروز</p>
      </div>
    </div>
    <CirclePlay className="ml-3 text-5xl text-black" size={32} />
  </div>
);
export default SpeechCard;
