import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ActivisionBlizzard from '../../assets/images/Activision-logo.png';
import RobloxGlobal from '../../assets/images/Robloxresize.png';
import GiantyVN from '../../assets/images/GiantyVN.png';
import RollingAnt from '../../assets/images/RollingAnt.png';
import S8XTPN from '../../assets/images/s8x-tpn-logo.png';
import JungVonMattAg from '../../assets/images/2560px-JvM_Logo.svg.png';
import CasperDash from '../../assets/images/CasperDash2Resize.png';
import Capcom from '../../assets/images/Capcom-logo.png';
import Spotlight from '../../assets/images/lighting-spotlight.png';

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
  // {
  //   id: 3,
  //   gameImageUrl: GiantyVN,
  //   gameUrl: 'https://gianty.com.vn/vi/',
  //   gameName: 'Gianty VN',
  // },
  {
    id: 3,
    gameImageUrl: RollingAnt,
    gameUrl: 'https://rollingant.com/',
    gameName: 'Rolling ant',
  },
  {
    id: 4,
    gameImageUrl: S8XTPN,
    gameUrl: 'https://studio8fx.com/',
    gameName: '8fx studio',
  },
  {
    id: 5,
    gameImageUrl: JungVonMattAg,
    gameUrl: 'https://www.jvm.com/',
    gameName: 'JVM Agency',
  },
  {
    id: 6,
    gameImageUrl: CasperDash,
    gameUrl: 'https://casperdash.io/',
    gameName: 'Casper Dash',
  },
  {
    id: 7,
    gameImageUrl: Capcom,
    gameUrl: 'https://www.capcom.com/',
    gameName: 'Capcom',
  },
];

// for ipad and ipad pro
const SlideImage = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between(768, 1024));
  const isIpadPro = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');

  const [currentImages, setCurrentImages] = useState([0, 1, 2]);

  const handleGoToPrevImage = () => {
    const firstImageIndex = currentImages[0];
    const prevImageIndex = (firstImageIndex - 1 + slides.length) % slides.length;
    setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
  };

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
    <div
      className="relative lg:min-h-[900px] md:h-[800px] md:w-[100%] overflow-hidden mt-20 lg:m-auto md:ml-0 pb-48"
      style={{
        backgroundImage: `url(${Spotlight})`,
        backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '100%',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        // opacity: 0.85,
      }}
    >
      {/* // <div className={`${isIpadPro ? `relative w-[100%] h-[100%] min-h-screen overflow-hidden mt-20`: `relative lg:w-[90%] lg:h-[800px] md:w-[100%] min-h-screen overflow-hidden mt-20 lg:ml-12 md:ml-0`}`}> */}
      <div className="w-[100%] lg:pt-[20%] md:pt-[30%] flex justify-center ">
        <div className="grid grid-cols-3 gap-0 items-center justify-center w-full relative xxl:-top-[150px] ">
          {currentImages.map((i, currentIndex) => (
            <div key={slides[i].id} className="flex relative ">
              <div className="relative">
                {/* {currentIndex === 1 && (
                  <div className="absolute inset-0 flex justify-between items-center z-0">
                    <div
                      // className={`absolute ${
                      //   isIpadPro
                      //     ? // ? `ml-[50px] h-[200px] w-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px]`
                      //       `ml-[60px] h-[200px] w-[500px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[100px]`
                      //     : `md:ml-[100px] lg:ml-5 lg:mr-5 md:h-[400px] md:w-[400px] lg:h-full lg:w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 md:-translate-y-[200px] lg:-translate-y-[210px] opacity-100 transition-transform duration-1000 z-10`
                      // }`}
                      className={` ${
                        isIpadPro
                          ? // ? `ml-[50px] h-[200px] w-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px]`
                            `h-full opacity-100  transform -translate-y-[10%] lg:-translate-y-[15%] transition-transform duration-1000 z-10 -mx-[15%]`
                          : `h-full opacity-100  transform -translate-y-[10%] lg:-translate-y-[15%] transition-transform duration-1000 z-10 -mx-[15%]`
                      }`}
                    >
                      <img src={Spotlight} alt="Light" className="w-full object-cover" />
                    </div>
                  </div>
                )} */}
                {/*  <div className={`${isIpadPro ? 'ml-30' : 'lg:ml-26'}`}> */}
                <div className="">
                  <a
                    href={slides[i].gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      currentIndex === 1
                        ? isIpadPro
                          ? // ? 'ml-[30px] mr-[-35px] w-[400px] h-[300px] cursor-pointer -translate-y-16 transition-transform duration-1000 overflow-hidden'
                            ' h-[300px] cursor-pointer md:-translate-y-[5%] transition-transform duration-1000 overflow-hidden'
                          : 'h-[300px] cursor-pointer md:-translate-y-[5%] transition-transform duration-1000 overflow-hidden md:z-12 '
                        : isIpadPro
                        ? 'h-[250px] md:translate-y-[20%] opacity-60 transition-transform duration-1000 overflow-hidden  z-12'
                        : 'h-[250px] md:translate-y-[20%] opacity-60 transition-transform duration-1000 overflow-hidden z-12'
                    } overflow-hidden flex justify-around items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)]  transition-transform duration-1000 z-11 `}
                  >
                    <img
                      src={slides[i].gameImageUrl}
                      alt={slides[i].gameName}
                      // className={`w-[60%] transition-transform duration-1000`}
                      className={`transition-transform duration-1000 ${
                        currentIndex === 2 ? `w-[40%]` : currentIndex === 0 ? 'w-[40%]' : ''
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Box className="flex justify-center">
        <Box
          sx={{
            '&:hover': {
              color: 'transparent',
              backgroundColor: 'transparent',
            },
            position: 'absolute',
            // top: isTablet || isIpadPro ? '20%' : '30%',
            // left: isTablet || isIpadPro ? '20%' : '31%',
            top: isTablet ? '75%' : isIpadPro ? '75%' : '75%',
            left: isTablet ? '29%' : isIpadPro ? '30%' : '30%',
            transform: 'translateX(50%)',
          }}
        >
          <Avatar
            className="animate__animated animate__fadeIn"
            sx={{
              width: isTablet || isIpadPro ? '40px' : '60px',
              height: isTablet || isIpadPro ? '40px' : '60px',
              backgroundColor: '#ff8503',
              fontWeight: '900',
              // ml: isTablet || isIpadPro ? '-24px' : '-28px',
              cursor: 'pointer',
            }}
          >
            <ArrowBackIosIcon
              sx={{
                color: 'white',
                fontSize: isTablet || isIpadPro ? '30px' : '40px',
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
            // top: isTablet || isIpadPro ? '20%':'30%',
            // right: isTablet || isIpadPro ? '25%':'28%',

            top: isTablet ? '75%' : isIpadPro ? '75%' : '75%',
            right: isTablet ? '35%' : isIpadPro ? '34%' : '34%',
            transform: 'translateX(50%)',
          }}
        >
          <Avatar
            className="animate__animated animate__fadeIn"
            sx={{
              width: isTablet || isIpadPro ? '40px' : '60px',
              height: isTablet || isIpadPro ? '40px' : '60px',
              backgroundColor: '#ff8503',
              fontWeight: '900',
              // mr: isTablet || isIpadPro ? '64px' : '-20px',
              cursor: 'pointer',
            }}
          >
            <ArrowForwardIosIcon
              sx={{ color: 'white', fontSize: isTablet || isIpadPro ? '30px' : '40px' }}
              onClick={handleGoToNextImage}
            />
          </Avatar>
        </Box>
      </Box>
    </div>
  );
};

export default SlideImage;
