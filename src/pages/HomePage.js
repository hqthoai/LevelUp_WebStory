import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTopButton';
import SlideImage from '../components/SlideImage/SlideImage';
import MainBanner from '../components/MainBanner';
import MailBox from '../components/MailBox';

function HomePage() {
  return (
    <div className="bg-slate-800 min-h-[100vh] w-full">
      <MainBanner />
      <ProductionCard />
      <GameComing />
      <TeamMembers />
      <SlideImage />
      <MailBox />
    </div>
  );
}

export default HomePage;
