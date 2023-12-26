import React from 'react';
import { FaCirclePlay, FaAnglesRight } from 'react-icons/fa6';
import './MainBanner.css';

const AboutUsMainBanner = () => {
  return (
    <div className="w-full h-screen bg-[#151212]">
      {' '}
      <div className="w-full h-screen bg-[#151212]">
        <div
          className="w-full h-[65%] flex justify-center items-center "
          style={{
            backgroundImage:
              'url("https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/bg/breadcrumb_bg.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex justify-around items-center w-full">
            <div className="text-white ">
              <h2 className="text-[60px] leading-tighter  leading-none font-bold mb-6 font-oswald font-refault font-sans">
                ABOUT US
              </h2>
              <button className="select-none bg-orange-400 border-0 mt-1 hover:bg-black text-white leading-tighter  cursor-pointer inline-flex text-normal font-bold tracking-wide leading-none mb-0 py-5 px-6 text-center uppercase   relative font-oswald">
                HOME {'   '}
                <FaAnglesRight className="ml-3 text-lg mr-3" />
                {'   '} ABOUT US
              </button>
            </div>
            <div className="breadcrumb-img-two text-center">
              <img
                src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/breadcrumb_img04.png"
                alt="img"
              />
            </div>
            <div
              class="breadcrumb-shape shape-1 wow slideInLeft"
              data-wow-delay=".2s"
              data-wow-duration="2.5s"
              style={{
                visibility: 'visible',
                animationDuration: '2.5s',
                animationDelay: '0.2s',
                animationName: 'slideInLeft',
              }}
            >
              <img
                src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/bg/breadcrumb_shape01.png"
                alt="img"
              ></img>
            </div>
            <div
              class="breadcrumb-shape shape-2 wow slideInRight"
              data-wow-delay=".2s"
              data-wow-duration="2.5s"
              style={{
                visibility: 'visible',
                animationDuration: '2.5s',
                animationDelay: '0.2s',
                animationName: 'slideInRight',
              }}
            >
              <img
                src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/bg/breadcrumb_shape02.png"
                alt="img"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMainBanner;
