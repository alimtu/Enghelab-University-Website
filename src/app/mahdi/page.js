'use client';
// import { redirect } from 'next/navigation';
import LastNews from './Component/LastNews';
import WhyCuir from './Component/WhyCuir';
import Uniinonelook from './Component/uniinonelook';
import Gallery from './Component/Gallery';
const dummyNews = [
  {
    pic: require('../../../public/Images/Hero.png'),
    pic2: require('../../../public/Images/Hero.png'),
    pic3: require('../../../public/Images/Hero.png'),
  },
];

export default function Home() {
  // redirect('/mahdi/fa');
  return (
    <>
      <div>
        <LastNews newstitle={dummyNews} />
        <WhyCuir />
        <Uniinonelook />
        <Gallery />
      </div>
    </>
  );
}

// 'use client';
// import { useTranslations } from 'next-intl';
//
// export default function MahdiHome() {
//     const t = useTranslations();
//
//     return (
//         <div className="p-10 text-center">
//             <h1 className="text-3xl font-bold">{t('title')}</h1>
//             <p className="mt-4">{t('description')}</p>
//         </div>
//     );
// }
