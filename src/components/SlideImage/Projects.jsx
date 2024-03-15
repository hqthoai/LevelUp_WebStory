import React from 'react';
import SliderComp from './Slider';
import styled from 'styled-components';

const Projects = () => {
  return (
    <div className="slide-img relative md:w-[100wv] lg:w-[100wv] m-auto">
      <div className="flex flex-row justify-center">
        <SliderComp />
      </div>
    </div>
  );
};

export default Projects;
