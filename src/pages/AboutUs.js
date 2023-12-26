import React from 'react';
import AboutUsMainBanner from '../components/MainBanner/AboutUsMainBanner.js';
import OurMission from '../components/OurMission';

const AboutUs = ({ title = 'About Us' }) => {
  return (
    <div>
      <div className="bg-slate-800 min-h-[100vh] w-full">
        <AboutUsMainBanner title={title} />
        <OurMission />
      </div>
    </div>
  );
};

export default AboutUs;
