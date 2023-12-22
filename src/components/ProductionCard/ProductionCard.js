import React, { useState } from 'react';

export default function ProductionCard() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="card-container p-[15px] mx-16">
      <div className="flex items-center justify-between">
        {/* Tabs */}
        <div className="bg-black w-1/2 px-[43px] py-[48px]">
          <div className="nav-link relative">
            <div className="flex mb-[30px] pb-[36px] relative">
              <div
                className={`font-bold mr-2 cursor-pointer uppercase ${
                  activeTab === 1 ? 'text-orange-700' : 'text-white'
                }`}
                onClick={() => handleTabChange(1)}
              >
                Originals
              </div>
              <div
                className={`font-bold cursor-pointer uppercase before:content-['-'] before:font-bold before:mr-5 before:text-gray-500  ${
                  activeTab === 2 ? 'text-orange-700' : 'text-white'
                }`}
                onClick={() => handleTabChange(2)}
              >
                Business
                <div className="absolute bottom-[-5px] left-[500px] right-[40px] h-[8px] bg-orange-700 rounded"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-orange-700"></div>
            </div>
          </div>
          <div className="mt-4">
            {activeTab === 1 && (
              <div>
                <h2 className="text-white text-[50px] uppercase font-bold mb-2">
                  SEIZE THE LIFE ON <span className="text-orange-700">METAVERSE</span>
                </h2>
                <p className="text-white text-justify">
                  Gaming should be more than just entertainment; it should be an enriching
                  experience and community-centric approach! Our team is passionate about
                  incorporating elements of Vietnamese culture into your game, offering global
                  next-generation players a unique and immersive adventure in the metaverse.
                </p>
              </div>
            )}
            {activeTab === 2 && (
              <div className="relative">
                <h2 className="text-white text-[50px] uppercase font-bold mb-2">
                  EXPERIENCE JUST FOR FEARLESS BUSINESS{' '}
                  <span className="text-orange-700">OFFER</span>
                </h2>
                <p className="text-white text-justify">
                  From storytelling to gameplay mechanics, we tailor every aspect of your game to
                  resonate with the target audience, ensuring an unforgettable experience. We work
                  closely with you to bring your game concept to life. Whether it's a historical
                  epic, a fantastical journey, or a modern adventure, LEVEL UP STUDIO are here to
                  turn your vision into a captivating reality.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tab content and Image */}
        <div className="tab-content-img flex w-1/2">
          {/* Image */}
          <div className="">
            <img
              src="https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/168_84_1060_636/master/1060.jpg?width=1200&quality=85&auto=format&fit=max&s=5c5b07b8cc96af633881fb903fb14a83"
              alt="Your Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
