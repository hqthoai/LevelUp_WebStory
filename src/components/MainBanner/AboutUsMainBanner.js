import React from 'react';
import { FaCirclePlay, FaAnglesRight } from 'react-icons/fa6';
import './MainBanner.css';
import 'animate.css';

const AboutUsMainBanner = ({ title }) => {
  return (
    // <div className="w-full h-screen bg-[#151212]">
    // {' '}
    <div className="w-full h-[550px] bg-[#151212]">
      <div
        className="w-full h-[550px] flex justify-center items-center relative"
        style={{
          backgroundImage:
            'url("https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/bg/breadcrumb_bg.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-around items-center w-full ">
          <div className="text-white mb-[100px] ">
            <h2 className="text-[60px] leading-tighter  leading-none font-bold mb-6 font-oswald font-refault font-sans">
              {/* ABOUT US */}
              {title}
            </h2>
            <button className=" text-[12px]  select-none bg-[#ff8503] border-0 mt-1 hover:bg-black text-white leading-tighter  cursor-pointer inline-flex  font-bold tracking-wide leading-none mb-0 py-5 px-3 text-center uppercase  relative font-oswald">
              HOME {'   '}
              <FaAnglesRight className="ml-3 text-lg mr-3 mt-[-3px]" />
              {'   '} {title}
            </button>
          </div>
          <div className="breadcrumb-img-two text-center mt-[-100px]">
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/breadcrumb_img04.png"
              alt="img"
            />
          </div>

          <div
            className="absolute left-0 bottom-0 shape-1 wow slideInLeft visible animate__animated animate__slideInLeft "
            style={{
              zIndex: 1,
              visibility: 'visible',
              animationDuration: '2.5s',
              animationDelay: '0.2s',
              animationName: 'slideInLeft',
            }}
          >
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/bg/breadcrumb_shape01.png"
              alt="img"
              style={{ zIndex: 2 }}
              className="w-[280px] h-[100px] "
            />
          </div>

          <div
            className="absolute right-0 bottom-0 shape-1 wow slideInRight visible animate__animated animate__slideInRight "
            style={{
              zIndex: 1,
              visibility: 'visible',
              animationDuration: '2.5s',
              animationDelay: '0.2s',
              animationName: 'slideInRight',
            }}
          >
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/bg/breadcrumb_shape02.png"
              alt="img"
              className="w-[280px] h-[100px] "
            ></img>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutUsMainBanner;
