import React, { useState } from 'react';
import './ProductionCard.scss';
import LogoWeb from '../../assets/images/LevelUpLogo.png';

export default function ProductionCard({ originalText, businessText }) {
  const [activeTab, setActiveTab] = useState(1);
  const [animate, setAnimate] = useState(true); // State for controlling animation

  const handleTabChange = (tabIndex) => {
    setAnimate(false); // Disable animation
    setTimeout(() => {
      setActiveTab(tabIndex);
      setAnimate(true); // Enable animation after a short delay
    }, 100);
  };

  return (
    <section className="pt-[120px] pb-[100px] font-display">
      <div className="card-container p-[15px] mx-4 md:mx-16">
        <div className="flex md:flex-row items-center justify-between">
          {/* Tabs */}
          <div className="w-full md:w-1/2 px-[16px]">
            <div className="bg-[#1f2029] px-4 md:px-[43px] py-4 md:py-[48px]">
              <div>
                <div className="nav-link ">
                  <div className="flex mb-4 md:mb-[30px] pb-4 md:pb-[36px] relative">
                    <div
                      className={`font-bold mr-2 cursor-pointer uppercase ${
                        activeTab === 1 ? 'text-[#ff8503]' : 'text-white'
                      }`}
                      onClick={() => handleTabChange(1)}
                    >
                      Originals
                    </div>
                    <div
                      className={`ml-12 font-bold cursor-pointer uppercase business-tab
                      ${activeTab === 2 ? 'text-[#ff8503]' : 'text-white'}`}
                      onClick={() => handleTabChange(2)}
                    >
                      Business
                    </div>
                    <div className="absolute bottom-[-4px] left-[460px] right-[40px] h-[8px] bg-[#ff8503] rounded"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#ff8503]"></div>
                  </div>
                </div>

                <div className="mt-4 min-h-[300px]">
                  {activeTab === 1 && (
                    <div className="fade-in">
                      <h2 className="text-white text-[50px] uppercase font-bold mb-2 font-san">
                        <a href="/production">
                          SEIZE THE LIFE ON <span className="text-[#ff8503]">METAVERSE</span>
                        </a>
                      </h2>
                      <p className="text-white text-justify font-pop font-light text-[14px]  w-[90%]">
                        {/* Gaming should be more than just entertainment; it should be an enriching
                        experience and community-centric approach! Our team is passionate about
                        incorporating elements of Vietnamese culture into your game, offering global
                        next-generation players a unique and immersive adventure in the metaverse. */}
                        {originalText || (
                          <div>
                            Gaming should be more than just entertainment; it should be an enriching
                            experience and community-centric approach! Our team is passionate about
                            incorporating elements of Vietnamese culture into your game, offering
                            global next-generation players a unique and immersive adventure in the
                            metaverse.{' '}
                          </div>
                        )}
                      </p>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="fade-in">
                      <h2 className="text-white text-[50px] uppercase font-bold mb-2">
                        <a href="/production">
                          EXPERIENCE JUST FOR{' '}
                          <span className="text-[#ff8503]">FEARLESS BUSINESS</span>
                        </a>
                      </h2>
                      <p className="text-white text-justify font-pop font-light text-[14px] w-[90%]">
                        {/* From storytelling to gameplay mechanics, we tailor every aspect of your game
                        to resonate with the target audience, ensuring an unforgettable experience.
                        We work closely with you to bring your game concept to life. Whether it's a
                        historical epic, a fantastical journey, or a modern adventure, LEVEL UP
                        STUDIO are here to turn your vision into a captivating reality. */}
                        {businessText || (
                          <div>
                            From storytelling to gameplay mechanics, we tailor every aspect of your
                            game to resonate with the target audience, ensuring an unforgettable
                            experience. We work closely with you to bring your game concept to life.
                            Whether it's a historical epic, a fantastical journey, or a modern
                            adventure, LEVEL UP STUDIO are here to turn your vision into a
                            captivating reality.
                          </div>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="h-auto w-full md:w-1/2 px-[16px] justify-center items-center mb-24 md:mt-0">
            <img src={LogoWeb} alt="Your Image" className="w-full h-[560px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
