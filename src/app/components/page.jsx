import React from 'react';

import WhyCuIrSection from '../../components/DynamicComponents/NewWhyCuir';
import TwoColumnGalleryComponent from '../../components/DynamicComponents/TwoColumnGallery';
import backImage from '../../../public/Images/FooterIcons/BgResearch.jpg';
import GalleryComponent from '../../components/DynamicComponents/Gallery';
import IntroductionOfDeputyComponent from '../../components/DynamicComponents/IntroductionOfDeputy';
import NotificationsComponent from '../../components/DynamicComponents/Notifications';
import LastNewsComponent from '../../components/DynamicComponents/LastNews';
import FeaturesComponent from '../../components/DynamicComponents/Features';
import FullScreenSliderComponent from '../../components/DynamicComponents/FullSlider';
import UniversityStatsComponent from '../../components/DynamicComponents/UniversityStats';
import AccordionItemsComponent from '../../components/DynamicComponents/AccardionItems';
import AcademicPortalComponent from '../../components/DynamicComponents/AcademicPortal';
import { CustomAccordionComponent } from '@/components/DynamicComponents/AccardionItems/LittleAccardion';
import { defaultImagePath } from '../../constants';
import NewsLetterSignUpComponent from '../../components/DynamicComponents/NewsLetterSignUp';
import FormsAccordianComponent from '../../components/DynamicComponents/Accordions/FormsAccordian';
import RepeadFormsAccordianComponent from '../../components/DynamicComponents/Accordions/RepeadFormsAccordian';
import { Separator } from '@/components/ui/separator';
import FaqAccordionComponent from '../../components/DynamicComponents/Accordions/FaqAccordion';
import RepeadFaqsAccordionComponent from '../../components/DynamicComponents/Accordions/RepeadFaqsAccordion';
import NestedAccordionsComponent from '../../components/DynamicComponents/Accordions/NestedAccordions';
import RepeadNestedAccordionsComponent from '../../components/DynamicComponents/Accordions/RepeadNestedAccordions';
import RepeadSimpleQuestionAccordianComponent from '../../components/DynamicComponents/Accordions/SimpleQuestionAccordian';
import StatisticsComponent from '../../components/DynamicComponents/Statiscts';
import ContactWithWeHalfHeroSectionComponent from '../../components/DynamicComponents/ContactWithWeHalfHeroSection';
import ContactWithWeComponent from '../../components/DynamicComponents/ContactWithWe';
import NewsArticlePage from '../../components/DynamicComponents/NewsArticlePage';
import InfoCardsComponents from '../../components/DynamicComponents/PersonalFullInfoCard';
import AdminsAccordionComponent from '../../components/DynamicComponents/Accordions/AdminsAccordion';
import BenefitsSection from '../../components/DynamicComponents/BenefitsSection';
import ContactInfoSection from '../../components/DynamicComponents/ContactInfoSection';
import RequestProcessSection from '../../components/DynamicComponents/RequestProccessSection';

