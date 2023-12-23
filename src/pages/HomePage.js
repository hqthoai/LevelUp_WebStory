import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
function HomePage() {
  return (
    <div className="container bg-slate-800">
      <ProductionCard />
      <GameComing />
    </div>
  );
}

export default HomePage;
