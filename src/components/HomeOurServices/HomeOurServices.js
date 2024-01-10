import React, { useState, useEffect } from 'react';
import Crown from '../../assets/images/crown.jpg';
import { Box, IconButton } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const listServices = [
  {
    imgService: Crown,
    name: 'GAME Development',
  },
  {
    imgService: Crown,
    name: 'APP Development',
  },
  {
    imgService: Crown,

    name: 'MARKETING Research',
  },
  {
    imgService: Crown,
    name: 'SYSTEM Testing',
  },
  {
    imgService: Crown,

    name: 'ART Design',
  },
  {
    imgService: Crown,
    name: 'BLOCKCHAIN',
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
    <div className="bg-[#1c121f] h-[600px] flex items-center flex-col font-display">
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
        >
          <KeyboardDoubleArrowLeftIcon
            sx={{ color: 'white', fontSize: '48px' }}
            onClick={handleGoToPrevImage}
          />
        </IconButton>
        <div className="grid grid-cols-3 justify-center gap-8 items-center mt-10 ">
          {currentImages.map((i, currentIndex) => (
            <div
              onMouseEnter={() => handleMouseEnter(currentIndex)}
              onMouseLeave={handleMouseLeave}
              className="hover:cursor-pointer border-2 border-[#ff8503] relative p-4"
            >
              <a
                key={currentIndex}
                // href user to game link
                href={listServices[i].gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[350px] h-[450px]"
              >
                <img
                  src={listServices[i].imgService}
                  alt={listServices[i].name}
                  className="h-auto max-w-full opacity-100  transition-transform duration-1000"
                  // className="contain h-auto max-w-full"
                />
                {hoveredService === currentIndex && (
                  <div className="absolute bottom-[-40px] left-0 right-0  text-white p-2 text-center">
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-8 text-center"> */}
                    <p>Contact Us!</p>
                  </div>
                )}
              </a>
              <p className="text-white text-center">{listServices[i].name}</p>
            </div>
          ))}
        </div>
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

export default HomeOurServices;
