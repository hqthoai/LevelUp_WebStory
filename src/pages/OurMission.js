import AboutUsText from '../components/AboutArea/AboutUsText';
import GamingDefined from '../components/GamingDefined';
import OurMissionText from '../components/OurMissionText/OurMissionText';
import AboutUsMainBanner from '../components/MainBanner/AboutUsMainBanner'
function OurMission({ title = 'Our Mission' }) {
  return (
    <div>
      <AboutUsMainBanner title={title} />
      {/* <GamingDefined /> */}
      <OurMissionText/>
    </div>
  );
}

export default OurMission;
