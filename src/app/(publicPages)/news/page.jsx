'use client';

import NewNotice from './components/NewNotice';
import News from './components/News';
import EventsCalender from './components/EventsCalender';
import ScienceAndCulture from './components/ScienceAndCulture';
import Media from './components/Media';
import Podcasts from './components/Podcasts';
import NewsSection from './components/NewsSection';

export default function NewsPage() {
  return (
    <div className="pl-10 pr-10 m-auto">
      <NewNotice title="جدید ترین خبر ها" />
      <NewsSection />
      <NewNotice title="اطلاعیه جدید" />
      <News />
      <EventsCalender />
      <ScienceAndCulture />
      <div className="bg-[#E9EAEB] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] p-4">
        <Media />

        <Media mediaType="img" catTitle="تصاویر" />
      </div>
      <Podcasts />
    </div>
  );
}
