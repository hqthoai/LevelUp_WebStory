import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import images
import ActivisionBlizzard from '../../assets/images/Activision-logo.png';
import RobloxGlobal from '../../assets/images/Roblox.png';
import GiantyVN from '../../assets/images/GiantyVN.png';
import RollingAnt from '../../assets/images/RollingAnt.png';
import S8XTPN from '../../assets/images/s8x-tpn-logo.png';

import JungVonMattAg from '../../assets/images/2560px-JvM_Logo.svg.png';
import CasperDash from '../../assets/images/CasperDash.png';
import Capcom from '../../assets/images/Capcom-logo.png';
import './SlideImage.module.scss';

import LightLeft from '../../assets/images/lightLeft.png';
import LightRight from '../../assets/images/lightRight.png';
import NextImage from '../../assets/images/next.png';
import PreviousImage from '../../assets/images/previous.png';

// version - 2
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const slides = [
  {
    id: 1,
    gameImageUrl: ActivisionBlizzard,
    gameUrl: 'https://www.activisionblizzard.com/',
    gameName: 'Activision Blizzard',
  },
  {
    id: 2,
    gameImageUrl: RobloxGlobal,
    gameUrl: 'https://www.roblox.com/login',
    gameName: 'Roblox Global',
  },
  {
    id: 3,
    gameImageUrl: GiantyVN,
    gameUrl: 'https://gianty.com.vn/vi/',
    gameName: 'Gianty VN',
  },
  {
    id: 4,

    gameImageUrl: RollingAnt,
    gameUrl: 'https://rollingant.com/',
    gameName: 'Rolling ant',
  },
  {
    id: 5,

    gameImageUrl: S8XTPN,
    gameUrl: 'https://studio8fx.com/',
    gameName: '8fx studio',
  },

  {
    id: 6,
    gameImageUrl: JungVonMattAg,
    gameUrl: 'https://www.jvm.com/',
    gameName: 'JVM Agency',
  },
  {
    id: 7,
    gameImageUrl: CasperDash,
    gameUrl: 'https://casperdash.io/',
    gameName: 'Casper Dash',
  },
  {
    id: 8,
    gameImageUrl: Capcom,
    gameUrl: 'https://www.capcom.com/',
    gameName: 'Capcom',
  },
];

function SlideImage() {
  const [currentImages, setCurrentImages] = useState([0, 1, 2]);

  // back to the previous image
  const handleGoToPrevImage = () => {
    const firstImageIndex = currentImages[0];
    const prevImageIndex = (firstImageIndex - 1 + slides.length) % slides.length;
    setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
  };

  // next image
  const handleGoToNextImage = () => {
    const lastImageIndex = currentImages[currentImages.length - 1];
    const nextImageIndex = (lastImageIndex + 1) % slides.length;
    setCurrentImages((prevImages) => [...prevImages.slice(1), nextImageIndex]);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleGoToNextImage();
    }, 2500);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentImages]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden mt-20">
      <div className="w-full pt-[50px] flex overflow-hidden">
        <div className="flex items-center relative">
          {currentImages.map((i, currentIndex) => (
            <div key={slides[i].id} className="relative">
              {currentIndex === 1 && (
                <div>
                  <img
                    src={LightLeft}
                    alt="Light Left"
                    className="absolute -rotate-45 left-[-100px] top-1/2 transform -translate-y-[135px] opacity-100 transition-transform duration-1000"
                  />
                  <img
                    src={LightRight}
                    alt="Light Right"
                    className="absolute rotate-45 right-[-80px] top-1/2 transform -translate-y-1/2 opacity-100 transition-transform duration-1000"
                  />
                </div>
              )}

              <a
                href={slides[i].gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  currentIndex === 1
                    ? 'w-[490px] h-[380px] cursor-pointer -translate-y-8 transition-transform duration-1000 ml-[150px] mr-[150px]'
                    : 'w-[300px] h-[300px] translate-y-8 opacity-60 transition-transform duration-1000 '
                } overflow-hidden flex justify-around items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)] mr-10  transition-transform duration-1000`}
              >
                <img
                  src={slides[i].gameImageUrl}
                  alt={slides[i].gameName}
                  className={`h-auto max-w-full transition-transform duration-1000 ${
                    currentIndex === 2 ? 'ml-3' : ''
                  }`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Box className="flex justify-center mt-[-58px]">
        <Box
          sx={{
            '&:hover': {
              color: 'transparent',
              backgroundColor: 'transparent',
            },
            position: 'absolute',
            top: '30%',
            left: '25%',
            transform: 'translateX(50%)',
          }}
        >
          <Avatar
            className="animate__animated animate__fadeIn"
            sx={{
              width: 60,
              height: 60,
              backgroundColor: '#ff8503',
              fontWeight: '900',
              ml: '-20px',
              cursor: 'pointer',
            }}
          >
            <ArrowBackIosIcon
              sx={{
                color: 'white',
                fontSize: '40px',
                mr: '-12px',
              }}
              onClick={handleGoToPrevImage}
            />
          </Avatar>
        </Box>
        <Box
          sx={{
            '&:hover': {
              color: 'transparent',
              backgroundColor: 'transparent',
            },
            position: 'absolute',
            top: '30%',
            right: '25%',
            transform: 'translateX(50%)',
          }}
        >
          <Avatar
            className="animate__animated animate__fadeIn"
            sx={{
              width: 60,
              height: 60,
              backgroundColor: '#ff8503',
              fontWeight: '900',
              mr: '-20px',
              cursor: 'pointer',
            }}
          >
            <ArrowForwardIosIcon
              sx={{ color: 'white', fontSize: '40px' }}
              onClick={handleGoToNextImage}
            />
          </Avatar>
        </Box>
      </Box>
    </div>
  );
}

export default SlideImage;
