// import React, { useState, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// import { Box, IconButton } from '@mui/material';

// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// // import images
// import ActivisionBlizzard from '../../assets/images/Activision-logo.png';
// import RobloxGlobal from '../../assets/images/Roblox.png';
// import GiantyVN from '../../assets/images/GiantyVN.png';
// import RollingAnt from '../../assets/images/RollingAnt.png';
// import S8XTPN from '../../assets/images/s8x-tpn-logo.png';

// import JungVonMattAg from '../../assets/images/2560px-JvM_Logo.svg.png';
// import CasperDash from '../../assets/images/CasperDash.png';
// import Capcom from '../../assets/images/Capcom-logo.png';
// import './SlideImage.module.scss';

// import LightLeft from '../../assets/images/lightLeft.png';
// import LightRight from '../../assets/images/lightRight.png';
// import NextImage from '../../assets/images/next.png';
// import PreviousImage from '../../assets/images/previous.png';

// // version - 2
// import { Avatar } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { create } from '@mui/material/styles/createTransitions';

// const slides = [
//   {
//     id: 1,
//     gameImageUrl: ActivisionBlizzard,
//     gameUrl: 'https://www.activisionblizzard.com/',
//     gameName: 'Activision Blizzard',
//   },
//   {
//     id: 2,
//     gameImageUrl: RobloxGlobal,
//     gameUrl: 'https://www.roblox.com/login',
//     gameName: 'Roblox Global',
//   },
//   {
//     id: 3,
//     gameImageUrl: GiantyVN,
//     gameUrl: 'https://gianty.com.vn/vi/',
//     gameName: 'Gianty VN',
//   },
//   {
//     id: 4,

//     gameImageUrl: RollingAnt,
//     gameUrl: 'https://rollingant.com/',
//     gameName: 'Rolling ant',
//   },
//   {
//     id: 5,

//     gameImageUrl: S8XTPN,
//     gameUrl: 'https://studio8fx.com/',
//     gameName: '8fx studio',
//   },

//   {
//     id: 6,
//     gameImageUrl: JungVonMattAg,
//     gameUrl: 'https://www.jvm.com/',
//     gameName: 'JVM Agency',
//   },
//   {
//     id: 7,
//     gameImageUrl: CasperDash,
//     gameUrl: 'https://casperdash.io/',
//     gameName: 'Casper Dash',
//   },
//   {
//     id: 8,
//     gameImageUrl: Capcom,
//     gameUrl: 'https://www.capcom.com/',
//     gameName: 'Capcom',
//   },
// ];
// const SlideImage = () => {
//   const theme = useTheme();
//   const isTablet = useMediaQuery(theme.breakpoints.between(768, 1024));

//   const [currentImages, setCurrentImages] = useState([0, 1, 2]);

//   // back to the previous image
//   const handleGoToPrevImage = () => {
//     const firstImageIndex = currentImages[0];
//     const prevImageIndex = (firstImageIndex - 1 + slides.length) % slides.length;
//     setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
//   };

//   // next image
//   const handleGoToNextImage = () => {
//     const lastImageIndex = currentImages[currentImages.length - 1];
//     const nextImageIndex = (lastImageIndex + 1) % slides.length;
//     setCurrentImages((prevImages) => [...prevImages.slice(1), nextImageIndex]);
//   };

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       handleGoToNextImage();
//     }, 2500);

//     return () => {
//       clearInterval(slideInterval);
//     };
//   }, [currentImages]);

//   return (
//     <div className="relative lg:w-[90%] lg:h-[800px] md:w-[100%] min-h-screen overflow-hidden mt-20 lg:ml-12 md:ml-0">
//       <div className="w-full pt-[50px] flex overflow-hidden">
//         <div className="flex items-center relative">
//           {currentImages.map((i, currentIndex) => (
//             <div key={slides[i].id} className="relative md:mx-[45px] lg:ml-0">
//               <div className="relative">
//                 {currentIndex === 1 && (
//                   <div className="absolute inset-0 flex justify-center items-center  md:mr-36 lg:mr-[-56px] lg:ml-[-56px] z-0">
//                     <div className="md:ml-[-100px] lg:ml-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full absolute -rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px] lg:-translate-y-[210px] opacity-100 transition-transform duration-1000 z-10">
//                       <img src={LightLeft} alt="Light Left" />
//                     </div>

