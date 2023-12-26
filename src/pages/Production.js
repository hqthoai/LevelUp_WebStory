import React from 'react'
import {Box} from '@mui/material';
import AboutUs from './AboutUs';
import ProductionCard from '../components/ProductionCard/ProductionCard';
import SlideImage from '../components/SlideImage/SlideImage';
import ProductionBusiness from '../components/ProductionBusiness/ProductionBusiness';

function Production() {
  return (
    <Box>
      <AboutUs title={"Production"}/>
      <ProductionCard/>
      <SlideImage/>
      <ProductionBusiness/>
    </Box>
  )
}

export default Production