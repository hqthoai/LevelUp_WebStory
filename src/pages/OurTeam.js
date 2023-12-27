import React from 'react';
import AboutUs from './AboutUs';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import MemOurTeam from '../components/MemOurTeam/MemOurTeam';
function OurTeam() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/area_bg-scaled.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <AboutUs title="Our Team" />
      <MemOurTeam />
    </div>
  );
}

export default OurTeam;
