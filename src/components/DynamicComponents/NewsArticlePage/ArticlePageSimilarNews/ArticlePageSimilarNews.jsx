import Link from 'next/link';
import Image from 'next/image';
import { defaultImagePath } from '../../../../constants/index';

export default function ArticlePageSimilarNews() {
  return (
    <div className=" py-16  bg-white grid grid-cols-1 lg:grid-cols-[29%_68%] lg:px-8 justify-center gap-12">
      <div className="flex flex-col justify-center gap-5 lg:self-start">
        <h3 className="font-medium text-3xl lg:text-5xl lg:font-bold">از مقاله های دانشگاه</h3>
        <p className="text-neutral-600 leading-7 wrap-anywhere text-justify text-base lg:text-xl">
          با عضویت در خبرنامه دانشگاه با گزارش‌های آسان اندازه‌گیری کنید چه چیزی مهم است. شما
          می‌توانید داده‌ها را فیلتر کنید، صادر کنید و عمیق‌تر بررسی کنید با چند کلیک.
        </p>
        <Link
          href="/"
          className="hidden lg:inline-block w-fit py-3 px-5 text-center rounded-lg bg-secondary-550 text-white text-base"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-5">
          <div className="w-full lg:w-2/4 overflow-hidden rounded-2xl">
            <Image
              src={defaultImagePath}
              alt="news image"
              className="w-full h-full lg:h-[200px] object-cover aspect-[4/3] "
              width={200}
              height={200}
            />
          </div>
          <div className="lg:w-2/4 flex flex-col gap-2">
            <h4 className="text-sm font-medium text-secondary-950">عنوان</h4>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-medium text-xl">مدیریت تیم با گزارش‌ها</h3>
              <p className="text-neutral-700 text-base leading-7 wrap-anywhere text-justify">
                با گزارش‌های آسان Untitled اندازه‌گیری کنید چه چیزی مهم است. شما می‌توانید داده‌ها
                را فیلتر کنید، صادر کنید و عمیق‌تر بررسی کنید با چند کلیک.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-5">
          <div className="w-full lg:w-2/4 overflow-hidden rounded-2xl">
            <Image
              src={defaultImagePath}
              alt="news image"
              className="w-full h-full lg:h-[200px] object-cover aspect-[4/3] "
              width={200}
              height={200}
            />
          </div>
          <div className="lg:w-2/4 flex flex-col gap-2">
            <h4 className="text-sm font-medium text-secondary-950">عنوان</h4>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-medium text-xl">مدیریت تیم با گزارش‌ها</h3>
              <p className="text-neutral-700 text-base leading-7 wrap-anywhere text-justify">
                با گزارش‌های آسان Untitled اندازه‌گیری کنید چه چیزی مهم است. شما می‌توانید داده‌ها
                را فیلتر کنید، صادر کنید و عمیق‌تر بررسی کنید با چند کلیک.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="w-full lg:hidden py-3 text-center rounded-lg bg-secondary-550 text-white text-base"
      >
        مشاهده همه
      </Link>
    </div>
  );
}
