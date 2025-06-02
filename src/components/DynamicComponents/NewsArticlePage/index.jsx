import Image from 'next/image';
import { Timer, Calendar } from 'lucide-react';
import { defaultImagePath } from '../../../constants/index';
import ArticlePageEmailSignUp from './ArticlePageEmailSignUp/ArticlePageEmailSignUp';
import ArticlePageSimilarNews from './ArticlePageSimilarNews/ArticlePageSimilarNews';
import React from 'react';

const articlePageData = {
  headerZone: [
    {
      type: 'ARTICLE_FULL_HEADER',
      minutes: 8,
      title: 'بیداری اسلامی، تحولی جهانی در سایه انقلاب ایران',
      description: `ویژه برنامه دانشگاه جامع انقلاب اسلامی به مناسبت ایام الله دهه فجر و نیمه شعبان سردار
  محمد رضا نقدی: بیداری اسلامی، تحولی جهانی در سایه انقلاب ایران به گزارش روابط عمومی
  دانشگاه جامع انقلاب اسلامی، به مناسبت ایام الله دهه فجر، نیمه شعبان و آغاز ترم جدید،
  مراسمی در تاریخ سشنبه (۲۳ بهمن ماه) برگزار شد.`,
      imageUrl: defaultImagePath,
      altText: 'news image',
      publishDate: '۱۷ اردیبهشت ۱۴۰۴',
    },
  ],
  mainContentZone: [
    {
      type: 'SECTION_HEADING',
      title: 'مقدمه',
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی حاج
  محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
  گردید. سردار محمد رضا نقدی اظهار کرد:انقلاب، همه‌چیز است و دستاورد آن، آزادی و استقلال
  حاکمیت اسلامی بود که به ما رسید. ان‌شاءالله به پیروزی خواهیم رسید. خودشان مبحث
  دستاوردهای شیرین و لذت‌بخش را در بنگاه‌های اقتصادی مطرح می‌کنند و ما هم امیدواریم که به
  توفیق برسیم. پیروزی‌های درخشان امت اسلامی به دست آمده و این موعود که وعده داده شده، همه
  در انتظار او هستیم.`,
    },
    {
      type: 'IMAGE_WITH_CAPTION',
      imageUrl: defaultImagePath,
      altText: 'news image',
    },
    {
      type: 'PARAGRAPH',
      text: `وی در ادامه با اشاره به شعر خوانی حاج محمد رسولی افزودند :شعرهای زیبایی که برادرمان
  سروده‌اند، به ما یادآوری می‌کند که خداوند بارها وعده داده و عمل کرده است. وعده آمدن حضرت
  موسی (ع) نیز به بنی‌اسرائیل داده شده بود. این موضوع حتی در خواب‌های برخی از ما نیز دیده
  شده است. محققان به این ماجرا پرداخته‌اند و می‌گویند که چیزی باید بلند شود تا بر سر ما
  بیفتد. به همین دلیل، نوزادان را می‌کشتند، مثل قیام حضرت عیسی (ع) در زمان ارادتش.`,
    },
    {
      type: 'QUOTE_BLOCK',
      quoteText: `ما این موضوع را تجربه کرده‌ایم. ما یک امام غائب داشتیم که نوزده سال از مغول آمد و ظهور
  کرد و این منجی آخرالزمان ان‌شاءالله به همان ترتیب خواهد آمد. اگر می‌خواهیم در ظهور
  نقشی داشته باشیم، باید همان‌طور که ایران را برای ظهور آماده کردیم، اهتمام کنیم و در
  تبعید نیز توانایی ایجاد آمادگی در جامعه بشری برای چنین استقبالی را فراهم کنیم.`,
      attribution: 'سردار محمد رضا نقدی',
    },
    {
      type: 'PARAGRAPH',
      text: `وی ادامه داد:امروز دنیا بیدار شده و تحولی بزرگ در جهان رقم خورده که نظیر ندارد. به جز
  نهضت‌های انبیا، هیچ مثالی برای این تحول وجود ندارد. آنچه امروز در عالم در حال وقوع است،
  در قرون گذشته هرگز اتفاق نیفتاده است...`,
    },
    {
      type: 'SECTION_HEADING',
      title: 'مقدمه',
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران...`,
    },
    {
      type: 'IMAGE_WITH_CAPTION',
      imageUrl: defaultImagePath,
      altText: 'news image',
      caption: `ویژه برنامه دانشگاه جامع انقلاب اسلامی به مناسبت ایام الله دهه فجر و نیمه شعبان سردار
  محمد رضا نقدی`,
    },
    {
      type: 'SECTION_HEADING',
      title: 'مقدمه',
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی حاج
    محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
    گردید. سردار محمد رضا نقدی اظهار کرد:انقلاب، همه‌چیز است و دستاورد آن، آزادی و استقلال
    حاکمیت اسلامی بود که به ما رسید. ان‌شاءالله به پیروزی خواهیم رسید. خودشان مبحث
    دستاوردهای شیرین و لذت‌بخش را در بنگاه‌های اقتصادی مطرح می‌کنند و ما هم امیدواریم که به
    توفیق برسیم. پیروزی‌های درخشان امت اسلامی به دست آمده و این موعود که وعده داده شده، همه
    در انتظار او هستیم.`,
    },
    {
      type: 'SECTION_HEADING',
      title: 'مقدمه',
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی حاج
    محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
    گردید. سردار محمد رضا نقدی اظهار کرد:انقلاب، همه‌چیز است و دستاورد آن، آزادی و استقلال
    حاکمیت اسلامی بود که به ما رسید. ان‌شاءالله به پیروزی خواهیم رسید. خودشان مبحث
    دستاوردهای شیرین و لذت‌بخش را در بنگاه‌های اقتصادی مطرح می‌کنند و ما هم امیدواریم که به
    توفیق برسیم. پیروزی‌های درخشان امت اسلامی به دست آمده و این موعود که وعده داده شده، همه
    در انتظار او هستیم.`,
    },
    {
      type: 'QUOTE_BLOCK',
      quoteText: `ما این موضوع را تجربه کرده‌ایم. ما یک امام غائب داشتیم که نوزده سال از مغول آمد و ظهور
    کرد و این منجی آخرالزمان ان‌شاءالله به همان ترتیب خواهد آمد. اگر می‌خواهیم در ظهور
    نقشی داشته باشیم، باید همان‌طور که ایران را برای ظهور آماده کردیم، اهتمام کنیم و در
    تبعید نیز توانایی ایجاد آمادگی در جامعه بشری برای چنین استقبالی را فراهم کنیم.`,
      attribution: 'سردار محمد رضا نقدی',
    },
    {
      type: 'IMAGE_WITH_CAPTION',
      imageUrl: defaultImagePath,
      altText: 'news image',
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی حاج
    محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
    گردید. سردار محمد رضا نقدی اظهار کرد:انقلاب، همه‌چیز است و دستاورد آن، آزادی و استقلال
    حاکمیت اسلامی بود که به ما رسید. ان‌شاءالله به پیروزی خواهیم رسید. خودشان مبحث
    دستاوردهای شیرین و لذت‌بخش را در بنگاه‌های اقتصادی مطرح می‌کنند و ما هم امیدواریم که به
    توفیق برسیم. پیروزی‌های درخشان امت اسلامی به دست آمده و این موعود که وعده داده شده، همه
    در انتظار او هستیم.`,
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی حاج
    محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
    گردید. سردار محمد رضا نقدی اظهار کرد:انقلاب، همه‌چیز است و دستاورد آن، آزادی و استقلال
    حاکمیت اسلامی بود که به ما رسید. ان‌شاءالله به پیروزی خواهیم رسید. خودشان مبحث
    دستاوردهای شیرین و لذت‌بخش را در بنگاه‌های اقتصادی مطرح می‌کنند و ما هم امیدواریم که به
    توفیق برسیم. پیروزی‌های درخشان امت اسلامی به دست آمده و این موعود که وعده داده شده، همه
    در انتظار او هستیم.`,
    },
    {
      type: 'PARAGRAPH',
      text: `این مراسم با حضور سردار محمد رضا نقدی، معاون هماهنگ کننده سپاه پاسداران، و شعرخوانی حاج
    محمد رسولی، رئیس دانشگاه و مسئولین و دانشجویان در سالن شهید ابومهدی المهندس برگزار
    گردید. سردار محمد رضا نقدی اظهار کرد:انقلاب، همه‌چیز است و دستاورد آن، آزادی و استقلال
    حاکمیت اسلامی بود که به ما رسید. ان‌شاءالله به پیروزی خواهیم رسید. خودشان مبحث
    دستاوردهای شیرین و لذت‌بخش را در بنگاه‌های اقتصادی مطرح می‌کنند و ما هم امیدواریم که به
    توفیق برسیم. پیروزی‌های درخشان امت اسلامی به دست آمده و این موعود که وعده داده شده، همه
    در انتظار او هستیم.`,
    },
  ],
};

