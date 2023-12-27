import React from 'react';
import './MainBanner.css';
import { FaCirclePlay } from 'react-icons/fa6';
import { useForm, Controller } from 'react-hook-form';

const MainBanner = () => {
  return (
    <div className="w-full h-fit bg-[#151212]">
      <div
        className="w-full h-screen flex justify-center items-center "
        style={{
          backgroundImage:
            'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/banner_bg.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white text-center">
          <h2 className="text-[120px] leading-loose font-bold font-refault">LEVEL UP STUDIO</h2>

          <h4 className="text-white uppercase text-2xl font-semibold tracking-wide ml-5 font-oswald ">
            We will win when we want.
          </h4>
          <button className=" clip-custom select-none bg-orange-500 border-0 mt-5  items-center hover:bg-black text-white cursor-pointer inline-flex text-lg font-semibold tracking-wide leading-none mb-0 py-6 px-10 text-center uppercase   relative font-oswald">
            ABOUT US {'   '}
            <FaCirclePlay className="ml-3 text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