//                     {/* <div className="md:mr-[-36px] lg:mr-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full absolute rotate-45 right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 lg:-translate-y-[175px] opacity-100 transition-transform duration-1000 z-10"> */}
//                     <div className="md:mr-[-36px] lg:mr-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full absolute rotate-45 right-1/2 top-1/2 transform translate-x-1/2 md:-translate-y-[97px] lg:-translate-y-[175px] opacity-100 transition-transform duration-1000 z-10">
//                       <img src={LightRight} alt="Light Right" />
//                     </div>
//                   </div>
//                 )}
//                 <div className="lg:ml-26">
//                   <a
//                     href={slides[i].gameUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${
//                       currentIndex === 1
//                         ? 'lg:ml-[35px] lg:mr-[80px] lg:w-[490px] lg:h-[380px] md:w-[400px] md:h-[300px] cursor-pointer lg:-translate-y-24 md:-translate-y-16 transition-transform duration-1000 md:ml-[-60px] md:mr-[150px] md:z-12 '
//                         : // : 'lg:w-[300px] lg:h-[300px] md:w-[100px] md:h-[100px] translate-y-8 opacity-60 transition-transform duration-1000 overflow-hidden md:ml-[-46px] md:z-12'
//                           'lg:w-[300px] lg:h-[300px] md:w-[100px] md:h-[100px] translate-y-8 opacity-60 transition-transform duration-1000 overflow-hidden md:ml-[-70px] md:mr-[70px] md:z-12'
//                     } overflow-hidden flex justify-around items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)] mr-10  transition-transform duration-1000 z-11 lg:ml-[-8px]`}
//                   >
//                     <img
//                       src={slides[i].gameImageUrl}
//                       alt={slides[i].gameName}
//                       className={`h-auto max-w-full transition-transform duration-1000 ${
//                         currentIndex === 2 ? 'ml-3 md:mr-12' : ''
//                       }`}
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Box className="flex justify-center mt-[-58px] md:mt-[-30px]">
//         <Box
//           sx={{
//             '&:hover': {
//               color: 'transparent',
//               backgroundColor: 'transparent',
//             },
//             position: 'absolute',
//             top: isTablet ? '20%':'30%',
//             left: isTablet ? '20%':'31%',
//             transform: 'translateX(50%)',
//           }}
//         >
//           <Avatar
//             className="animate__animated animate__fadeIn"
//             sx={{
//               width: isTablet ? '40px' : '60px',
//               height: isTablet ? '40px' : '60px',
//               backgroundColor: '#ff8503',
//               fontWeight: '900',
//               ml: isTablet ? '-24px' : '-28px',
//               cursor: 'pointer',
//             }}
//           >
//             <ArrowBackIosIcon
//               sx={{
//                 color: 'white',
//                 fontSize: isTablet ? '30px' : '40px',
//                 mr: '-12px',
//               }}
//               onClick={handleGoToPrevImage}
//             />
//           </Avatar>
//         </Box>
//         <Box
//           sx={{
//             '&:hover': {
//               color: 'transparent',
//               backgroundColor: 'transparent',
//             },
//             position: 'absolute',
//             top: isTablet ? '20%':'30%',
//             // right: '24%',
//             right: isTablet ? '25%':'28%',
//             transform: 'translateX(50%)',
//           }}
//         >
//           <Avatar
//             className="animate__animated animate__fadeIn"
//             sx={{
//               width: isTablet ? '40px' : '60px',
//               height: isTablet ? '40px' : '60px',
//               backgroundColor: '#ff8503',
//               fontWeight: '900',
//               mr: isTablet ? '64px' : '-20px',
//               cursor: 'pointer',
//             }}
//           >
//             <ArrowForwardIosIcon
//               sx={{ color: 'white', fontSize: isTablet ? '30px' : '40px' }}
//               onClick={handleGoToNextImage}
//             />
//           </Avatar>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default SlideImage;

