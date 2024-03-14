import React from 'react';
import './OriginalProduction.scss';
function OriginalProduction() {
  return (
    <div className="relative font-display">
      <section className="original-area pb-[70px] before-bg">
        <div className="original-container lg:mx-[64px] px-[15px]">
          <div className="leading-[1.1] pl-[30px] relative">
            <p
              className="text-white text-[50px] text-start font-bold 
           before:content-['|'] before:ml-[-30px] before:mt-[11px] before:h-[83%] before:w-[11px] before:text-[#ff8503] before:absolute before:bg-[#ff8503]"
            >
              SEIZE THE LIFE ON <br />
              <span className="text-[#ff8503]">METAVERSE</span>
            </p>
          </div>

          <div className="flex justify-center mt-[65px]">
            <div
              className="w-[420px] h-[auto] flex justify-around mr-8 p-8 px-[16px] relative
            bg-gradient-to-t from-[#f95249e3] from-40% via-[#ff6a00c7] via-80% to-[#ff8503c0] to-1%
            hover:translate-y-[-8px] transition duration-500 ease-in-out"
              style={{
                boxShadow: '0 1px 12px 1px #ff8503c0',
              }}
            >
              <div>
                {/* title */}
                <div className="text-white font-bold md:text-[20px] lg:text-[24px] uppercase mb-[7px]">
                  Culture-Enriched
                </div>
                {/* content */}
                <div className="text-white text-[16px] font-light font-pop  lg:w-[80%] md:w-[90%]  text-justify tracking-normal ">
                  We take pride in infusing our games with the richness of cultures, celebrating our
                  heritage while embracing global diversity via cutting-edge graphics.
                </div>
                {/* offer overlay */}
                <div
                  className="absolute right-[-40px] top-[100px] -rotate-90 text-[#d98d7b] text-[40px] font-bold md:hidden"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#d98d7b',
                  }}
                >
                  METAVERSE
                </div>
              </div>
            </div>
            <div
              className="w-[420px] h-[auto] flex items-start justify-around mr-8 p-8  px-[16px] relative
            bg-gradient-to-t from-[#f95249e3] from-40% via-[#ff6a00c7] via-80% to-[#ff8503c0] to-1%
            hover:translate-y-[-8px] transition duration-500 ease-in-out"
              style={{
                boxShadow: '0 1px 12px 1px #ff8503c0',
              }}
            >
              <div>
                {/* title */}
                <div className="text-[white] font-bold md:text-[20px] lg:text-[24px] uppercase mb-[7px]">
                  Engaging narratives
                </div>
                {/* content */}
                <div className="text-white text-[16px]  font-light font-pop  lg:w-[80%] md:w-[90%]  text-justify">
                  Each of our creations tells a unique story, and through our games, players can
                  explore the depth of culture and social like never before.
                </div>
                {/* offer overlay */}
                <div
                  className="absolute right-[-40px] top-[100px] -rotate-90 text-[#d98d7b] text-[40px] font-bold md:hidden"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#d98d7b',
                  }}
                >
                  METAVERSE
                </div>
              </div>
            </div>
            <div
              className="w-[420px] h-[auto] flex items-start justify-around p-8 px-[16px] relative
            bg-gradient-to-t from-[#f95249e3] from-40% via-[#ff6a00c7] via-80% to-[#ff8503c0] to-1%
            hover:translate-y-[-8px] transition duration-500 ease-in-out"
              style={{
                boxShadow: '0 1px 12px 1px #ff8503c0',
              }}
            >
              <div>
                {/* title */}
                <div className="text-white font-bold md:text-[20px] lg:text-[24px] uppercase mb-[7px]">
                  Unique experiences
                </div>
                {/* content */}
                <div className="text-white text-[16px]  font-light font-pop lg:w-[80%] md:w-[90%] text-justify">
                  We thrive on innovation, constantly pushing the boundaries of what's possible in
                  game development and create gameplay mechanics that challenge the status quo.
                </div>
                {/* offer overlay */}
                <div
                  className="absolute right-[-40px] top-[100px] -rotate-90 text-[#d98d7b] text-[40px] font-bold md:hidden"
                  style={{
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: '#d98d7b',
                  }}
                >
                  METAVERSE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OriginalProduction;
