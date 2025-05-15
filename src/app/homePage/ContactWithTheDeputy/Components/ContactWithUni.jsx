import ContactCard from './ContactCards';
import { Dot, Phone } from 'lucide-react';
import Map from './map.png';
import Image from 'next/image';

const ContactWithDeputyData = {
  title: 'تماس با معاونت',
  items: [
    {
      title: 'مرکز تلفن دانشگاه',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Dot />,
    },
    {
      title: 'دبیرخانه دفتر ریاست دانشگاه',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Dot />,
    },
    {
      title: 'ساعات کاری',
      desc: 'شنبه تا چهارشنبه، ۸:۰۰ تا ۱۶:۰۰',
      icon: <Dot />,
    },
    {
      title: 'صندوق پستی',
      desc: '۱۱۲۲۳۳۴۴۵۵',
      icon: <Dot />,
    },
    {
      title: 'آدرس دانشگاه',
      desc: 'تهران، میدان سپاه، خیابان ولیعصر(عج)، دانشگاه جامع انقلاب اسلامی',
      icon: <Dot />,
    },
  ],
};

const ContactWithDeputiesData = {
  title: 'تماس با معاونت‌ها',
  items: [
    { title: 'معاونت دانشجویی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'معاونت پژوهش و فناوری', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    {
      title: 'معاونت فرهنگی و اجتماعی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'معاونت آموزشی و تحصیلات تکمیلی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    { title: 'معاونت اداری و مالی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'معاونت فناوری', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'امور بین ‌الملل', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
  ],
};

const ContactWithFacultiesData = {
  title: 'تماس با دانشکده‌ها',
  items: [
    {
      title: 'دانشکده مقاومت مردمی انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دانشکده فرهنگ و هنر انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دانشکده علوم انسانی و اسلامی انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دانشکده سبک زندگی اسلامی ایرانی انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دانشکده فناوری‌های نوین انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دانشکده علوم بنیادی انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دانشکده بهداشت و سلامت انقلاب اسلامی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
  ],
};

const ContactWithSubdivisionsData = {
  title: 'زیرمجموعه‌های دانشگاه',
  items: [
    { title: 'خدمات آموزشی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'تحصیلات تکمیلی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'دانش‌آموختگان', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'پذیرش و نظام وظیفه', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'کتابخانه مرکزی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'ارتباط با صنعت', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'صندوق رفاه دانشجویی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    {
      title: 'آموزش‌های آزاد و الکترونیکی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'مركز رشد پارک علم و فناورى',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    {
      title: 'دفتر کار و ارتباطات دانشجویی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
    { title: 'مرکز خدمات آزمایشگاهی', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    {
      title: 'امور ورزشی و تربیت بدنی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone />,
    },
  ],
};

const ContactWithPublicRelationsData = {
  title: 'روابط عمومی',
  items: [
    {
      title: 'مرکز روابط عمومی',
      desc: '۰۲۱-۰۰۰۰-۰۰۰۰',
      icon: <Phone size={20} className="text-grey-700" />,
    },
    { title: 'دورنگار', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
    { title: 'پست الکترونیک', desc: '۰۲۱-۰۰۰۰-۰۰۰۰', icon: <Phone /> },
  ],
};

const Datas = [
  ContactWithPublicRelationsData,
  ContactWithDeputyData,
  ContactWithDeputiesData,
  ContactWithFacultiesData,
  ContactWithSubdivisionsData,
];

export default function ContactWithUni() {
  return (
    <div className="w-full h-full  px-5 lg:p-20 ">
      <div className="w-full h-full grid lg:grid-cols-2 gap-4  lg:gap-6">
        {Datas.map((data, index) => (
          <ContactCard key={index} items={data.items} title={data.title} />
        ))}
        <Image className="w-full object-contain " src={Map} alt={'map'} />
      </div>
    </div>
  );
}
// <div className="w-full h-full flex flex-wrap gap-4 lg:gap-6">
//     {Datas.map((data, index) => (
//         <div key={index} className="flex-1 basis-full lg:basis-[calc(50%-12px)] max-w-full">
//             <ContactCard items={data.items} title={data.title} />
//         </div>
//     ))}
//     <Image className="w-full object-contain " src={Map} alt={"map"} />
// </div>
