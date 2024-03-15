import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './NewSlideImage.scss';

import ActivisionBlizzard from '../../assets/images/Activision-logo.png';
import RobloxGlobal from '../../assets/images/Roblox.png';
import GiantyVN from '../../assets/images/GiantyVN.png';
import RollingAnt from '../../assets/images/RollingAnt.png';
import S8XTPN from '../../assets/images/s8x-tpn-logo.png';
import JungVonMattAg from '../../assets/images/2560px-JvM_Logo.svg.png';
import CasperDash from '../../assets/images/CasperDash.png';
import Capcom from '../../assets/images/Capcom-logo.png';
import LightLeft from '../../assets/images/lightLeft.png';
import LightRight from '../../assets/images/lightRight.png';

const slides = [
  {
    id: 4,
    gameImageUrl: RollingAnt,
    gameUrl: 'https://rollingant.com/',
    gameName: 'Rolling ant',
  },
  {
    id: 1,
    gameImageUrl: ActivisionBlizzard,
    gameUrl: 'https://www.activisionblizzard.com/',
    gameName: 'Activision Blizzard',
  },
  {
    id: 3,
    gameImageUrl: GiantyVN,
    gameUrl: 'https://gianty.com.vn/vi/',
    gameName: 'Gianty VN',
  },
  {
    id: 2,
    gameImageUrl: RobloxGlobal,
    gameUrl: 'https://www.roblox.com/login',
    gameName: 'Roblox Global',
  },

  {
    id: 5,
    gameImageUrl: S8XTPN,
    gameUrl: 'https://studio8fx.com/',
    gameName: '8fx studio',
  },

  {
    id: 7,
    gameImageUrl: CasperDash,
    gameUrl: 'https://casperdash.io/',
    gameName: 'Casper Dash',
  },
  {
    id: 6,
    gameImageUrl: JungVonMattAg,
    gameUrl: 'https://www.jvm.com/',
    gameName: 'JVM Agency',
  },
  {
    id: 8,
    gameImageUrl: Capcom,
    gameUrl: 'https://www.capcom.com/',
    gameName: 'Capcom',
  },
];

var settings = {
  // autoplay: true,
  className: 'center',
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 2,
        centerMode: true,
      },
    },
    // {
    //   breakpoint: 320,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerMode: false,
    //   },
    // },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = '';
  sliderProject = slides.map((item, i) => <Project item={item} key={i} />);
  return (
    <div className="flex-0 w-2/3">
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>

      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className="rounded-[50%] left-[40%] top-[110%] "
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className="rounded-[50%] left-[60%] top-[110%]"
        >
          <ArrowForwardIosIcon />
        </button>
      </Buttons>
      {/* <div className="">
        <img
          src={LightLeft}
          alt=""
          className="light-left md:h-[100%] absolute -rotate-[45deg] md:top-[10%] md:left-[20%]"
        />
        <img
          src={LightRight}
          alt=""
          className="light-right md:h-[100%$]  absolute rotate-[45deg] md:top-[0%] md:right-[20%]"
        />
      </div> */}
    </div>
  );
};

export default SliderComp;

const Buttons = styled.div`
  z-index: 100;
  button {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #ff8503;
    cursor: pointer;
    color: #fff;
    border: none;
    position: absolute;
  }
  img {
    position: absolute;
    z-index: 2;
  }
`;
