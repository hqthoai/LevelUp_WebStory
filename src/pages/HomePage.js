import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
import MainBanner from '../components/MainBanner';
function HomePage() {
  return (
    <div className="container bg-slate-800">
      <MainBanner />
      <ProductionCard />
      <GameComing />
    </div>
  );
}

export default HomePage;
