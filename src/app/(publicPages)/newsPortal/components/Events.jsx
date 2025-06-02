import { ChevronLeft } from 'lucide-react';

const d = [
  { name: 'اوقات شرعی', time: '5:05' },
  { name: 'اوقات شرعی', time: '5:05' },
  { name: 'اوقات شرعی', time: '5:05' },
  { name: 'اوقات شرعی', time: '5:05' },
];

const Events = () => (
  <div className="w-full text-sm p-15">
    <div className="flex items-center justify-end gap-2">
      <h2 className="pr-2 text-lg text-right">رویدادهای آتی</h2>
      <ChevronLeft />
    </div>

    <div className="flex justify-between p-3">
      <p className="opacity-70">چهارشنبه 3 خرداد</p>
      <div className="flex gap-2">
        <p className="font-semibold">شروع ارزشیابی اساتید</p>
        <div className="flex items-center justify-center w-6 h-6 p-2 text-xs text-white bg-[#00B9B3] rounded-sm">
          03
        </div>
      </div>
    </div>
    <div className="border border-gray-200" />

    <div className="flex justify-between p-3">
      <p className="opacity-70">چهارشنبه 10 خرداد</p>
      <div className="flex gap-2">
        <p className="font-semibold">پایان ارزشیابی اساتید</p>
        <div className="flex items-center justify-center w-6 h-6 p-2 text-xs text-white bg-[#00B9B3] rounded-sm">
          10
        </div>
      </div>
    </div>
    <div className="border border-gray-200" />

    <div className="flex justify-between p-3">
      <p className="opacity-70">دوشنبه 21 خرداد</p>
      <div className="flex gap-2">
        <p className="font-semibold">پایان کلاس ها</p>
        <div className="flex items-center justify-center w-6 h-6 p-2 text-xs text-white bg-[#00B9B3] rounded-sm">
          21
        </div>
      </div>
    </div>
    <div className="border border-gray-200" />

    <div className="flex justify-between p-3">
      <p className="opacity-70">دوشنبه 1 تیر</p>
      <div className="flex gap-2">
        <p className="font-semibold">شروع امتحانات ترم</p>
        <div className="flex items-center justify-center w-6 h-6 p-2 text-xs text-white bg-[#00B9B3] rounded-sm">
          01
        </div>
      </div>
    </div>
    <div className="border border-gray-200" />

    <div className="flex justify-between p-3">
      <p className="opacity-70">چهارشنبه 14 تیر</p>
      <div className="flex gap-2">
        <p className="font-semibold">پایان امتحانات ترم</p>
        <div className="flex items-center justify-center w-6 h-6 p-2 text-xs text-white bg-[#00B9B3] rounded-sm">
          14
        </div>
      </div>
    </div>
    <div className="border border-gray-200" />

    <h2 className="pr-2 mt-5 text-lg text-right">اوقات شرعی</h2>
    <div className="flex justify-center gap-3 mt-5">
      {d.map(o => (
        <div
          className="relative rounded-lg w-35 h-35 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://uploadkon.ir/uploads/b50429_250f8b17625d3149a9205f00b75ce07658c81c6d5b.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#006273] opacity-80 z-0" />

          <div className="relative z-10 flex justify-center items-center h-full w-full">
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <p>{o.name}</p>

              <p className="text-2xl">{o.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Events;
