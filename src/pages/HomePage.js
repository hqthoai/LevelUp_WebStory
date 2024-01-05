import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTopButton';
import SlideImage from '../components/SlideImage/SlideImage';
import MainBanner from '../components/MainBanner';
import MailBox from '../components/MailBox';

function HomePage() {
  return (
    <div
      className="min-h-[100vh] w-full"
      style={{
        backgroundImage:
          'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/area_bg-scaled.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <MainBanner />
      <ProductionCard />
      {/* <GameComing /> */}
      <TeamMembers />
      <SlideImage />
      <MailBox />
    </div>
  );
}

export default HomePage;