const renderContentItem = (item, index) => {
  switch (item.type) {
    case 'ARTICLE_FULL_HEADER':
      return (
        <div key={index}>
          <div className="flex flex-col gap-4">
            <div className="w-fit flex justify-center items-center gap-2 bg-neutral-50 px-2 py-1 border-neutral-200 border rounded-full">
              <p className="flex flex-row justify-center items-center gap-2 text-neutral-500 px-2 py-1 border-neutral-200 border rounded-full">
                مدت زمان مطالعه
                <Timer />
              </p>
              <p className="text-neutral-500 pl-2 py-1">{item.minutes} دقیقه</p>
            </div>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-neutral-600 text-base text-justify wrap-anywhere leading-8">
              {item.description}
            </p>
          </div>

          <div className="w-full flex flex-col justify-center gap-4">
            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src={item.imageUrl || defaultImagePath}
                alt={item.altText || 'news image'}
                className="w-full h-full lg:h-[550px] object-cover object-center aspect-[16/9]"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex flex-row gap-3 justify-end">
              <p className="flex justify-center gap-2 items-center text-sm text-secondary-950 font-medium">
                {' '}
                <Calendar />
                تاریخ انتشار
              </p>
              <p className="text-sm text-neutral-600">{item.publishDate}</p>
            </div>
          </div>
        </div>
      );

    case 'SECTION_HEADING':
      return (
        <h4 key={index} className="text-xl font-medium">
          {item.title}
        </h4>
      );

    case 'PARAGRAPH':
      return (
        <p key={index} className="text-neutral-600 text-base text-justify wrap-anywhere leading-8">
          {item.text}
        </p>
      );

    case 'IMAGE_WITH_CAPTION':
      if (item.caption) {
        return (
          <div key={index} className="w-full flex flex-col gap-2 items-center">
            <div className="w-full overflow-hidden rounded-2xl">
              <Image
                src={item.imageUrl || defaultImagePath}
                alt={item.altText || 'news image'}
                className="w-full h-full lg:h-[550px] object-cover aspect-[4/3]"
                width={200}
                height={200}
              />
            </div>
            <p className="text-justify leading-8 wrap-anywhere text-neutral-600 text-sm">
              {item.caption}
            </p>
          </div>
        );
      } else {
        return (
          <div key={index} className="w-full overflow-hidden rounded-2xl">
            <Image
              src={item.imageUrl || defaultImagePath}
              alt={item.altText || 'news image'}
              className="w-full h-full lg:h-[550px] object-cover aspect-[4/3]"
              width={200}
              height={200}
            />
          </div>
        );
      }

    case 'QUOTE_BLOCK':
      return (
        <div key={index} className="border-r-2 my-7 flex flex-col gap-8 border-secondary-550 pr-4">
          <p className="font-medium text-xl leading-8 wrap-anywhere text-justify">
            {item.quoteText}
          </p>
          {item.attribution && (
            <p className="text-neutral-600 text-base font-normal">
              <span>-- </span>
              {item.attribution}
            </p>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default function NewsArticleComponent() {
  const { headerZone = [], mainContentZone = [] } = articlePageData;

  return (
    <div className="min-h-screen bg-white px-4 lg:px-20 ">
      <div className="flex flex-col mt-8 justify-center items-center gap-4">
        {headerZone.map((item, index) => renderContentItem(item, index))}
      </div>

      <div className="w-full mt-5 grid grid-cols-1 lg:grid-cols-[1fr_375px] gap-5 lg:gap-16">
        <div className="flex flex-col gap-5 px-2">
          {mainContentZone.map((item, index) => renderContentItem(item, index))}
        </div>
        <ArticlePageEmailSignUp />
      </div>
      <ArticlePageSimilarNews />
    </div>
  );
}
