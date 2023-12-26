import React from 'react';
import AboutUsMainBanner from '../components/MainBanner/AboutUsMainBanner.js';
import AboutUsText from '../components/AboutArea/AboutUsText.js';

const AboutUs = ({ title = 'About Us' }) => {
  return (
    <div>
      <div className="bg-slate-800 min-h-[100vh] w-full">
        <AboutUsMainBanner title={title} />
        <AboutUsText />
      </div>
    </div>
  );
};

export default AboutUs;