export default function HomePage() {
  const introductionOfWelfareServicesData = {
    title: 'معرفی خدمات رفاهی دانشگاه جامع انقلاب اسلامی',
    description: '',
    className: 'mt-8 lg:mt-16',
    backgroundImagePath: backImage,
    items: [
      {
        img: defaultImagePath,
        desc: ' علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی، خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی لذت ببرند. علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی، خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی لذت ببرند.علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی، خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی لذت ببرند.',
      },
      {
        img: defaultImagePath,
        desc: 'دانشگاه جامع انقلاب اسلامی با هدف ارتقای کیفیت زندگی دانشجویان و کارکنان، خدمات رفاهی متنوع و جامعی ارائه می‌دهد. این خدمات شامل امکاناتی مانند خوابگاه‌های دانشجویی مجهز، سالن‌های غذاخوری با منوی متنوع و بهداشتی، و مراکز بهداشتی درمانی است که به صورت شبانه‌روزی آماده ارائه خدمات به دانشجویان هستند. همچنین، کتابخانه‌های مدرن، سالن‌های مطالعه و فضاهای ورزشی مجهز نیز در دسترس دانشجویان قرار دارد تا بتوانند در کنار تحصیل، از اوقات فراغت خود به بهترین شکل استفاده کنند.',
      },
      {
        img: defaultImagePath,
        desc: 'دانشگاه جامع انقلاب اسلامی همچنین به دنبال ایجاد محیطی امن و پویا برای دانشجویان است. خدمات ویژه‌ای مانند کلاس‌های زبان ، مشاوره‌های اختصاصی برای دانشجویان و برنامه‌های فرهنگی برای آشنایی با فرهنگ ایران در نظر گرفته شده است. این دانشگاه با تأکید بر اهمیت رفاه و آسایش دانشجویان، همواره در تلاش است تا با به‌روزرسانی و توسعه خدمات خود، محیطی مناسب برای رشد علمی و شخصی افراد فراهم کند.',
      },
      {
        img: defaultImagePath,
        desc: 'دانشگاه جامع انقلاب اسلامی همچنین به دنبال ایجاد محیطی امن و پویا برای دانشجویان است. خدمات ویژه‌ای مانند کلاس‌های زبان ، مشاوره‌های اختصاصی برای دانشجویان و برنامه‌های فرهنگی برای آشنایی با فرهنگ ایران در نظر گرفته شده است. این دانشگاه با تأکید بر اهمیت رفاه و آسایش دانشجویان، همواره در تلاش است تا با به‌روزرسانی و توسعه خدمات خود، محیطی مناسب برای رشد علمی و شخصی افراد فراهم کند.',
      },
      {
        img: defaultImagePath,
        desc: 'علاوه بر این، دانشگاه برای رفاه بیشتر دانشجویان، خدمات مشاوره‌ای و روانشناختی نیز ارائه می‌دهد. تیم‌های متخصص مشاوره در زمینه‌های تحصیلی، خانوادگی و روانی آماده کمک به دانشجویان هستند تا بتوانند چالش‌های مختلف را پشت سر بگذارند. همچنین، برنامه‌های فرهنگی و تفریحی متنوعی مانند اردوهای دانشجویی، کارگاه‌های آموزشی و مسابقات ورزشی به طور منظم برگزار می‌شود تا دانشجویان بتوانند در کنار تحصیل، از زندگی دانشجویی لذت ببرند.',
      },
      {
        img: defaultImagePath,
        desc: 'دانشگاه جامع انقلاب اسلامی با هدف ارتقای کیفیت زندگی دانشجویان و کارکنان، خدمات رفاهی متنوع و جامعی ارائه می‌دهد. این خدمات شامل امکاناتی مانند خوابگاه‌های دانشجویی مجهز، سالن‌های غذاخوری با منوی متنوع و بهداشتی، و مراکز بهداشتی درمانی است که به صورت شبانه‌روزی آماده ارائه خدمات به دانشجویان هستند. همچنین، کتابخانه‌های مدرن، سالن‌های مطالعه و فضاهای ورزشی مجهز نیز در دسترس دانشجویان قرار دارد تا بتوانند در کنار تحصیل، از اوقات فراغت خود به بهترین شکل استفاده کنند.',
      },
      {
        img: defaultImagePath,
        desc: 'دانشگاه جامع انقلاب اسلامی همچنین به دنبال ایجاد محیطی امن و پویا برای دانشجویان است. خدمات ویژه‌ای مانند کلاس‌های زبان ، مشاوره‌های اختصاصی برای دانشجویان و برنامه‌های فرهنگی برای آشنایی با فرهنگ ایران در نظر گرفته شده است. این دانشگاه با تأکید بر اهمیت رفاه و آسایش دانشجویان، همواره در تلاش است تا با به‌روزرسانی و توسعه خدمات خود، محیطی مناسب برای رشد علمی و شخصی افراد فراهم کند.',
      },
      {
        img: defaultImagePath,
        desc: 'دانشگاه جامع انقلاب اسلامی همچنین به دنبال ایجاد محیطی امن و پویا برای دانشجویان است. خدمات ویژه‌ای مانند کلاس‌های زبان ، مشاوره‌های اختصاصی برای دانشجویان و برنامه‌های فرهنگی برای آشنایی با فرهنگ ایران در نظر گرفته شده است. این دانشگاه با تأکید بر اهمیت رفاه و آسایش دانشجویان، همواره در تلاش است تا با به‌روزرسانی و توسعه خدمات خود، محیطی مناسب برای رشد علمی و شخصی افراد فراهم کند.',
      },
    ],
  };
  const whyCuIrData = {
    title: 'دانشگاه جامع انقلاب اسلامی',
    description:
      '   دانشگاه جامع انقلاب اسلامی با تکیه بر ارزش‌های اسلامی و نوآوری، به تربیت نیروهای متخصص و تمدن‌ساز برای آینده ایران متعهد است. ',
    items: [
      {
        id: 1,
        title: 'تمدن‌ساز',
        content:
          'دانشگاه با شعار "تمدن‌ساز"، با ترکیب دانش روز و ارزش‌های اسلامی، پایه‌های تمدن نوین اسلامی را بنیان می‌نهد و با تربیت انسان‌های آگاه، به ساختن آینده‌ای متعالی برای ایران و جهان اسلام کمک می‌کند.',
      },
      {
        id: 2,
        title: 'تمدن‌ساز',
        content:
          'دانشگاه با شعار "تمدن‌ساز"، با ترکیب دانش روز و ارزش‌های اسلامی، پایه‌های تمدن نوین اسلامی را بنیان می‌نهد و با تربیت انسان‌های آگاه، به ساختن آینده‌ای متعالی برای ایران و جهان اسلام کمک می‌کند.',
      },
      {
        id: 3,
        title: 'نوآور',
        content:
          'دانشگاه جامع انقلاب اسلامی با شعار "نوآور"، از آخرین دستاوردهای علمی و فناوری بهره می‌گیرد تا فضایی پویا و خلاق برای دانشجویان ایجاد کند و با حمایت از ایده‌های نو، به پرورش نسل آینده متفکران و مخترعان کمک کند.',
      },
    ],
    videoPath: '',
    videoImagePath: defaultImagePath,
    className: 'mt-8 lg:mt-16',
  };
  const introductionOfDeputyData = {
    title: 'معرفی معاونت',
    className: 'mt-8 lg:mt-16',
    description:
      'معاونت دانشجویی دانشگاه جامع انقلاب اسلامی، با هدف ایجاد محیطی پویا و حمایت‌گر برای دانشجویان، خدمات متنوعی در حوزه‌های رفاهی، فرهنگی، بهداشتی و مشاوره‌ای ارائه می‌دهد. این معاونت با تأمین امکاناتی مانند خوابگاه‌های مجهز، تغذیه سالم، بیمه درمانی و برنامه‌های فرهنگی، تلاش می‌کند تا دوران تحصیل دانشجویان را به تجربه‌ای ارزشمند تبدیل کند. حمایت از تشکل‌های دانشجویی، برگزاری اردوها، مسابقات و مراسم‌های مذهبی، از جمله فعالیت‌هایی است که به رشد شخصیتی و اجتماعی دانشجویان کمک می‌کند. همچنین، خدمات مشاوره‌ای در زمینه‌های تحصیلی، شغلی و روان‌شناختی به دانشجویان ارائه می‌شود تا در مواجهه با چالش‌ها راهنمایی لازم را دریافت کنند. معاونت دانشجویی با نگاهی آینده‌نگر و مبتنی بر ارزش‌های اسلامی، در تلاش است تا دانشجویان را به عنوان انسان‌هایی مسئولیت‌پذیر و تأثیرگذار در جامعه تربیت کند. دانشجویان می‌توانند برای دریافت خدمات و اطلاعات بیشتر به دفتر معاونت دانشجویی مراجعه یا از طریق سامانه‌های ارتباطی دانشگاه با این معاونت در تماس باشند.',
    video: defaultImagePath,
    imagePath: defaultImagePath,
  };
  const galleryData = {
    sections: [
      { id: 1, name: 'زندگی در دانشگاه' },
      { id: 2, name: 'مصاحبه جذب هیئت علمی' },
      { id: 3, name: 'بسیج دانشجویی' },
      { id: 4, name: 'ثبت نام دانشجویان' },
    ],
    items: [
      {
        img: defaultImagePath,
        title: 'ثبت نام دانشجو مقطه کارشناسی ارشد 1403-1404',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'جذب هیئت علمی',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'ثبت نام دانشجو مقطه کارشناسی ارشد 1403-1404',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'جذب هیئت علمی',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'ثبت نام دانشجو مقطه کارشناسی ارشد 1403-1404',
        date: '1402/12/01',
      },
      {
        img: defaultImagePath,
        title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
        date: '1402/12/01',
      },
    ],
    title: 'فیلم و عکس',
    description: '',
    className: 'mt-8 lg:mt-16',
    buttonTitle: 'مشاهده تصاویر و ویدیوها',
  };
  const notificationsData = {
    title: 'اطلاعیه ها',
    buttonTitle: 'مشاهده همه',
    className: 'mt-8 lg:mt-16',
    seeAllLink: '/news',
    items: [
      {
        id: 1,
        pic: defaultImagePath,
        title:
          '۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه',
        description:
          'فراخوان پذیرش بدون آزمون استعدادهای درخشان در مقطع ارشد 1404-1405 دانشگاه جامع انقلاب اسلامی\n',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 1,
      },
      {
        pic: defaultImagePath,
        title:
          'فرآیند ثبت نام دانشجویان در گفتگو با مدیر تحصیلات تکمیلی دانشگاه جامع انقلاب اسلامی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، به نقل از سرکار خانم دکتر عزیزپوریان مدیر تحصیلات تکمیلی این دانشگاه در گفتگو با خبرنگار دانشگاه مطرح کردند',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 2,
      },
      {
        pic: defaultImagePath,
        title: 'ثبت نام دانشجویان مقطع کارشناسی ارشد 1404-1403',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی ، ثبت نام دانشجویان مقطع کارشناسی ارشد این دانشگاه آغاز شد ',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 3,
      },
      {
        pic: defaultImagePath,
        title: 'مراسم گرامیداشت روز دانشجو در دانشگاه جامع انقلاب اسلامی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی،مراسم گرامیداشت روز دانشجو در دانشگاه جامع انقلاب اسلامی با حضور جناب آقای دکتر سعید عزیزی، کارشناس...',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 4,
      },
      {
        pic: defaultImagePath,
        title:
          '۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه',
        description:
          'فراخوان پذیرش بدون آزمون استعدادهای درخشان در مقطع ارشد 1404-1405 دانشگاه جامع انقلاب اسلامی',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 5,
      },
      {
        pic: defaultImagePath,
        title:
          'فرآیند ثبت نام دانشجویان در گفتگو با مدیر تحصیلات تکمیلی دانشگاه جامع انقلاب اسلامی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، به نقل از سرکار خانم دکتر عزیزپوریان مدیر تحصیلات تکمیلی این دانشگاه در گفتگو با خبرنگار دانشگاه مطرح کردند',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 6,
      },
      {
        pic: defaultImagePath,
        title: 'ثبت نام دانشجویان مقطع کارشناسی ارشد 1404-1403',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی ، ثبت نام دانشجویان مقطع کارشناسی ارشد این دانشگاه آغاز شد ',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 7,
      },
      {
        pic: defaultImagePath,
        title: 'مراسم گرامیداشت روز دانشجو در دانشگاه جامع انقلاب اسلامی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی،مراسم گرامیداشت روز دانشجو در دانشگاه جامع انقلاب اسلامی با حضور جناب آقای دکتر سعید عزیزی، کارشناس...',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 8,
      },
      {
        pic: defaultImagePath,
        title:
          '۱۵ رشته جدید مقطع کارشناسی ارشد دانشگاه جامع انقلاب اسلامی در اصلاحیه سازمان سنجش + دفترچه',
        description: 'فراخوان پذیرش بد جامع انقلاب اسلامی',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 9,
      },
      {
        pic: defaultImagePath,
        title:
          'فرآیند ثبت نام دانشجویان در گفتگو با مدیر تحصیلات تکمیلی دانشگاه جامع انقلاب اسلامی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، به نقل از سرکار خانم دکتر عزیزپوریان مدیر تحصیلات تکمیلی این دانشگاه در گفتگو با خبرنگار دانشگاه مطرح کردند',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 10,
      },
      {
        pic: defaultImagePath,
        title: 'ثبت نام دانشجویان مقطع کارشناسی ارشد 1404-1403',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی ، ثبت نام دانشجویان مقطع کارشناسی ارشد این دانشگاه آغاز شد ',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 11,
      },
      {
        pic: defaultImagePath,
        title: 'مراسم گرامیداشت روز دانشجو در دانشگاه جامع انقلاب اسلامی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی،مراسم گرامیداشت روز دانشجو در دانشگاه جامع انقلاب اسلامی با حضور جناب آقای دکتر سعید عزیزی، کارشناس...',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        id: 12,
      },
    ],
  };
  const lastNewsData = {
    type: 'horizontal',
    className: 'mt-8 lg:mt-16',
    header: {
      title: 'آخرین اخبار دانشگاه',
      description: 'برای اطلاع از آخرین اخبار به پرتال خبری دانشگاه مراجعه کنید.',
      portalLink: '#',
    },
    news: [
      {
        type: 'featured',
        title:
          'رونمایی کتاب «کتاب شناسی اختصاصی غزه» به اهتمام دکتر سیدحجت الحق حسینی استاد دانشگاه صنعتی خواجه نصیرالدین طوسی',
        description:
          'به گزارش روابط عمومی دانشگاه جامع انقلاب اسلامی، رونمایی کتاب «کتاب شناسی اختصاصی غزه» به اهتمام دکتر سیدحجت الحق حسینی استاد دانشگاه صنعتی خواجه نصیرالدین طوسی در تالار همایش های کوثر برگزار گردید.',
        imageSrc: defaultImagePath,
        imageAlt: 'کتاب شناسی اختصاصی غزه',
        id: 13,
      },
      {
        type: 'regular',
        title: 'دانشجویان دانشگاه تراز انقلاب باید پژوهشگر باشند.',
        description:
          'دکتر قیدانی رئیس دانشگاه جامع انقلاب اسلامی در شورای پژوهشی دانشگاه مطرح کرد...',
        imageSrc: defaultImagePath,
        imageAlt: 'دانشجویان دانشگاه',
        id: 14,
      },
      {
        type: 'regular',
        title: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
        description: 'نشست رسانه ای تهران در مرکز همایش های بین المللی دانشگاه جامع انقلاب اسلامی',
        imageSrc: defaultImagePath,
        imageAlt: 'نشست رسانه ای',
        id: 15,
      },
      {
        type: 'regular',
        title: 'مصاحبه علمی و تخصصی جذب اعضای هیات علمی دانشگاه جامع انقلاب اسلامی',
        description: 'مصاحبه علمی و تخصصی جذب اعضای هیات علمی دانشگاه جامع انقلاب اسلامی',
        imageSrc: defaultImagePath,
        imageAlt: 'مصاحبه علمی',
        id: 16,
      },
    ],
  };
  const UniversityStatsData = {
    title: '',
    description: '',
    className: 'mt-8 lg:mt-16',
    stats: [
      { img: defaultImagePath, text: '4 دانشکده' },
      { img: defaultImagePath, text: '100 فارغ التحصیل' },
      { img: defaultImagePath, text: '120 مقاله چاپ شده' },
      { img: defaultImagePath, text: '40 رشته آموزشی' },
      { img: defaultImagePath, text: '476 دانشجوی ارشد و دکتری' },
      { img: defaultImagePath, text: '50 عضو هیئت علمی' },
    ],
  };
  const featuresData = {
    title: '',
    className: '',
    items: [
      {
        name: 'سامانه آموزش بهستان',
        image: defaultImagePath,
        hasDownload: true,
      },
      {
        name: 'سامانه کتابخانه',
        image: defaultImagePath,
      },
      {
        name: 'صندوق رفاه دانشجویی',
        image: defaultImagePath,
        hasDownload: true,
      },
      {
        name: 'سامانه تغذیه',
        image: defaultImagePath,
      },
      {
        name: 'تقویم تحصیلی',
        image: defaultImagePath,
      },
      {
        name: 'سامانه آموزش بهستان',
        image: defaultImagePath,
        hasDownload: true,
      },
      {
        name: 'سامانه کتابخانه',
        image: defaultImagePath,
        hasDownload: true,
      },
      {
        name: 'صندوق رفاه دانشجویی',
        image: defaultImagePath,
      },
      {
        name: 'سامانه تغذیه',
        image: defaultImagePath,
        hasDownload: true,
      },
      {
        name: 'تقویم تحصیلی',
        image: defaultImagePath,
      },
    ],
  };
  const accardionSection2 = {
    title: '',
    description: '',
    items: [
      {
        id: '1',
        title: 'آیین نامه‌های دانشجویی',
        items: [
          {
            id: '1',
            title: 'قوانین خوابگاه‌ها (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/dorm-rules.pdf',
          },
          {
            id: '2',
            title: 'مقررات انضباطی دانشجویان (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/student-regulations.pdf',
          },
          {
            id: '3',
            title: 'آیین‌نامه تغذیه (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/nutrition-guidelines.pdf',
          },
          {
            id: '4',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities.pdf',
          },
          {
            id: '5',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities-2.pdf',
          },
        ],
      },
      {
        id: '2',
        title: 'آیین نامه‌های دانشجویی 2',
        items: [
          {
            id: '1',
            title: 'قوانین خوابگاه‌ها (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/dorm-rules.pdf',
          },
          {
            id: '2',
            title: 'مقررات انضباطی دانشجویان (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/student-regulations.pdf',
          },
          {
            id: '3',
            title: 'آیین‌نامه تغذیه (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/nutrition-guidelines.pdf',
          },
          {
            id: '4',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities.pdf',
          },
          {
            id: '5',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities-2.pdf',
          },
        ],
      },
      {
        id: '3',
        title: 'آیین نامه‌های دانشجویی',
        items: [
          {
            id: '1',
            title: 'قوانین خوابگاه‌ها (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/dorm-rules.pdf',
          },
          {
            id: '2',
            title: 'مقررات انضباطی دانشجویان (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/student-regulations.pdf',
          },
          {
            id: '3',
            title: 'آیین‌نامه تغذیه (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/nutrition-guidelines.pdf',
          },
          {
            id: '4',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities.pdf',
          },
          {
            id: '5',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities-2.pdf',
          },
        ],
      },
      {
        id: '4',
        title: 'آیین نامه‌های دانشجویی 2',
        items: [
          {
            id: '1',
            title: 'قوانین خوابگاه‌ها (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/dorm-rules.pdf',
          },
          {
            id: '2',
            title: 'مقررات انضباطی دانشجویان (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/student-regulations.pdf',
          },
          {
            id: '3',
            title: 'آیین‌نامه تغذیه (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/nutrition-guidelines.pdf',
          },
          {
            id: '4',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities.pdf',
          },
          {
            id: '5',
            title: 'آیین‌نامه استفاده از امکانات رفاهی (PDF)',
            date: 'آخرین بروزرسانی: ۲۳ مهر ۱۴۰۳',
            fileUrl: '/documents/welfare-facilities-2.pdf',
          },
        ],
      },
    ],
  };
  const academicData = {
    rightItemTitle: 'کنفرانس ها و همایش ها',
    leftItemTitle: 'فصلنامه ها',
    className: 'mt-8 lg:mt-16',
    items: [
      {
        title: 'فصلنامه جامعه شناسی انقلاب اسلامی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصل نامه مطالعات راهبردی بسیج',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصل نامه مطالعات علوم انسانی و اسلامی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصل نامه پژوهش های نوین در علوم جغرافیایی اسلامی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصل نامه روانشناسی و علوم تربیتی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصلنامه مدیریت جامع بحران‌ها',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصلنامه مطالعات تمدن نوین اسلامی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصلنامه مطالعات منطقه‌ای و جهان اسلام',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصلنامه مطالعات هوش مصنوعی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصلنامه پژوهش‌های نانوتکنولوژی',
        url: '#',
        position: 'left',
      },
      {
        title: 'فصلنامه علوم شناختی',
        url: '#',
        position: 'left',
      },

      {
        title: 'فراخوان ارسال مقاله، پذیرش و نقد کتاب',
        description:
          'دانشگاه جامع امام حسین علیه السلام در راستای پیشبرد مطالعات، پژوهش، تحلیل و نقد علمی، مقالات، پژوهش‌ها و کتب علمی را پذیرش می‌کند.',
        image: '/Images/drghadiani.png',
        position: 'right',
      },
      {
        title: 'فراخوان برگزاری نشست‌های علمی بین المللی',
        description: 'شبکه جامعی بین المللی شهید مطهری و همایش صلح جهانی اسلام',
        image: '/Images/drghadiani.png',
        position: 'right',
      },
      {
        title: 'دومین همایش ملی فناوری های شناختی، هنر و ادبیات فارسی',
        description:
          'دومین همایش ملی فناوری های شناختی، هنر و ادبیات فارسی با هدف گسترش و ترویج علوم شناختی در حوزه هنر و ادبیات فارسی برگزار می شود.',
        image: '/Images/drghadiani.png',
        position: 'right',
      },
    ],
  };
  const faqItems = {
    className: 'w-full lg:px-20 px-4 rounded-lg mt-8 lg:mt-16',
    items: [
      {
        question: 'سوال: چگونه میتوانم اشتراک حاصل را پیدا کنم؟',
        answer: 'پاسخ: از ابزار محاسبه یا دستورات زیر استفاده کنید.',
      },
      {
        question: 'سوال: آیا این اسناد بروز هستند؟',
        answer:
          'پاسخ: بله، اسناد مرتباً بروزرسانی میشوند. تاریخ آخرین بروزرسانی در هر سند ذکر شده است.',
      },
      {
        question: 'سوال: در صورت ابهام در قوانین چه کنم؟',
        answer: 'پاسخ: با ۹ رقم موجود از طریق روشهای تماس ارتباط برقرار کنید.',
      },
      {
        question: 'سوال: چگونه میتوانم اشتراک حاصل را پیدا کنم؟',
        answer: 'پاسخ: از ابزار محاسبه یا دستورات زیر استفاده کنید.',
      },
      {
        question: 'سوال: آیا این اسناد بروز هستند؟',
        answer:
          'پاسخ: بله، اسناد مرتباً بروزرسانی میشوند. تاریخ آخرین بروزرسانی در هر سند ذکر شده است.',
      },
      {
        question: 'سوال: در صورت ابهام در قوانین چه کنم؟',
        answer: 'پاسخ: با ۹ رقم موجود از طریق روشهای تماس ارتباط برقرار کنید.',
      },
    ],
  };
  const NewsLetterSignUpData = {
    className: 'lg mt-8 lg:mt-16',
    image: '/Images/NewsLetterSignUp/img.png',
    alt: 'University App',
    title: 'از اخبار دانشگاه جا نمون.',
    description:
      'با عضویت در خبرنامه دانشگاه با گزارش‌های آسان اندازه‌گیری کنید چه چیزی مهم است. شما می‌توانید داده‌ها را فیلتر کنید، صادر کنید و عمیق‌تر بررسی کنید با چند کلیک.',
    label: 'ایمیل',
    InputType: 'email',
    InputName: 'email',
    placeholder: 'ایمیل خود را وارد کنید',
    btnText: 'عضویت',
    btnType: 'submit',
  };

  const formsAccordianData = {
    title: 'فرم ها',
    description: 'فرم ها',
    items: [
      {
        id: '1',
        title: 'فرایند درخواست برگزاری کرسی‌ها',
        lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
        downloadUrl: '/forms/process-request.pdf',
      },
      {
        id: '2',
        title: 'آیین‌نامه کمیته دستگاهی برگزاری کرسی‌های نظریه‌پردازی، نقد و مناظره',
        lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
        downloadUrl: '/forms/committee-regulations.pdf',
      },
      {
        id: '3',
        title: 'طرحنامه ویژه ی کرسی های نظریه پردازی',
        lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
        downloadUrl: '/forms/theory-proposal.pdf',
      },
    ],
  };

  const repeadFormsAccordianData = {
    title: '',
    description: '',
    items: [
      {
        id: 'repeat-forms-1',
        title: 'فرم ها',
        description: 'فرم ها',
        items: [
          {
            id: '1',
            title: 'فرایند درخواست برگزاری کرسی‌ها',
            lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
            downloadUrl: '/forms/process-request.pdf',
          },
          {
            id: '2',
            title: 'آیین‌نامه کمیته دستگاهی برگزاری کرسی‌های نظریه‌پردازی، نقد و مناظره',
            lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
            downloadUrl: '/forms/committee-regulations.pdf',
          },
          {
            id: '3',
            title: 'طرحنامه ویژه ی کرسی های نظریه پردازی',
            lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
            downloadUrl: '/forms/theory-proposal.pdf',
          },
        ],
      },
      {
        id: 'repeat-forms-2',
        title: 'پژوهش ها',
        description: 'فرم ها',
        items: [
          {
            id: '1',
            title: 'فرایند درخواست برگزاری کرسی‌ها',
            lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
            downloadUrl: '/forms/process-request.pdf',
          },
          {
            id: '2',
            title: 'آیین‌نامه کمیته دستگاهی برگزاری کرسی‌های نظریه‌پردازی، نقد و مناظره',
            lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
            downloadUrl: '/forms/committee-regulations.pdf',
          },
          {
            id: '3',
            title: 'طرحنامه ویژه ی کرسی های نظریه پردازی',
            lastUpdated: 'آخرین بروزرسانی: ۲۳ اسفند ۱۴۰۳',
            downloadUrl: '/forms/theory-proposal.pdf',
          },
        ],
      },
    ],
  };

  const faqAccordianData = {
    title: 'سوالات متداول',
    items: [
      {
        id: 'item-1',
        question: 'چگونه می‌توانم آیتم‌های خاصی را پیدا کنم؟',
        answer: 'از نوار جستجو یا دسته‌بندی‌ها استفاده کنید.',
      },
      {
        id: 'item-2',
        question: 'آیا این اسناد به‌روز هستند؟',
        answer: 'بله. اسناد مرتب به‌روزرسانی می‌شوند. تاریخ آخرین تغییر در هر سند ذکر شده است.',
      },
      {
        id: 'item-3',
        question: 'در صورت ابهام در قوانین چه کنم؟',
        answer: 'با دفتر مربوطه از طریق بخش تماس ارتباط برقرار کنید.',
      },
    ],
  };

  const repeadFaqsAccordianData = {
    title: 'سوالات متداول',
    items: [
      {
        id: 'repeat-faqs-1',
        title: 'سوالات متداول',
        items: [
          {
            id: 'item-1',
            question: 'چگونه می‌توانم آیتم‌های خاصی را پیدا کنم؟',
            answer: 'از نوار جستجو یا دسته‌بندی‌ها استفاده کنید.',
          },
          {
            id: 'item-2',
            question: 'آیا این اسناد به‌روز هستند؟',
            answer: 'بله. اسناد مرتب به‌روزرسانی می‌شوند. تاریخ آخرین تغییر در هر سند ذکر شده است.',
          },
          {
            id: 'item-3',
            question: 'در صورت ابهام در قوانین چه کنم؟',
            answer: 'با دفتر مربوطه از طریق بخش تماس ارتباط برقرار کنید.',
          },
        ],
      },
      {
        id: 'repeat-faqs-2',
        title: 'سوالات متداول 2',
        items: [
          {
            id: 'item-1',
            question: 'چگونه می‌توانم آیتم‌های خاصی را پیدا کنم؟',
            answer: 'از نوار جستجو یا دسته‌بندی‌ها استفاده کنید.',
          },
          {
            id: 'item-2',
            question: 'آیا این اسناد به‌روز هستند؟',
            answer: 'بله. اسناد مرتب به‌روزرسانی می‌شوند. تاریخ آخرین تغییر در هر سند ذکر شده است.',
          },
          {
            id: 'item-3',
            question: 'در صورت ابهام در قوانین چه کنم؟',
            answer: 'با دفتر مربوطه از طریق بخش تماس ارتباط برقرار کنید.',
          },
        ],
      },
    ],
  };

  const nestedAccordionData = {
    title: 'نام کارگروه ها',
    description: 'متن تستی توضیحات',
    items: [
      {
        id: 'cultural-social',
        title: 'فرهنگی اجتماعی',
        content: <div>محتوای مربوط به بخش فرهنگی اجتماعی در اینجا قرار می‌گیرد.</div>,
      },
      {
        id: 'educational',
        title: 'آموزشی',
        content: 'محتوای مربوط به بخش آموزشی در اینجا قرار می‌گیرد.',
      },
      {
        id: 'research',
        title: 'پژوهشی',
        content: 'محتوای مربوط به بخش پژوهشی در اینجا قرار می‌گیرد.',
      },
    ],
  };

  const repeadNestedAccordionData = {
    title: 'نام کارگروه ها',
    description: 'متن تستی توضیحات',
    items: [
      {
        id: 'repeat-nested-accordion-1',
        title: 'نام کارگروه ها',
        description: 'متن تستی توضیحات',
        items: [
          {
            id: 'cultural-social',
            title: 'فرهنگی اجتماعی',
            content: <div>محتوای مربوط به بخش فرهنگی اجتماعی در اینجا قرار می‌گیرد.</div>,
          },
          {
            id: 'educational',
            title: 'آموزشی',
            content: 'محتوای مربوط به بخش آموزشی در اینجا قرار می‌گیرد.',
          },
          {
            id: 'research',
            title: 'پژوهشی',
            content: 'محتوای مربوط به بخش پژوهشی در اینجا قرار می‌گیرد.',
          },
        ],
      },
      {
        id: 'repeat-nested-accordion-2',
        title: 'نام کارگروه ها ۲',
        description: 'متن تستی توضیحات ۲',
        items: [
          {
            id: 'cultural-social-2',
            title: 'فرهنگی اجتماعی',
            content: <div>محتوای مربوط به بخش فرهنگی اجتماعی در اینجا قرار می‌گیرد.</div>,
          },
          {
            id: 'educational',
            title: 'آموزشی',
            content: 'محتوای مربوط به بخش آموزشی در اینجا قرار می‌گیرد.',
          },
          {
            id: 'research',
            title: 'پژوهشی',
            content: 'محتوای مربوط به بخش پژوهشی در اینجا قرار می‌گیرد.',
          },
        ],
      },
    ],
  };

  const repeadSimpleQuestionAccordianData = {
    title: 'سوالات متداول',
    description: 'متن تستی توضیحات',
    items: [
      {
        id: 'educational',
        title: 'آموزشی',
        content: 'محتوای مربوط به بخش آموزشی در اینجا قرار می‌گیرد.',
      },
      {
        id: 'research',
        title: 'پژوهشی',
        content: 'محتوای مربوط به بخش پژوهشی در اینجا قرار می‌گیرد.',
      },
    ],
  };

  const statisticsData = {
    badge: "ویژگی ها'",
    title: 'تجزیه‌وتحلیل‌های زیبا برای رشد هوشمندانه‌تر',
    description:
      'تجزیه‌وتحلیل‌های قدرتمند و خودکار برای کمک به شما در تبدیل، جذب و حفظ کاربران بیشتر. مورد اعتماد بیش از ۴,۰۰۰ استارتاپ.',
    backgroundImage: '/Images/confrancehall.jpg',
    items: [
      {
        count: '۱۰ هزار',
        title: 'دانشجوی فعال',
        description: 'در حال تحصیل در دانشگاه جامع انقلاب اسلامی',
      },
      {
        count: '۱۰ هزار',
        title: 'دانشجوی فعال',
        description: 'در حال تحصیل در دانشگاه جامع انقلاب اسلامی',
      },
      {
        count: '۱۰ هزار',
        title: 'دانشجوی فعال',
        description: 'در حال تحصیل در دانشگاه جامع انقلاب اسلامی',
      },
    ],
  };
  const heroSectionData = {
    title: 'ارتباط با معاونت',
    className: '',
    backgroundImage:
      'https://s33.picofile.com/d/8484496634/60941f20-7f45-4804-b7a3-7df64bed45d4/placeholder.svg',
  };

  const contactSections = {
    className: ' mt-8 lg:mt-16',
    defaultImg:
      'https://s33.picofile.com/d/8484496634/60941f20-7f45-4804-b7a3-7df64bed45d4/placeholder.svg',
    items: [
      {
        title: 'روابط عمومی',
        items: [
          { title: 'مرکز روابط عمومی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دورنگار', desc: 'example@gmail.com' },
          { title: 'پست الکترونیک', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
        ],
      },
      {
        title: 'تماس با معاونت',
        items: [
          { title: 'مرکز تلفن دانشگاه', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دبیرخانه دفتر ریاست دانشگاه', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'ساعات کاری', desc: 'شنبه تا چهارشنبه، ۸:۰۰ تا ۱۶:۰۰' },
          { title: 'صندوق پستی', desc: '۱۱۲۲۳۳۴۴۵۵' },
          {
            title: 'آدرس دانشگاه',
            desc: 'تهران، میدان سپاه، خیابان ولیعصر(عج)، دانشگاه جامع انقلاب اسلامی',
          },
        ],
      },
      {
        title: 'تماس با معاونت‌ها',
        items: [
          { title: 'معاونت دانشجویی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'معاونت پژوهش و فناوری', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'معاونت فرهنگی و اجتماعی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'معاونت آموزشی و تحصیلات تکمیلی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'معاونت اداری و مالی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'معاونت فناوری', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'امور بین ‌الملل', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
        ],
      },
      {
        title: 'تماس با دانشکده‌ها',
        items: [
          { title: 'دانشکده مقاومت مردمی انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانشکده فرهنگ و هنر انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانشکده علوم انسانی و اسلامی انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانشکده سبک زندگی اسلامی ایرانی انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانشکده فناوری‌های نوین انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانشکده علوم بنیادی انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانشکده بهداشت و سلامت انقلاب اسلامی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
        ],
      },
      {
        title: 'زیرمجموعه‌های دانشگاه',
        items: [
          { title: 'خدمات آموزشی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'تحصیلات تکمیلی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دانش‌آموختگان', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'پذیرش و نظام وظیفه', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'کتابخانه مرکزی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'ارتباط با صنعت', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'صندوق رفاه دانشجویی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'آموزش‌های آزاد و الکترونیکی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'مركز رشد پارک علم و فناورى', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'دفتر کار و ارتباطات دانشجویی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'مرکز خدمات آزمایشگاهی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
          { title: 'امور ورزشی و تربیت بدنی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰' },
        ],
      },
    ],
  };

  const fullScreenSliderData = {
    slides: [
      {
        image: defaultImagePath,
        title: 'Slide 1 Title',
        description: 'Slide 1 Description',
      },
      {
        image: defaultImagePath,
        title: 'Slide 2 Title',
        description: 'Slide 2 Description',
      },
    ],
  };
  const InfoCardsData = {
    imageSrc: defaultImagePath,
    className: '',
    name: 'دکتر کاوه قدمی',
    title: 'معاون آموزشی دانشگاه',
    resumeButtonText: 'مشاهده رزومه کامل',
    resumeLink: '#',
    biography: {
      label: 'بیوگرافی:',
      text: 'دکتر قدمی، دارای دکتری آموزش عالی از دانشگاه تهران و بیش از 20 سال تجربه در حوزه آموزش و پژوهش است. وی از سال 1402 عهده‌دار معاونت آموزش دانشگاه شده و بر ارتقای کیفیت تدریس و پژوهش تأکید دارد',
    },
    officeAddress: {
      label: 'آدرس دفتر:',
      text: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
    },
    message: {
      label: 'پیام:',
      text: '"به جامعه دانشگاهی خوش آمدید! ما در معاونت آموزش متعهد به فراهم کردن بهترین فرصت‌ها برای رشد علمی و حرفه‌ای شما هستیم."',
    },
    email: {
      label: 'آدرس پست الکترونیک:',
      value: 'ghadami@cuir.ac.ir',
    },
    phone: {
      label: 'شماره تماس دفتر:',
      value: '۰۲۱-۴۵۶۷۸۹۰',
    },
  };

  const AdminAccordionData = {
    title: 'مدیریت ادمین ها',
    items: [
      {
        id: 1,
        title: 'مدیران',
        rootData: {
          id: 1,
          name: 'دکتر خسروی',
          pic: defaultImagePath,
          description: 'معاون دانشجویی و فرهنگی',
          socialLink: 'https://www.google.com',
          phone: '09123456789',
          email: 'admin@gmail.com',
          address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
          bio: 'مدیر عامل',
          level: 0,
          isAdmin: true,
        },
        children: [
          {
            id: 1,
            title: 'دانشجویی',
            children: [
              {
                id: 1,
                name: 'ندافیان',
                pic: defaultImagePath,
                description: 'مدیر تحصیلات تکمیلی و دانش‌ آموختگی',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 1,
                isAdmin: true,
              },
              {
                id: 2,
                name: 'محمود علم‌الهدی',
                pic: defaultImagePath,
                description: 'مدیر برنامه‌ریزی آموزشی و درسی',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 2,
                isAdmin: false,
              },
              {
                id: 3,
                name: 'عزیزیان پور',
                pic: defaultImagePath,
                description: 'مدیر امور آموزش',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 2,
                isAdmin: false,
              },
              {
                id: 4,
                name: 'ولی خانجمالی',
                pic: defaultImagePath,
                description: 'مدیر اداری و پشتیبانی',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 2,
                isAdmin: false,
              },
            ],
          },
          {
            id: '2_1',
            title: 'فرهنگی',
            children: [
              {
                id: '2_1_1',
                name: 'نفیسه سادات طبایی',
                pic: defaultImagePath,
                description: 'مدیر امور اساتید و کلاسها',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 1,
                isAdmin: true,
              },
              {
                id: '2_1_2',
                name: 'پریسا هداوند',
                pic: defaultImagePath,
                description: 'کارشناس امور اساتید',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 2,
                isAdmin: false,
              },
              {
                id: '2_1_3',
                name: 'خانم فریده اقبالی',
                pic: defaultImagePath,
                description: 'کارشناس امور کلاسها طبقه سوم',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر عامل',
                level: 2,
                isAdmin: false,
              },
              {
                id: '2_1_4',
                name: 'خانم محدثه بلباس',
                pic: defaultImagePath,
                description: 'کارشناس امور کلاسها طبقه سوم',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'کارشناس امور کلاسها طبقه چهارم',
                level: 2,
                isAdmin: false,
              },
            ],
          },
          {
            id: '2_2',
            title: 'فرهنگی',
            children: [
              {
                id: '2_2_1',
                name: 'فیروزالماسی فر',
                pic: defaultImagePath,
                description: 'مدیر امور اساتید و کلاسها',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر دفتر هیأت علمی',
                level: 1,
                isAdmin: true,
              },
              {
                id: '2_2_2',
                name: 'حمید ناصری',
                pic: defaultImagePath,
                description: 'کارشناس امور اساتید',
                socialLink: 'https://www.google.com',
                phone: '09123456789',
                email: 'admin@gmail.com',
                address: 'ساختمان شمالی- طبقه ۵ام- اتاق ۵۰۲',
                bio: 'مدیر جذب هیأت علمی',
                level: 2,
                isAdmin: false,
              },
            ],
          },
        ],
      },
    ],
  };

  const requestProcessData = {
    title: 'فرایند درخواست',
    subtitle:
      'ما فرایند درخواست را ساده و شفاف طراحی کرده‌ایم تا بتوانید به راحتی مدارک خود را ارسال کنید. مراحل زیر را دنبال کنید:',
    items: [
      {
        id: 1,
        title: 'انتخاب موقعیت:',
        description: 'موقعیت مورد نظر خود را از فهرست پلا انتخاب کنید.',
      },
      {
        id: 2,
        title: 'تهیه مدارک:',
        description:
          'رزومه، نامه انگیزشی، مدارک تحصیلی و هر مدرک دیگری که در نتیجه‌ات موقعیت ذکر شده است را آماده کنید.',
      },
      {
        id: 3,
        title: 'ارسال آنلاین:',
        description: 'از طریق پرتال درخواست آنلاین، مدارک خود را بارگذاری کنید.',
      },
      {
        id: 4,
        title: 'پیگیری:',
        description: 'پس از ارسال، وضعیت درخواست خود را از طریق ایمیل یا پرتال بررسی کنید.',
      },
    ],
    note: 'نکته مهم: لطفاً پیش از ارسال، از تکمیل بودن مدارک اطمینان حاصل کنید. درخواست‌های ناقص بررسی نخواهد شد.',
    image: {
      src: defaultImagePath,
      alt: 'درخواست آنلاین',
    },
  };
  // data/contactInfoData.ts

  const contactInfoData = {
    title: 'اطلاعات تماس',
    description:
      'برای هرگونه سوال یا نیاز به راهنمایی، با دفتر جذب هیات علمی تماس بگیرید. ما در کنار شما هستیم تا فرآیند درخواست را به بهترین شکل طی کنید.',
    image: {
      src: defaultImagePath,
      alt: 'تماس با ما',
    },
    items: [
      {
        icon: 'mail',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        title: 'آدرس پست الکترونیک:',
        content: 'faculty.recruitment@cuir.ac.ir',
        dir: 'ltr',
        color: 'text-blue-600',
      },
      {
        icon: 'phone',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        title: 'تلفن تماس:',
        content: '021-XXXX-XXXX',
        dir: 'ltr',
      },
      {
        icon: 'map',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        title: 'آدرس:',
        content: 'تهران، میدان سپاه، خیابان ولیعصر(عج)، دانشگاه جامع انقلاب اسلامی',
      },
      {
        icon: 'clock',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        title: 'ساعات کاری:',
        content: 'شنبه تا چهارشنبه، ۸:۰۰ تا ۱۶:۰۰',
      },
    ],
  };

  const benefitsData = {
    title: 'مزایای همکاری با ما',
    description:
      'پیوستن به هیات علمی دانشگاه جامع انقلاب اسلامی فرصتی است برای فعالیت در محیطی پویا و نوآور که در آن آموزش و پژوهش در خدمت پیشرفت جامعه قرار دارد. ما به اعضای هیات علمی خود ارزش می‌دهیم و امکانات زیر را ارائه می‌دهیم:',
    image: {
      src: defaultImagePath,
      alt: 'همکاری تیمی',
    },
    items: [
      'حقوق و مزایای رقابتی',
      'بودجه و حمایت از پروژه‌های پژوهشی',
      'فرصت‌های توسعه حرفه‌ای (کارگاه‌ها، کنفرانس‌ها و دوره‌های آموزشی)',
      'محیط کاری مبتنی بر همکاری و نوآوری',
      'دسترسی به امکانات پیشرفته آزمایشگاهی و کتابخانه‌ای',
    ],
  };

  return (
    <div className="h-full flex flex-col">
      <FullScreenSliderComponent data={fullScreenSliderData} />
      <FeaturesComponent data={featuresData} />
      <LastNewsComponent data={lastNewsData} />
      <WhyCuIrSection data={whyCuIrData} />
      <UniversityStatsComponent data={UniversityStatsData} />
      <NotificationsComponent data={notificationsData} />
      <TwoColumnGalleryComponent data={introductionOfWelfareServicesData} />
      <IntroductionOfDeputyComponent data={introductionOfDeputyData} />
      <GalleryComponent data={galleryData} />
      <AccordionItemsComponent data={accardionSection2} />
      <AcademicPortalComponent data={academicData} />
      <CustomAccordionComponent data={faqItems} />
      <NewsLetterSignUpComponent data={NewsLetterSignUpData} />
      <ContactWithWeHalfHeroSectionComponent data={heroSectionData} />
      <ContactWithWeComponent data={contactSections} />
      <InfoCardsComponents data={InfoCardsData} />

      <div className="flex flex-col my-24 w-full lg:w-2/3 mx-auto gap-12">
        <FormsAccordianComponent data={formsAccordianData} />

        <Separator className="w-full" />

        <RepeadFormsAccordianComponent data={repeadFormsAccordianData} />

        <Separator className="w-full" />

        <FaqAccordionComponent data={faqAccordianData} />

        <Separator className="w-full" />

        <RepeadFaqsAccordionComponent data={repeadFaqsAccordianData} />
        <Separator className="w-full" />

        <NestedAccordionsComponent data={nestedAccordionData} />
        <Separator className="w-full" />

        <RepeadNestedAccordionsComponent data={repeadNestedAccordionData} />

        <Separator className="w-full" />

        <RepeadSimpleQuestionAccordianComponent data={repeadSimpleQuestionAccordianData} />

        <Separator className="w-full" />
      </div>

      <StatisticsComponent data={statisticsData} />
      <NewsArticlePage />
      <AdminsAccordionComponent data={AdminAccordionData} />
      <BenefitsSection data={benefitsData} />
      <ContactInfoSection data={contactInfoData} />
      <RequestProcessSection data={requestProcessData} />
    </div>
  );
}
