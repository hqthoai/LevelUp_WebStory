import React from 'react';
import { Box } from '@mui/material';
import AboutUs from './AboutUs';
import ProductionCard from '../components/ProductionCard/ProductionCard';
import SlideImage from '../components/SlideImage/SlideImage';
import ProductionBusiness from '../components/ProductionBusiness/ProductionBusiness';
import OriginalProduction from '../components/OriginalProduction/OriginalProduction';

function Production() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/area_bg-scaled.jpg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <AboutUs title={'Production'} />
      <ProductionCard />
      <OriginalProduction />
      <SlideImage />
      <ProductionBusiness originalText="" businessText="" />
    </Box>
  );
}

export default Production;
