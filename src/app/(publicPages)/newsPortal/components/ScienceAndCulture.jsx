import { ChevronLeft } from 'lucide-react';

const ScienceAndCulture = () => (
  <div className="mt-10">
    <div className="p-5 pb-0 flex items-center justify-start gap-2">
      <h2 className="text-lg">علمی و فرهنگی</h2>
      <ChevronLeft />
    </div>

    <div className="grid grid-cols-4 p-4 gap-2">
      <div className="col-span-4 lg:col-span-1 flex flex-col gap-3 p-2 text-right">
        <h2 className="text-[#005B90] text-xl font-semibold">
          بیداری اسلامی، تحولی جهانی در سایه انقلاب ایران{' '}
        </h2>
        <p className="text-[#535862] text-[13px]">
          ویژه برنامه دانشگاه جامع انقلاب اسلامی به مناسبت ایام الله دهه فجر و نیمه شعبان سردار محمد
          رضا نقدی: بیداری اسلامی، تحولی جهانی در سایه انقلاب ایران به گزارش روابط عمومی دانشگاه
          جامع انقلاب اسلامی، به مناسبت ایام الله دهه فجر، نیمه شعبان و آغاز ترم جدید، مراسمی در
          تاریخ سشنبه (۲۳ بهمن ماه) برگزار شد.
          <br />
          <br /> این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی
          حاج محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
          گردید.
        </p>
      </div>

      <div className="col-span-4 lg:col-span-2 flex flex-col gap-3 p-2 max-w-[691px] aspect-[1.754]">
        <img
          src="https://uploadkon.ir/uploads/b50429_250f8b17625d3149a9205f00b75ce07658c81c6d5b.jpg"
          alt="Building"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 lg:col-span-1 flex flex-col gap-3 p-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#005B90] text-xl font-semibold text-right">
            دانشگاه جامع انقلاب اسلامی در اندیشه مدیریت بحران های نوین و نوظهور
          </h2>
          <span className="text-sm text-right opacity-50">امروز 10:18</span>
          <div className="border border-gray-200" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[#005B90] text-xl font-semibold text-right">
            {' '}
            فتح الفتوح غز، آشنایی با فرهنگ واقعی اسلام
          </h2>
          <span className="text-sm text-right opacity-50">امروز 10:18</span>
          <div className="border border-gray-200" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[#005B90] text-xl font-semibold text-right">
            بیداری اسلامی، تحولی جهانی در سایه انقلاب ایران
          </h2>
          <span className="text-sm text-right opacity-50">امروز 10:18</span>
          <div className="border border-gray-200" />
        </div>
      </div>
    </div>
    <div className="mt-3 border border-gray-200" />
  </div>
);
export default ScienceAndCulture;
