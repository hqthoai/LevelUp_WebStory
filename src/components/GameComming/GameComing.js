import React, { useState } from 'react';

export default function GamingComing() {
  const [btnContent, setBtnContent] = useState('Join game now!');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    setBtnContent('Coming soon');
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setBtnContent('Join game now!');
  };

  return (
    <section className="pb-[120px] font-display">
      <div className="card-container p-[15px] mx-4 md:mx-16">
        <div className="flex">
          <div className="flex flex-col px-[15px]" style={{ flex: '4' }}>
            <div className="content">
              <div className="sub-title text-[16px] font-bold uppercase text-[#ff8503] mb-[13px]">
                CHECK OUT OUR NEXT GAME!
              </div>
              <h6 className="title text-white text-[30px] font-bold mb-[20px]">PetBalloon</h6>
              <p className="text-start mb-[36px] font-pop font-light text-white">
                We specialize in crafting immersive gaming experiences that not only celebrate the
                rich culture of Vietnam but are also tailored to suit the preferences of global
                players.
              </p>
              <a
                className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold uppercase inline-block 
                text-[16px] text-center transition-all duration-300"
                href="#"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={{
                  clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
                  backgroundColor: isHovered ? '#1f2029' : '#ff8503',
                  minWidth: '205px',
                }}
              >
                {btnContent}
              </a>
            </div>
          </div>

          <div className="flex px-[15px]" style={{ flex: '8' }}>
            <img
              className="bg-auto w-full h-[270px] object-fit "
              src="https://www.charlieintel.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.charlieintel.com/wp-content/uploads/2023/07/26/Roblox-Balloon-Simulator-codes.jpg"
              alt="pet-balloon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
