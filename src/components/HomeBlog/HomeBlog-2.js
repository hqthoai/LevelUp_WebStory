import React, { useState, useEffect } from 'react';
import Crown from '../../assets/images/crown.jpg';
import { Box, IconButton, Avatar } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const listArticles = [
  {
    imgArticle:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
    title: 'Article 1',
    timeToRead: '6 MIN READ',
  },
  {
    imgArticle:
      'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlc3xlbnwwfHwwfHx8MA%3D%3D',
    title: 'Article 2',
    timeToRead: '6 MIN READ',
  },
  {
    imgArticle:
      'https://posterjack.ca/cdn/shop/articles/landscape_photography_tips_featured_image_1024x1024.jpg?v=1563408049',

    title: 'Article 3',
    timeToRead: '6 MIN READ',
  },
  {
    imgArticle: 'https://i.pinimg.com/1200x/5e/6e/79/5e6e79603e87312e8ee6c500ce93a9cf.jpg',
    title: 'Article 4',
    timeToRead: '6 MIN READ',
  },
  {
    imgArticle: 'https://i.pinimg.com/736x/3e/ae/7a/3eae7aea578fbc611ffbfa600fc3d2e5.jpg',

    title: 'Article 5',
    timeToRead: '6 MIN READ',
  },
  {
    imgArticle: 'https://i.pinimg.com/736x/64/20/29/6420299e0c2879145fba999b892d2c6f.jpg',
    title: 'Article 6',
    timeToRead: '6 MIN READ',
  },
];

function HomeBlog2({ title }) {
  const [hoveredService, setHoveredService] = useState(null);
  const [currentImages, setCurrentImages] = useState([0, 1, 2]);
  const [translateX, setTranslateX] = useState(0);

  //   // back to the previous image
  //   const handleGoToPrevImage = () => {
  //     const firstImageIndex = currentImages[0];
  //     const prevImageIndex = (firstImageIndex - 1 + listArticles.length) % listArticles.length;
  //     setCurrentImages((prevImages) => [prevImageIndex, ...prevImages.slice(0, -1)]);
  //   };

  //   // next image
  //   const handleGoToNextImage = () => {
  //     const lastImageIndex = currentImages[currentImages.length - 1];
  //     const nextImageIndex = (lastImageIndex + 1) % listArticles.length;
  //     setCurrentImages((prevImages) => [...prevImages.slice(1), nextImageIndex]);
  //   };
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
      <div className="text-white text-[20px] font-bold font-pop text-center p-4">
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
                <div className={`hover:cursor-pointer border-2 border-[#ff8503] relative `}>
                  <a
                    key={currentIndex}
                    // href user to game link
                    href={listArticles[i].gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="w-[250px] h-[400px]"
                  >
                    <img
                      src={listArticles[i].imgArticle}
                      alt={listArticles[i].title}
                      className="h-[100px] w-[150px] opacity-100  transition-transform duration-1000"
                    />
                  </a>
                  <p className="text-white text-center mt-2 mb-2">{listArticles[i].title}</p>
                </div>
                <p className=" text-center mt-2 text-[#bdbdbd]">{listArticles[i].timeToRead}</p>
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