// for ipad and ipad mini
// import React, { useState, useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { Box, IconButton } from '@mui/material';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
// import ActivisionBlizzard from '../../assets/images/Activision-logo.png';
// import RobloxGlobal from '../../assets/images/Roblox.png';
// import GiantyVN from '../../assets/images/GiantyVN.png';
// import RollingAnt from '../../assets/images/RollingAnt.png';
// import S8XTPN from '../../assets/images/s8x-tpn-logo.png';
// import JungVonMattAg from '../../assets/images/2560px-JvM_Logo.svg.png';
// import CasperDash from '../../assets/images/CasperDash.png';
// import Capcom from '../../assets/images/Capcom-logo.png';
// import LightLeft from '../../assets/images/lightLeft.png';
// import LightRight from '../../assets/images/lightRight.png';
// import NextImage from '../../assets/images/next.png';
// import PreviousImage from '../../assets/images/previous.png';
// import { Avatar } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { create } from '@mui/material/styles/createTransitions';

// const slides = [
//   {
//     id: 1,
//     gameImageUrl: ActivisionBlizzard,
//     gameUrl: 'https://www.activisionblizzard.com/',
//     gameName: 'Activision Blizzard',
//   },
//   {
//     id: 2,
//     gameImageUrl: RobloxGlobal,
//     gameUrl: 'https://www.roblox.com/login',
//     gameName: 'Roblox Global',
//   },
//   {
//     id: 3,
//     gameImageUrl: GiantyVN,
//     gameUrl: 'https://gianty.com.vn/vi/',
//     gameName: 'Gianty VN',
//   },
//   {
//     id: 4,
//     gameImageUrl: RollingAnt,
//     gameUrl: 'https://rollingant.com/',
//     gameName: 'Rolling ant',
//   },
//   {
//     id: 5,
//     gameImageUrl: S8XTPN,
//     gameUrl: 'https://studio8fx.com/',
//     gameName: '8fx studio',
//   },
//   {
//     id: 6,
//     gameImageUrl: JungVonMattAg,
//     gameUrl: 'https://www.jvm.com/',
//     gameName: 'JVM Agency',
//   },
//   {
//     id: 7,
//     gameImageUrl: CasperDash,
//     gameUrl: 'https://casperdash.io/',
//     gameName: 'Casper Dash',
//   },
//   {
//     id: 8,
//     gameImageUrl: Capcom,
//     gameUrl: 'https://www.capcom.com/',
//     gameName: 'Capcom',
//   },
// ];

// const SlideImage = () => {
//   const theme = useTheme();
//   const isTablet = useMediaQuery(theme.breakpoints.between(768, 1024));
//   const [currentImages, setCurrentImages] = useState([0, 1, 2]);

//   const handleGoToPrevImage = () => {
//     const firstImageIndex = currentImages[0];
//     const prevImageIndex = (firstImageIndex - 1 + slides.length) % slides.length;
//     setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
//   };

//   const handleGoToNextImage = () => {
//     const lastImageIndex = currentImages[currentImages.length - 1];
//     const nextImageIndex = (lastImageIndex + 1) % slides.length;
//     setCurrentImages((prevImages) => [...prevImages.slice(1), nextImageIndex]);
//   };

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       handleGoToNextImage();
//     }, 2500);

//     return () => {
//       clearInterval(slideInterval);
//     };
//   }, [currentImages]);

