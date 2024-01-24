import React, { useState, useEffect } from 'react';

import { Box, IconButton, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import imgArticle1 from '../../assets/images/article-11.png';
import imgArticle2 from '../../assets/images/article2-thumbnail.png';
import imgArticle3 from '../../assets/images/article3-6.png';

const listArticles = [
  {
    imgArticle: imgArticle1,

    title: 'Roblox achieves remarkable growth in 2023: A game-changer in the digital landscape',
  },
  {
    imgArticle: imgArticle2,

    title: "Roblox's phenomenal rise in vietnam: LEVEL UP STUDIO unveils key insights",
  },
  {
    imgArticle: imgArticle3,

    title: 'From Nikeland to Gucci Town: The top 5 branded Roblox activations',
  },
];

function HomeBlog2({ title }) {
  const [hoveredService, setHoveredService] = useState(null);
  const [currentImages, setCurrentImages] = useState([0, 1, 2]);
  const [translateX, setTranslateX] = useState(0);

  const handleGoToPrevImage = () => {
    const firstImageIndex = currentImages[0];
    const prevImageIndex = (firstImageIndex - 1 + listArticles.length) % listArticles.length;
    setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
    setTranslateX(translateX + 100); // Adjust the value based on your desired translation amount
  };

  const handleGoToNextImage = () => {
    const lastImageIndex = currentImages[currentImages.length - 1];
    const nextImageIndex = (lastImageIndex + 1) % listArticles.length;
    setCurrentImages((prevImages) => [...prevImages.slice(1), nextImageIndex]);
    setTranslateX(translateX - 100); // Adjust the value based on your desired translation amount
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
    <div className="bg-[#1f2029] w-[580px] h-[350px]">
      {/* <div className="bg-[#1f2029] w-[750px] h-[350px] flex items-center flex-col font-display"> */}
      <div className="text-white text-[24px] font-bold font-pop text-center p-4 mt-[-16px]">
        <p>LAST ARTICLES</p>
      </div>
      <div className="flex items-center justify-between font-pop mt-8">
        <Avatar
          className="animate__animated animate__fadeIn"
          sx={{
            width: 36,
            height: 36,
            backgroundColor: '#ff8503',
            fontWeight: '900',
            ml: '-20px',
            cursor: 'pointer',
          }}
        >
          <ArrowBackIosIcon
            sx={{
              color: 'white',
              fontSize: '20px',
              mr: '-6px',
            }}
            onClick={handleGoToPrevImage}
          />
        </Avatar>
        <Box className="flex justify-between items-center mt-[-32px]">
          <div className="grid grid-cols-3 justify-center gap-8 items-center mt-10 font-pop">
            {currentImages.map((i, currentIndex) => (
              <div className={` animate__animated animate__fadeIn `}>
                <Link to={`/blog/${currentIndex + 1}`}>
                  <div
                    className={`hover:cursor-pointer border-2 border-[#ff8503] relative  w-[150px]`}
                  >
                    <a
                      key={currentIndex}
                      // href user to game link
                      href={listArticles[i].gameUrl}
                      target="_blank"
                    >
                      <div className="h-[100px] w-[147px]">
                        <img
                          src={listArticles[i].imgArticle}
                          alt={listArticles[i].title}
                          className="h-full w-full object-fill transition-transform duration-1000"
                        />
                      </div>
                    </a>
                    <div className="text-left mt-2 mb-2">
                      <p className="text-[#bdbdbd] text-[12px] mt-1">{listArticles[i].title}</p>
                    </div>
                    {/* <p className="text-white text-center mt-2 mb-2">{listArticles[i].title}</p> */}
                  </div>
                </Link>

                {/* <p className=" text-center mt-6 text-[#bdbdbd] text-[12px]">
                  {listArticles[i].timeToRead}
                </p> */}
              </div>
            ))}
          </div>
        </Box>
        <Avatar
          className="animate__animated animate__fadeIn"
          sx={{
            width: 36,
            height: 36,
            backgroundColor: '#ff8503',
            fontWeight: '900',
            mr: '-20px',
            cursor: 'pointer',
          }}
        >
          <ArrowForwardIosIcon
            sx={{ color: 'white', fontSize: '20px' }}
            onClick={handleGoToNextImage}
          />
        </Avatar>
      </div>
    </div>
  );
}

export default HomeBlog2;
