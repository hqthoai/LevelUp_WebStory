import React from 'react'
import {Box} from '@mui/material';
import AboutUs from './AboutUs';
import ProductionCard from '../components/ProductionCard/ProductionCard';
import SlideImage from '../components/SlideImage/SlideImage';
import ProductionBusiness from '../components/ProductionBusiness/ProductionBusiness';
import OriginalProduction from '../components/OriginalProduction/OriginalProduction';

function Production() {
  return (
    <Box>
      <AboutUs title={"Production"}/>
      <ProductionCard/>
      <ProductionBusiness originalText="" businessText=""/>
      <OriginalProduction/>
      <SlideImage/>

    </Box>
  )
}

export default Production