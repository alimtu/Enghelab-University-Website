import { NewsGrid } from './components/news-grid';
import { NewsPagination } from './components/news-pagination';
import HalfSliderComponent from '@/components/DynamicComponents/HalfSlider';
import { defaultImagePath } from '../../../constants';

export default function ArchivePage() {
  const data = {
    title: 'آرشیو خبرها',
    className: 'gap-16',
    slides: [
      {
        image: defaultImagePath,
        title: 'گالری تصاویر و ویدیو ها',
        description: 'Slide 1 Description',
      },
      {
        image: defaultImagePath,
        title: 'گالری تصاویر و ویدیو ها ۲',
        description: 'Slide 2 Description',
      },
    ],
  };

  const newsItems = [
    {
      id: 1,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 2,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 3,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 4,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 5,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 6,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 7,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 8,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 9,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 10,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 11,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
    {
      id: 12,
      title: 'جلسه شورای اسلامی شهر یزد',
      pic: defaultImagePath,
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
      date: '۱۴۰۱-۱۴۰۴',
    },
  ];

  return (
    <div className={`h-full flex flex-col ${data.className}`}>
      <HalfSliderComponent data={data} />

      <div className="px-8 lg:px-20">
        <div className="px-4 flex flex-col gap-8">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{data.title}</h1>
          </div>
          <NewsGrid data={newsItems} />
          <div className="mb-3">
            <NewsPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
