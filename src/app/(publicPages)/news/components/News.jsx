import NewsCard from './NewsCard';

export const cardsData = [
  {
    category: 'اخبار دانشگاه',
    image: 'https://uploadkon.ir/uploads/148129_25placeholder-9-.svg',
    text1:
      'رشته های دانشگاه جامع انقلاب اسلامی در مقطع دکتری 1404 در دفترچه راهنمای انتخاب رشته آزمون مقطع دکتری سال 1404',
    text2:
      'نسخه آزمایشی سامانه جامع پژوهش و فناوری دانشگاه جامع انقلاب اسلامی در حال راه اندازی است',
    date: '10:18 امروز ',
  },
  {
    category: 'اخبار جهان',
    image: 'https://uploadkon.ir/uploads/148129_25placeholder-9-.svg',
    text1: 'رییس جمهوری امریکا پس از پایان سفرش به ریاض وارد دوحه قطر شد',
    text2: 'محور مذاکرات روسیه و اوکراین در استانبول چه خواهد بود؟',
    date: '10:18 امروز ',
  },

  {
    category: 'پر بازدیدترین ها',
    image: 'https://uploadkon.ir/uploads/148129_25placeholder-9-.svg',
    text1: 'واکنش عراقچی به سخنان ترامپ علیه ایران در ریاض',
    text2: 'تذکرات شفاهی درباره گران شدن برق و اب و تعطیلی کارخانه ها',
    date: '10:18 امروز ',
  },

  {
    category: 'سایر اخبار مهم',
    image: 'https://uploadkon.ir/uploads/148129_25placeholder-9-.svg',
    text1: 'انهدام سرشبکه های خارج نشین قاچاق سوخت در هرمزگان',
    text2: 'مهاجراتی: تغییر ساعت مدارس با همین روال پیش خواهد رفت',
    date: '10:18 امروز ',
  },
];

const News = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 w-full gap-3 mt-5">
      {cardsData.map(card => (
        <NewsCard
          key={card.category}
          category={card.category}
          image={card.image}
          text1={card.text1}
          text2={card.text2}
          date={card.date}
        />
      ))}
    </div>

    <div className="border border-gray-200 " />
  </>
);

export default News;
