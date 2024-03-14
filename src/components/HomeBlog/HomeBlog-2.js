import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
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
    title: "Roblox's phenomenal rise in Vietnam: LEVEL UP STUDIO unveils key insights",
  },
  {
    imgArticle: imgArticle3,
    title: 'From Nikeland to Gucci Town: The top 5 branded Roblox activations',
  },
];
function HomeBlog2({ title }) {
  const [hoveredService, setHoveredService] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );

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
    const handleResize = () => {
      const wideScreen = window.innerWidth > 768 && window.innerWidth <= 1024;
      setIsWideScreen(wideScreen);
      if (wideScreen) {
        setCurrentImages([0]);
      } else {
        setCurrentImages([0, 1, 2]);
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    // handleResize re-check when we reload the page
    handleResize();
  

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  
  

  useEffect(() => {
    // const slideInterval = setInterval(() => {
    //   handleGoToNextImage();
    // }, 2500);
    // return () => {
    //   clearInterval(slideInterval);
    // };
  }, [currentImages]);

  


  return (
    <div className="bg-[#1f2029] lg:w-[580px] md:w-[200px] h-[350px]">
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
        <div className="flex items-center lg:mt-[-32px] md:mt-[-55px] min-h-[280px]">
          <div className="flex justify-start gap-8  items-center font-pop">
            {/* {!isWideScreen ? ( */}
            {currentImages.map((i, currentIndex) => (
              <div key={currentIndex} className="animate__animated animate__fadeIn">
                <Link to={`/blog/${currentIndex + 1}`}>
                  <div
                    className={`hover:cursor-pointer border-2 border-[#ff8503] relative h-[240px] w-[150px] grid`}
                  >
                    <a href={listArticles[i].gameUrl} target="_blank" rel="noopener noreferrer">
                      <div className="w-[147px] overflow-hidden">
                        <img
                          src={listArticles[i].imgArticle}
                          alt={listArticles[i].title}
                          className="h-[100px] w-full object-cover transition-transform duration-1000"
                        />
                      </div>
                    </a>
                    <div
                      className={`title-container h-[50px] flex items-center justify-start px-1 `}
                    >
                      <p
                        className={`text-white text-[14px] ${
                          currentIndex === 2 ? 'mt-[-22px]' : ''
                        }`}
                      >
                        {listArticles[i].title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
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