import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaHotjar } from 'react-icons/fa';
import { HiSearchCircle } from 'react-icons/hi';
import { SiOnlyoffice } from 'react-icons/si';
function ProductionBusiness() {
  return (
    <Box sx={{ minHeight: '100vh' }} className="font-display">
      <p className="text-white font-bold text-[40px] text-center">
        EXPERIENCE JUST FOR FEARLESS BUSINESS OFFER
      </p>
      <div className="flex items-center justify-center mt-[50px]">
        <div className="bg-[#1a1b21] w-[420px] h-[250px] flex items-center justify-around mr-8 rounded-[5px] px-[16px]  hover:translate-y-[-6px]">
          <div>
            <FaHotjar className="text-[#ff8503] text-[60px] mr-4 mt-[-110px]" />
          </div>

          <div>
            {/* title */}
            <div className="text-[white] font-bold text-[24px] uppercase hover:text-[#ff8503] hover:cursor-pointer ">
              Hot deal
            </div>
            {/* content */}
            <div className="text-[#cfcfcf] text-[14px] font-light font-pop">
              Our commitment to innovation and efficiency allows us to break barriers by lowering
              the cost of making games without compromising on quality. We believe that great games
              should be accessible to all, and we're making that vision a reality.
            </div>
          </div>
        </div>
        <div className="bg-[#1a1b21] w-[420px] h-[250px] flex items-center justify-around mr-8 rounded-[5px] px-[16px]  hover:translate-y-[-6px]">
          <div>
            <HiSearchCircle className="text-[#ff8503] text-[60px] mr-4 mt-[-106px]" />
          </div>

          <div className="mt-[24px]">
            {/* title */}
            <div className="text-[white] font-bold text-[24px] uppercase hover:text-[#ff8503] hover:cursor-pointer ">
              Discover
            </div>
            {/* content */}
            <div className="text-[#cfcfcf] text-[14px] font-light font-pop">
              We don't stop at Roblox and Steam. We can seamlessly integrate your game into websites
              and mobile apps, expanding your reach and player base. We work closely with you every
              step of the way, ensuring your vision is realized and your game succeeds in the
              competitive gaming market.
            </div>
          </div>
        </div>
        <div className="bg-[#1a1b21] w-[420px] h-[250px] flex items-center justify-around mr-8 rounded-[5px] px-[16px]  hover:translate-y-[-6px]">
          <div>
            <SiOnlyoffice className="text-[#ff8503] text-[60px] mr-4 mt-[-110px]" />
          </div>

          <div className="mt-[-40px]">
            {/* title */}
            <div className="text-[white] font-bold text-[24px] uppercase hover:text-[#ff8503] hover:cursor-pointer ">
              Unique experiences
            </div>
            {/* content */}
            <div className="text-[#cfcfcf] text-[14px] font-light font-pop">
              We thrive on innovation, constantly pushing the boundaries of what's possible in game
              development and create gameplay mechanics that challenge the status quo.
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ProductionBusiness;
