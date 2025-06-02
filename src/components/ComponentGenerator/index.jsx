'use client';

import HalfSliderComponent from '../../components/DynamicComponents/HalfSlider';
import FeaturesComponent from '../../components/DynamicComponents/Features';
import GalleryComponent from '../../components/DynamicComponents/Gallery';
import LastNewsComponent from '../../components/DynamicComponents/LastNews';
import NotificationsComponent from '../../components/DynamicComponents/Notifications';
import TwoColumnGalleryComponent from '../../components/DynamicComponents/TwoColumnGallery';
import IntroductionOfDeputyComponent from '../../components/DynamicComponents/IntroductionOfDeputy';
import UniversityStatsComponent from '../../components/DynamicComponents/UniversityStats';
import FullScreenSliderComponent from '../../components/DynamicComponents/FullSlider';
import WhyCuIrComponent from '../DynamicComponents/NewWhyCuir';
import ThreeHorizontalBoxComponent from '../DynamicComponents/ThreeHorizontalBox';
import AccountablePersonCardComponent from '../DynamicComponents/AccountablePersonCard';
import FormsAccordianComponent from '../DynamicComponents/Accordions/FormsAccordian';
import RepeadFormsAccordianComponent from '../DynamicComponents/Accordions/RepeadFormsAccordian';
import FaqAccordionComponent from '../DynamicComponents/Accordions/FaqAccordion';
import RepeadFaqsAccordionComponent from '../DynamicComponents/Accordions/RepeadFaqsAccordion';
import NestedAccordionsComponent from '../DynamicComponents/Accordions/NestedAccordions';
import RepeadNestedAccordionsComponent from '../DynamicComponents/Accordions/RepeadNestedAccordions';
import RepeadSimpleQuestionAccordianComponent from '../DynamicComponents/Accordions/SimpleQuestionAccordian';
import StatisticsComponent from '../DynamicComponents/Statiscts';
import ContactWithWeComponent from '../DynamicComponents/ContactWithWe';
import ContactWithWeHalfHeroSectionComponent from '../DynamicComponents/ContactWithWeHalfHeroSection';
import PersonalFullInfoCard from '../DynamicComponents/PersonalFullInfoCard';
import TwoColumnNewsComponent from '../DynamicComponents/AcademicPortal';
import AdminsAccordionComponent from '../DynamicComponents/Accordions/AdminsAccordion';
import AppDisplayer from '../DynamicComponents/Displayer';
import APPText from '../DynamicComponents/AppText';
import APPImage from '../DynamicComponents/AppImage';
import NewsArticleComponent from '../DynamicComponents/NewsArticlePage';
import NewsLetterSignUpComponent from '../DynamicComponents/NewsLetterSignUp';
import OverviewComponent from '../DynamicComponents/Overview';
import CustomHalfSliderComponent from '../DynamicComponents/CustomHalfSlider';
import RequestProccessSectionComponent from '../DynamicComponents/RequestProccessSection';
import BenefitSectionComponent from '../DynamicComponents/BenefitsSection';
import ContactInfoSectionComponent from '../DynamicComponents/ContatInfoSection';

export default function ComponentGenerator({ data }) {
  const generateComponent = item => {
    switch (item.component) {
      case 'HalfSlider':
        return <HalfSliderComponent data={item} />;
      case 'Features':
        return <FeaturesComponent data={item} />;
      case 'Gallery':
        return <GalleryComponent data={item} />;
      case 'LastNews':
        return <LastNewsComponent data={item} />;
      case 'Notifications':
        return <NotificationsComponent data={item} />;
      case 'TwoColumnGallery':
        return <TwoColumnGalleryComponent data={item} />;
      case 'IntroductionOfDeputy':
        return <IntroductionOfDeputyComponent data={item} />;
      case 'UniversityStats':
        return <UniversityStatsComponent data={item} />;
      case 'FullScreenSlider':
        return <FullScreenSliderComponent data={item} />;
      case 'WhyCuIrComponent':
        return <WhyCuIrComponent data={item} />;
      case 'ThreeHorizontalBoxComponent':
        return <ThreeHorizontalBoxComponent data={item} />;
      case 'AccountablePersonCardComponent':
        return <AccountablePersonCardComponent data={item} />;
      case 'FormsAccordian':
        return <FormsAccordianComponent data={item} />;
      case 'RepeadFormsAccordian':
        return <RepeadFormsAccordianComponent data={item} />;
      case 'FaqAccordion':
        return <FaqAccordionComponent data={item} />;
      case 'RepeadFaqsAccordion':
        return <RepeadFaqsAccordionComponent data={item} />;
      case 'NestedAccordions':
        return <NestedAccordionsComponent data={item} />;
      case 'RepeadNestedAccordions':
        return <RepeadNestedAccordionsComponent data={item} />;
      case 'RepeadSimpleQuestionAccordian':
        return <RepeadSimpleQuestionAccordianComponent data={item} />;
      case 'Statistics':
        return <StatisticsComponent data={item} />;
      case 'ContactWithWe':
        return <ContactWithWeComponent data={item} />;
      case 'ContactWithWeHalfHeroSection':
        return <ContactWithWeHalfHeroSectionComponent data={item} />;
      case 'PersonalFullInfoCard':
        return <PersonalFullInfoCard data={item} />;
      case 'TwoColumnNews':
        return <TwoColumnNewsComponent data={item} />;
      case 'AdminsAccordion':
        return <AdminsAccordionComponent data={item} />;
      case 'AppDisplayer':
        return <AppDisplayer data={item} />;
      case 'APPText':
        return <APPText data={item} />;
      case 'APPImage':
        return <APPImage data={item} />;
      case 'Statistics':
        return <StatisticsComponent data={item} />;
      case 'NewsArticleComponent':
        return <NewsArticleComponent data={item} />;
      case 'NewsLetterSignUpComponent':
        return <NewsLetterSignUpComponent data={item} />;
      case 'OverviewComponent':
        return <OverviewComponent data={item} />;
      case 'CustomHalfSlider':
        return <CustomHalfSliderComponent data={item} />;
      case 'RequestProccessSection':
        return <RequestProccessSectionComponent data={item} />;
      case 'BenefitSection':
        return <BenefitSectionComponent data={item} />;
      case 'ContactInfoSection':
        return <ContactInfoSectionComponent data={item} />;

      default:
        return null;
    }
  };

  return data.map(item => {
    return <div key={item.id}>{generateComponent(item)}</div>;
  });
}
