import { GalleryGrid } from './components/gallery-grid';
import { GalleryPagination } from './components/gallery-pagination';
import HalfSliderComponent from '@/components/DynamicComponents/HalfSlider';
import { defaultImagePath } from '../../../constants';

export default function GalleryPage() {
  const data = {
    title: 'گالری تصاویر و ویدیو ها',
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

  const galleryItems = [
    {
      id: 1,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شوری اسلامی شهر یزد',
    },
    {
      id: 2,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 3,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 4,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 5,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 6,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 7,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 8,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
    {
      id: 9,
      title: 'جلسه شورای اسلامی شهر یزد',
      subtitle: 'سال ۱۴۰۱-۱۴۰۴',
      description: 'برگزاری جلسه شورای اسلامی شهر یزد',
    },
  ];

  return (
    <div className={`h-full flex flex-col ${data.className}`}>
      <HalfSliderComponent data={data} />

      <div className="px-8 lg:px-20">
        <div className="px-4 flex flex-col gap-8">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              گالری تصاویر و ویدیو ها
            </h1>
          </div>
          <GalleryGrid data={galleryItems} />
          <div className="mb-3">
            <GalleryPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
