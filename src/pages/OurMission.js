import GamingDefined from '../components/GamingDefined';
import AboutUsMainBanner from '../components/MainBanner/AboutUsMainBanner';

function OurMission({ title = 'Our Mission' }) {
  return (
    <div>
      <AboutUsMainBanner title={title} />
      <GamingDefined />
    </div>
  );
}

export default OurMission;
