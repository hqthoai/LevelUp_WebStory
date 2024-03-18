import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import GameDevelopment from '../../assets/images/GAMEDevelopment.jpg';
import AppDevelopment from '../../assets/images/APPDevelopment.jpg';
import MARKETING from '../../assets/images/MARKETING.jpg';
import SystemSetting from '../../assets/images/SYSTEMTesting.jpg';
import ArtDesgin from '../../assets/images/ARTDesign.jpg';
import Blockchain from '../../assets/images/BLOCKCHAIN.jpg';

const listServices = [
  {
    imgService: GameDevelopment,

    name: ['GAME', 'Development'],
  },
  {
    imgService: AppDevelopment,
    name: ['APP', 'Development'],
  },
  {
    imgService: MARKETING,

    name: ['MARKETING', 'Research'],
  },
  {
    imgService: SystemSetting,
    name: ['SYSTEM', 'Testing'],
  },
  {
    imgService: ArtDesgin,

    name: ['ART', 'Design'],
  },
  {
    imgService: Blockchain,
    name: ['BLOCKCHAIN', ' '],
  },
];

function HomeOurServices({ title }) {
  const [hoveredService, setHoveredService] = useState(null);
  const [currentImages, setCurrentImages] = useState([0, 1, 2]);

  // back to the previous image
  const handleGoToPrevImage = () => {
    const firstImageIndex = currentImages[0];
    const prevImageIndex = (firstImageIndex - 1 + listServices.length) % listServices.length;
    setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
  };

  // next image
  const handleGoToNextImage = () => {
    const lastImageIndex = currentImages[currentImages.length - 1];
    const nextImageIndex = (lastImageIndex + 1) % listServices.length;
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

  const handleMouseEnter = (index) => {
    setHoveredService(index);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <div className="bg-[#1c121f] h-[600px] flex items-center flex-col font-display mt-40">
      <div className="flex justify-center items-center">
        <div className="content-around text-center">
          <h3 className="uppercase text-white font-bold text-[30px] pb-4">
            {title || <div>our services</div>}
          </h3>
          <div className="flex justify-center items-center">
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/section_line.png"
              alt="section-line"
            />
          </div>
        </div>
      </div>

      {/* <Box className="flex justify-between mt-[-58px]"> */}
      <Box className="flex justify-between items-center">
        <IconButton
          sx={{
            '&:hover': {
              color: 'transparent',
              backgroundColor: 'transparent',
            },
          }}
          onClick={handleGoToPrevImage}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ color: 'white', fontSize: '48px' }} />
        </IconButton>
        <div className="grid grid-cols-3 lg:justify-center md:text-center md:justify-between lg:gap-8 md:gap-4 items-stretch mt-10">
          {currentImages.map((i, currentIndex) => (
            <div
              key={currentIndex}
              className="hover:cursor-pointer border-2 border-[#ff8503]  md:min-h-[200px] md:w-[100%] relative lg:p-4 md:p-2 lg:grid md:flex-col md:justify-center"
              onMouseEnter={() => handleMouseEnter(currentIndex)}
              onMouseLeave={handleMouseLeave}
              // style={{ height: '350px' }} // Set a fixed height
            >
              <a
                href={listServices[i].gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full" // Use 100% height
              >
                <img
                  src={listServices[i].imgService}
                  alt={listServices[i].name.join(' ')}
                  className="lg:h-[auto] lg:max-w-full md:h-[auto] md:w-[100%] opacity-100  transition-transform duration-1000 object-cover"
                  // className="contain h-auto max-w-full"
                />
                {hoveredService === currentIndex && (
                  <div className="absolute bottom-[-40px] left-0 right-0  text-white p-2 text-center">
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-8 text-center"> */}
                    <p>Contact Us!</p>
                  </div>
                )}
              </a>

              <p
                className={`text-white lg:w-full text-center md:w-[100%] md:mt-4 mb-4 ${
                  listServices[i].name[0] === 'BLOCKCHAIN' ? 'pt-4' : '' // Add custom margin-top for BLOCKCHAIN
                }`}
              >
                <span className="text-[#FF8503] font-bold text-[20px]">
                  {listServices[i].name[0]}
                </span>
                <br />
                {listServices[i].name[1]}
              </p>
            </div>
          ))}
        </div>

        <IconButton onClick={handleGoToNextImage}>
          <KeyboardDoubleArrowRightIcon sx={{ color: 'white', fontSize: '48px' }} />
        </IconButton>
      </Box>
    </div>
  );
}

export default HomeOurServices;
