import React from 'react';
import AboutUsMainBanner from '../components/MainBanner/AboutUsMainBanner.js';
import AboutUsText from '../components/AboutArea/AboutUsText.js';

const AboutUs = ({ title = 'About Us', textSize }) => {
  return (
    <div>
      <div
        className="min-h-fit w-full"
        style={{
          backgroundImage:
            'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/area_bg-scaled.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <AboutUsMainBanner title={title} textSize={textSize} />
        {title === 'About Us' ? <AboutUsText /> : <></>}
      </div>
    </div>
  );
};

export default AboutUs;
