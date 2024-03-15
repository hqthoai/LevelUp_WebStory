import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainBanner.css';
import HomeBanner from '../../assets/images/logoWeb.jfif';
const MainBanner = () => {
  const bannerRef = useRef(null);

  // hold dynamic styles for the hover effect
  const [hoverStyles, setHoverStyles] = useState({ transform: 'translate3d(0, 0, 0)' });

  // handle for mouse move over the banner
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = bannerRef.current;

    // calculate the mouse position relative to the center of the banner
    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = (clientX - centerX) / 30;
    const deltaY = (clientY - centerY) / 30;

    // create a string for the translate3d property
    const translate3d = `translate3d(${deltaX}px, ${deltaY}px, 0)`;

    // update the state with the dynamic styles
    setHoverStyles({ transform: translate3d });
  };

  const handleMouseLeave = () => {
    setHoverStyles({ transform: 'translate3d(0, 0, 0)' });
  };

  const handleNavigate = () => {
    // Implement the scroll logic using react-scroll
    window.scrollTo({ top: 780, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-fit bg-[#151212]">
      <div
        ref={bannerRef}
        className="w-full lg:h-screen md:h-[700px] flex justify-center items-center md:bg-cover"
        style={{
          // backgroundImage:
          //   'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/banner_bg.jpg")',
          backgroundImage: `url(${HomeBanner})`,
          backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-white text-center font-display w-[90%]">
          <h2
            className="lg:text-[120px] md:text-[80px] leading-tight font-bold font-refault "
            style={{ ...hoverStyles, textShadow: '2px 2px 2px #C1FF00' }}
          >
            LEVEL UP STUDIO
          </h2>

          <h4
            className="text-white uppercase lg:text-2xl md:text-xl font-semibold tracking-wide ml-5 cursor-pointer"
            style={{
              textShadow: '2px 4px 2px #58595B',
            }}
            onClick={handleNavigate}
          >
            {/* We will win when we want. */}
            Gaming redefined.
          </h4>

          {/* <button className="clip-custom select-none bg-orange-500 border-0 mt-5 hover:bg-black text-white cursor-pointer inline-flex text-lg font-semibold tracking-wide leading-none mb-0 py-6 px-10 text-center uppercase relative font-oswald">
            ABOUT US {'   '}
            <FaCirclePlay className="ml-3 text-[18px]" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
