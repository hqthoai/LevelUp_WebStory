import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTopButton';

function HomePage() {
  return (
    <div className="container bg-slate-800 min-h-[100vh]">
      <ProductionCard />
      <GameComing />
      <TeamMembers/>
      <ScrollToTopButton/>
    </div>
  );
}

export default HomePage;
