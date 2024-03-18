// import React, { useState } from 'react';
// import './ProductionCard.scss';
// import LogoWeb from '../../assets/images/main_logo_v2.png';

// export default function ProductionCard({ originalText, businessText }) {
//   const [activeTab, setActiveTab] = useState(1);
//   const [animate, setAnimate] = useState(true); // State for controlling animation

//   const handleTabChange = (tabIndex) => {
//     setAnimate(false); // Disable animation
//     setTimeout(() => {
//       setActiveTab(tabIndex);
//       setAnimate(true); // Enable animation after a short delay
//     }, 100);
//   };

//   return (
//     <section className="pt-[120px] pb-[100px] font-display">
//       <div className="card-container p-[15px] mx-4 lg:mx-16">
//         {/* <div className="flex md:flex-row flex-wrap items-center justify-center"> */}
//         <div className="flex items-center justify-center">
//           {/* Tabs */}
//           <div className="w-full lg:flex-1 md:w-[70%] px-[16px] lg:order-1  md:order-1 ">
//             <div className="bg-[#1f2029] px-4 md:px-[35px] py-4 md:py-[48px]">
//               <div className="nav-link ">
//                 <div className="flex mb-4 md:mb-[30px] pb-4 relative">
//                   <div
//                     className={`font-bold mr-2 cursor-pointer uppercase ${
//                       activeTab === 1 ? 'text-[#ff8503]' : 'text-white'
//                     }`}
//                     onClick={() => handleTabChange(1)}
//                   >
//                     Originals
//                   </div>
//                   <div
//                     className={`ml-12 font-bold cursor-pointer uppercase business-tab
//                       ${activeTab === 2 ? 'text-[#ff8503] ' : 'text-white'}`}
//                     onClick={() => handleTabChange(2)}
//                   >
//                     Business
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#ff8503]"></div>
//                   <div className="absolute lg:bottom-[-4px] md:bottom-[-2px] lg:right-[40px] md:right-[40px] lg:h-[8px] md:h-[7px] lg:w-20 md:w-14  bg-[#ff8503] rounded"></div>
//                 </div>
//               </div>

