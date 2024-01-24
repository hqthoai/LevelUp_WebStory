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

import JungVonMattAg from '../../assets/images/JungVonMattAg.jpg';
import CasperDash from '../../assets/images/CasperDash.png';
import Capcom from '../../assets/images/Capcom-logo.png';
import './SlideImage.module.scss';

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
        <div className="flex items-center">
          {currentImages.map((i, currentIndex) => (
            <a
              key={slides[i].id}
              // href user to game link
              href={slides[i].gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                currentIndex === 1
                  ? 'w-[590px] h-[430px] cursor-pointer -translate-y-8 transition-transform duration-1000'
                  : 'w-[340px] h-[430px] translate-y-8 transition-transform duration-1000 '
              } overflow-hidden flex justify-center items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)] mr-10  transition-transform duration-1000`}
            >
              <img
                src={slides[i].gameImageUrl}
                alt={slides[i].gameName}
                className="h-auto max-w-full opacity-100  transition-transform duration-1000"
              />
            </a>
          ))}
        </div>
      </div>

      <Box className="flex justify-center mt-[-58px]">
        <IconButton
          sx={{
            '&:hover': {
              color: 'transparent',
              backgroundColor: 'transparent',
            },
          }}
        >
          <KeyboardDoubleArrowLeftIcon
            sx={{ color: 'white', mr: 70, fontSize: '48px' }}
            onClick={handleGoToPrevImage}
          />
        </IconButton>
        <IconButton>
          <KeyboardDoubleArrowRightIcon
            sx={{ color: 'white', fontSize: '48px' }}
            onClick={handleGoToNextImage}
          />
        </IconButton>
      </Box>
    </div>
  );
}

export default SlideImage;
