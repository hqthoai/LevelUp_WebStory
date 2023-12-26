import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTopButton';
import SlideImage from '../components/SlideImage/SlideImage';

function HomePage() {
  return (
    <div className="bg-slate-800 min-h-[100vh]">
      <ProductionCard />
      <GameComing />
      <TeamMembers />
      <SlideImage />
    </div>
  );
}

export default HomePage;