//               <div className="mt-4 md:min-h-[300px]">
//                 {activeTab === 1 && (
//                   <div className="fade-in">
//                     <h2 className="text-white md:text-[35px] text-[50px]  uppercase font-bold mb-2 font-san">
//                       <a href="/production">
//                         SEIZE THE LIFE ON <span className="text-[#ff8503]">METAVERSE</span>
//                       </a>
//                     </h2>
//                     <p className="text-white text-justify font-pop font-light text-[14px] md:text-[12.5px]">
//                       {/* Gaming should be more than just entertainment; it should be an enriching
//                         experience and community-centric approach! Our team is passionate about
//                         incorporating elements of Vietnamese culture into your game, offering global
//                         next-generation players a unique and immersive adventure in the metaverse. */}
//                       {originalText || (
//                         <div>
//                           Gaming should be more than just entertainment; it should be an enriching
//                           experience and community-centric approach! Our team is passionate about
//                           incorporating elements of cultures into your game, offering global
//                           next-generation players a unique and immersive adventure in the metaverse.{' '}
//                         </div>
//                       )}
//                     </p>
//                   </div>
//                 )}
//                 {activeTab === 2 && (
//                   <div className="fade-in">
//                     <h2 className="text-white text-[50px] uppercase font-bold mb-2 md:text-[35px]">
//                       <a href="/production">
//                         EXPERIENCE JUST FOR{' '}
//                         <span className="text-[#ff8503]">FEARLESS BUSINESS</span>
//                       </a>
//                     </h2>
//                     <p className="text-white text-justify font-pop font-light text-[14px] md:text-[12.5px]">
//                       {/* From storytelling to gameplay mechanics, we tailor every aspect of your game
//                         to resonate with the target audience, ensuring an unforgettable experience.
//                         We work closely with you to bring your game concept to life. Whether it's a
//                         historical epic, a fantastical journey, or a modern adventure, LEVEL UP
//                         STUDIO are here to turn your vision into a captivating reality. */}
//                       {businessText || (
//                         <div>
//                           From storytelling to gameplay mechanics, we tailor every aspect of your
//                           game to resonate with the target audience, ensuring an unforgettable
//                           experience. We work closely with you to bring your game concept to life.
//                           Whether it's a historical epic, a fantastical journey, or a modern
//                           adventure, LEVEL UP STUDIO are here to turn your vision into a captivating
//                           reality.
//                         </div>
//                       )}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="h-full w-full lg:flex-1 md:w-[50%] px-[10px] justify-center items-center lg:order-2 md:order-1">
//             <img
//               src={LogoWeb}
//               alt="Your Image"
//               className="w-full h-fit md:h-[100%] object-cover bg-center bg-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import './ProductionCard.scss';
import LogoWeb from '../../assets/images/main_logo_v2.png';

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
      <div className="card-container p-[15px] mx-4 lg:mx-16">
        <div className="grid grid-cols-2 items-center justify-center">
          {/* Tabs */}
          <div className="px-[4px] lg:order-1  md:order-1 ">
            <div className="bg-[#1f2029] px-4 py-4 md:px-[35px] md:py-[48px]">
              <div className="nav-link ">
                <div className="flex mb-4 md:mb-[30px] pb-4 relative">
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
                      ${activeTab === 2 ? 'text-[#ff8503] ' : 'text-white'}`}
                    onClick={() => handleTabChange(2)}
                  >
                    Business
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#ff8503]"></div>
                  <div className="absolute lg:bottom-[-4px] md:bottom-[-2px] lg:right-[40px] md:right-[40px] lg:h-[8px] md:h-[7px] lg:w-20 md:w-14  bg-[#ff8503] rounded"></div>
                </div>
              </div>

              <div className="mt-4 md:min-h-[300px]">
                {activeTab === 1 && (
                  <div className="fade-in">
                    <h2 className="text-white lg:text-[50px] md:text-[35px]  uppercase font-bold mb-2 font-san">
                      <a href="/production">
                        SEIZE THE LIFE ON <span className="text-[#ff8503]">METAVERSE</span>
                      </a>
                    </h2>
                    <p className="text-white text-justify font-pop font-light xl:text-[16px] lg:text-[14px] md:text-[12.5px] ">
                      {/* Gaming should be more than just entertainment; it should be an enriching
                        experience and community-centric approach! Our team is passionate about
                        incorporating elements of Vietnamese culture into your game, offering global
                        next-generation players a unique and immersive adventure in the metaverse. */}
                      {originalText ||
                        `
                          Gaming should be more than just entertainment; it should be an enriching
                          experience and community-centric approach! Our team is passionate about
                          incorporating elements of cultures into your game, offering global
                          next-generation players a unique and immersive adventure in the metaverse.
                        `}
                    </p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="fade-in">
                    <h2 className="text-white lg:text-[50px] md:text-[35px] uppercase font-bold mb-2">
                      <a href="/production">
                        EXPERIENCE JUST FOR{' '}
                        <span className="text-[#ff8503]">FEARLESS BUSINESS</span>
                      </a>
                    </h2>
                    <p className="text-white text-justify font-pop font-light xl:text-[16px] lg:text-[14px] md:text-[12.5px]  ">
                      {/* From storytelling to gameplay mechanics, we tailor every aspect of your game
                        to resonate with the target audience, ensuring an unforgettable experience.
                        We work closely with you to bring your game concept to life. Whether it's a
                        historical epic, a fantastical journey, or a modern adventure, LEVEL UP
                        STUDIO are here to turn your vision into a captivating reality. */}
                      {businessText ||
                        `
                          From storytelling to gameplay mechanics, we tailor every aspect of your
                          game to resonate with the target audience, ensuring an unforgettable
                          experience. We work closely with you to bring your game concept to life.
                          Whether it's a historical epic, a fantastical journey, or a modern
                          adventure, LEVEL UP STUDIO are here to turn your vision into a captivating
                          reality.
                        `}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="h-full flex justify-center items-center lg:order-2 md:order-2">
            <img
              src={LogoWeb}
              alt="Your Image"
              className="w-full object-cover bg-center bg-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
