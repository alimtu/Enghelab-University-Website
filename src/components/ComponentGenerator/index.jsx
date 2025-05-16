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

      default:
        return null;
    }
  };

  return data.map(item => {
    return <div key={item.id}>{generateComponent(item)}</div>;
  });
}
