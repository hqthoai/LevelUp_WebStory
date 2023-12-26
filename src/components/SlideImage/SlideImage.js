import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './SlideImage.module.scss';
import { Box, IconButton } from '@mui/material';
import { FaCircleArrowRight, FaCircleArrowLeft } from 'react-icons/fa6';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const slides = [
  {
    id: 1,
    
    imageUrl:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
      gameUrl:''
  },
  {
    id: 2,

    imageUrl:
      'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
  },
  {
    id: 3,

    imageUrl:
      'https://media.macphun.com/img/uploads/macphun/blog/2063/_1.jpeg?q=75&w=1710&h=906&resize=cover',
  },
  {
    id: 4,

    imageUrl:
      'https://images.unsplash.com/photo-1552152370-fb05b25ff17d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D',
  },
  {
    id: 5,

    imageUrl:
      'https://images.unsplash.com/photo-1618430279534-323d2c5c7707?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D',
  },
];

function SlideImage() {
  const [index, setIndex] = useState(0);
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

  return (
    <div className="relative w-full min-h-screen overflow-hidden mt-20">
      <div className="w-full pt-[50px] flex overflow-hidden">
        <div className="flex items-center">
          {currentImages.map((i, currentIndex) => (
            <div
              key={slides[i].id}
              className={`${
                currentIndex === 1
                  ? 'w-[680px] h-[430px] cursor-pointer -translate-y-8'
                  : 'w-[340px] h-[430px] translate-y-8'
              } overflow-hidden flex justify-center items-center shadow-[0 15px 50px rgba(0, 0, 0, 0.2)] mr-10 `}
            >
              <img
                src={slides[i].imageUrl}
                alt={slides[i].id}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <Box className="flex justify-center mt-[-28px]">
        <IconButton>
          <ArrowCircleLeftIcon sx={{ color: 'white', mr: 78 }} onClick={handleGoToPrevImage} />
        </IconButton>
        <IconButton>
          <ArrowCircleRightIcon sx={{ color: 'white' }} onClick={handleGoToNextImage} />
        </IconButton>
      </Box>
    </div>
  );
}

export default SlideImage;
