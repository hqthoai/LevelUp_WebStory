import ProductionCard from '../components/ProductionCard/ProductionCard';
import GameComing from '../components/GameComming/GameComing';
import TeamMembers from '../components/TeamMembers/TeamMembers';
function HomePage() {
  return (
    <div className="container bg-slate-800">
      <ProductionCard />
      <GameComing />
      <TeamMembers/>
    </div>
  );
}

export default HomePage;