//   return (
//     <div className="relative lg:w-[90%] lg:h-[800px] md:w-[100%] min-h-screen overflow-hidden mt-20 lg:ml-12 md:ml-0">
//       <div className="w-full pt-[50px] flex overflow-hidden">
//         <div className="flex items-center relative">
//           {currentImages.map((i, currentIndex) => (
//             <div key={slides[i].id} className="relative md:mx-[45px] lg:ml-0">
//               <div className="relative">
//                 {currentIndex === 1 && (
//                   <div className="absolute inset-0 flex justify-center items-center  md:mr-36 lg:mr-[-56px] lg:ml-[-56px] z-0">
//                     <div className="md:ml-[-100px] lg:ml-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full absolute -rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px] lg:-translate-y-[210px] opacity-100 transition-transform duration-1000 z-10">
//                       <img src={LightLeft} alt="Light Left" />
//                     </div>
//                     <div className="md:mr-[-36px] lg:mr-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full absolute rotate-45 right-1/2 top-1/2 transform translate-x-1/2 md:-translate-y-[97px] lg:-translate-y-[175px] opacity-100 transition-transform duration-1000 z-10">
//                       <img src={LightRight} alt="Light Right" />
//                     </div>
//                   </div>
//                 )}
//                 <div className="lg:ml-26">
//                   <a
//                     href={slides[i].gameUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`${
//                       currentIndex === 1
//                         ? 'lg:ml-[35px] lg:mr-[80px] lg:w-[490px] lg:h-[380px] md:w-[400px] md:h-[300px] cursor-pointer lg:-translate-y-24 md:-translate-y-16 transition-transform duration-1000 md:ml-[-60px] md:mr-[150px] md:z-12 '
//                         : 'lg:w-[300px] lg:h-[300px] md:w-[100px] md:h-[100px] translate-y-8 opacity-60 transition-transform duration-1000 overflow-hidden md:ml-[-70px] md:mr-[70px] md:z-12'
//                     } overflow-hidden flex justify-around items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)] mr-10  transition-transform duration-1000 z-11 lg:ml-[-8px]`}
//                   >
//                     <img
//                       src={slides[i].gameImageUrl}
//                       alt={slides[i].gameName}
//                       className={`h-auto max-w-full transition-transform duration-1000 ${
//                         currentIndex === 2 ? 'ml-3 md:mr-12' : ''
//                       }`}
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Box className="flex justify-center mt-[-58px] md:mt-[-30px]">
//         <Box
//           sx={{
//             '&:hover': {
//               color: 'transparent',
//               backgroundColor: 'transparent',
//             },
//             position: 'absolute',
//             top: isTablet ? '20%':'30%',
//             left: isTablet ? '20%':'31%',
//             transform: 'translateX(50%)',
//           }}
//         >
//           <Avatar
//             className="animate__animated animate__fadeIn"
//             sx={{
//               width: isTablet ? '40px' : '60px',
//               height: isTablet ? '40px' : '60px',
//               backgroundColor: '#ff8503',
//               fontWeight: '900',
//               ml: isTablet ? '-24px' : '-28px',
//               cursor: 'pointer',
//             }}
//           >
//             <ArrowBackIosIcon
//               sx={{
//                 color: 'white',
//                 fontSize: isTablet ? '30px' : '40px',
//                 mr: '-12px',
//               }}
//               onClick={handleGoToPrevImage}
//             />
//           </Avatar>
//         </Box>
//         <Box
//           sx={{
//             '&:hover': {
//               color: 'transparent',
//               backgroundColor: 'transparent',
//             },
//             position: 'absolute',
//             top: isTablet ? '20%':'30%',
//             right: isTablet ? '25%':'28%',
//             transform: 'translateX(50%)',
//           }}
//         >
//           <Avatar
//             className="animate__animated animate__fadeIn"
//             sx={{
//               width: isTablet ? '40px' : '60px',
//               height: isTablet ? '40px' : '60px',
//               backgroundColor: '#ff8503',
//               fontWeight: '900',
//               mr: isTablet ? '64px' : '-20px',
//               cursor: 'pointer',
//             }}
//           >
//             <ArrowForwardIosIcon
//               sx={{ color: 'white', fontSize: isTablet ? '30px' : '40px' }}
//               onClick={handleGoToNextImage}
//             />
//           </Avatar>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default SlideImage;

