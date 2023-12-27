import React from 'react';
function OriginalProduction() {
  return (
    <div sx={{ minHeight: '100vh' }}>
      <p className="text-white text-[40px] text-center font-bold">
        SEIZE THE LIFE ON <span className="text-[#ff8503]">METAVERSE</span>
      </p>
      <div className="flex items-center justify-center mt-[50px]">
        <div className="bg-[#1a1b21] w-[420px] h-[250px] flex items-center justify-around mr-8 rounded-[5px] px-[16px]">
          <div>
            {/* title */}
            <div className="text-[white] font-bold text-[24px] uppercase hover:text-[#ff8503] hover:cursor-pointer ">
              Culture-Enriched
            </div>
            {/* content */}
            <div className="text-[#cfcfcf] text-[14px]">
              Each of our creations tells a unique story, and through our games, players can explore
              the depth of culture and social like never before.
            </div>
          </div>
        </div>
        <div className="bg-[#1a1b21] w-[420px] h-[250px] flex items-center justify-around mr-8 rounded-[5px] px-[16px]">
          <div className="mt-[24px]">
            {/* title */}
            <div className="text-[white] font-bold text-[24px] uppercase hover:text-[#ff8503] hover:cursor-pointer ">
              Engaging narratives
            </div>
            {/* content */}
            <div className="text-[#cfcfcf] text-[14px]">
              We don't stop at Roblox and Steam. We can seamlessly integrate your game into websites
              and mobile apps, expanding your reach and player base. We work closely with you every
              step of the way, ensuring your vision is realized and your game succeeds in the
              competitive gaming market.
            </div>
          </div>
        </div>
        <div className="bg-[#1a1b21] w-[420px] h-[250px] flex items-center justify-around mr-8 rounded-[5px] px-[16px]">
          <div className="mt-[-40px]">
            {/* title */}
            <div className="text-[white] font-bold text-[24px] uppercase hover:text-[#ff8503] hover:cursor-pointer ">
              Unique experiences
            </div>
            {/* content */}
            <div className="text-[#cfcfcf] text-[14px]">
              We thrive on innovation, constantly pushing the boundaries of what's possible in game
              development and create gameplay mechanics that challenge the status quo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OriginalProduction;
