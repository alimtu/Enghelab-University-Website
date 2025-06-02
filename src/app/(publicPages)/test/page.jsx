import CustomHalfSliderComponent from '../../../components/DynamicComponents/CustomHalfSlider';
import { defaultImagePath } from '../../../constants';

export default function TestPage() {
  const data = {
    title: 'دفتر جذب هیأت علمی \n به جمع پیشگامان علم و نوآوری بپیوندید',
    description:
      'دانشگاه جامع انقلاب اسلامی به دنبال جذب استعدادهای برجسته‌ای است که با تعهد به آموزش، پژوهش و خدمت به جامعه، در تحقق اهداف علمی و فرهنگی انقلاب اسلامی سهیم شوند.',

    imagePath: defaultImagePath,
    hasButtons: true,
    hasSearchBox: true,
    buttonText: 'جذب استعدادها',
    buttonText2: 'بیشتر بدانید',
    searchPlaceholder: 'جستجو',
    searchPlaceholder2: 'انتخاب دانشکده',
    searchPlaceholder3: 'سطح شغلی',
    searchPlaceholder4: 'انتخاب دانشکده',
  };
  return (
    <div>
      <CustomHalfSliderComponent data={data} />
    </div>
  );
}