// for ipad and ipad pro
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
    <div className="relative lg:w-[90%] lg:h-[800px] md:w-[100%] min-h-screen overflow-hidden mt-20 lg:ml-12 md:ml-0">
      {/* // <div className={`${isIpadPro ? `relative w-[100%] h-[100%] min-h-screen overflow-hidden mt-20`: `relative lg:w-[90%] lg:h-[800px] md:w-[100%] min-h-screen overflow-hidden mt-20 lg:ml-12 md:ml-0`}`}> */}
      <div className="w-[100%] pt-[50px] flex ">
        <div className="flex items-center relative">
          {currentImages.map((i, currentIndex) => (
            <div key={slides[i].id} className="relative md:mx-[45px] lg:ml-0">
              <div className="relative">
                {currentIndex === 1 && (
                  <div className="absolute inset-0 flex justify-between items-center md:mr-36 lg:mr-[-56px] lg:ml-[-56px] z-0">
                    <div
                      className={`absolute -rotate-45  ${
                        isIpadPro
                        // ? `ml-[50px] h-[200px] w-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px]`
                        ? `ml-[60px] h-[200px] w-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px]`
                          : `md:ml-[-100px] lg:ml-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full absolute -rotate-45 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[90px] lg:-translate-y-[210px] opacity-100 transition-transform duration-1000 z-10`
                      }`}
                    >
                      <img src={LightLeft} alt="Light Left" />
                    </div>
                    <div
                      className={`absolute rotate-45 ${
                        isIpadPro
                          ? `ml-[180px] h-[200px] w-[400px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[96px]`
                          : `md:mr-[-36px] lg:mr-0 md:h-[200px] md:w-[400px] lg:h-full lg:w-full right-1/2 top-1/2 transform translate-x-1/2 md:-translate-y-[97px] lg:-translate-y-[175px] opacity-100 transition-transform duration-1000 z-10`
                      }`}
                    >
                      <img src={LightRight} alt="Light Right" />
                    </div>
                  </div>
                )}
                <div className={`${isIpadPro? 'ml-30':'lg:ml-26'}`}>
                  <a
                    href={slides[i].gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      currentIndex === 1
                        ? isIpadPro
                          // ? 'ml-[30px] mr-[-35px] w-[400px] h-[300px] cursor-pointer -translate-y-16 transition-transform duration-1000 overflow-hidden'
                          ? 'ml-[55px] mr-[-60px] w-[400px] h-[300px] cursor-pointer -translate-y-16 transition-transform duration-1000 overflow-hidden'
                          : 'lg:ml-[35px] lg:mr-[80px] lg:w-[490px] lg:h-[380px] md:w-[400px] md:h-[300px] cursor-pointer lg:-translate-y-24 md:-translate-y-16 transition-transform duration-1000 md:ml-[-60px] md:mr-[150px] md:z-12 '
                        : isIpadPro
                        ? 'w-[150px] h-[150px] translate-y-8 opacity-60 transition-transform duration-1000 overflow-hidden ml-[-40px] mr-[40px] z-12'
                        : 'lg:w-[300px] lg:h-[300px] md:w-[100px] md:h-[100px] translate-y-8 opacity-60 transition-transform duration-1000 overflow-hidden md:ml-[-70px] md:mr-[70px] md:z-12'
                    } overflow-hidden flex justify-around items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)] mr-10  transition-transform duration-1000 z-11 lg:ml-[-8px]`}
                  >
                    <img
                      src={slides[i].gameImageUrl}
                      alt={slides[i].gameName}
                      className={`h-auto max-w-full transition-transform duration-1000 ${
                        currentIndex === 2 ? (isIpadPro ? `ml-24` : `ml-3 md:mr-12`) : ''
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Box className="flex justify-center mt-[-58px] md:mt-[-30px]">
        <Box
          sx={{
            '&:hover': {
              color: 'transparent',
              backgroundColor: 'transparent',
            },
            position: 'absolute',
            // top: isTablet || isIpadPro ? '20%' : '30%',
            // left: isTablet || isIpadPro ? '20%' : '31%',
            top: isTablet ? '20%' : isIpadPro ? '16%' : '28%',
            left: isTablet ? '19%' : isIpadPro ? '31%' : '35%',
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
              ml: isTablet || isIpadPro ? '-24px' : '-28px',
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
            top: isTablet ? '20%' : isIpadPro ? '16%' : '28%',
            right: isTablet ? '24%' : isIpadPro ? '25%' : '28%',
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
              mr: isTablet || isIpadPro ? '64px' : '-20px',
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
