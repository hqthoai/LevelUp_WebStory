import React, { useState } from 'react';
import Crown from '../../assets/images/crown.jpg';

const listServices = [
  {
    imgService: Crown,
    name: 'GAME Development',
  },
  {
    imgService: Crown,
    name: 'APP Development',
  },
  {
    imgService: Crown,

    name: 'MARKETING Research',
  },
  {
    imgService: Crown,
    name: 'SYSTEM Testing',
  },
  {
    imgService: Crown,

    name: 'ART Design',
  },
  {
    imgService: Crown,
    name: 'BLOCKCHAIN',
  },
];

function HomeOurServices({ title }) {
    const [hoveredService, setHoveredService] = useState(null);

    const handleMouseEnter = (index) => {
      setHoveredService(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredService(null);
    };

  return (
    <div className="bg-[#1c121f] h-[600px] flex items-center flex-col font-display">
      <div className="flex justify-center items-center">
        <div className="content-around text-center">
          <h3 className="uppercase text-white font-bold text-[30px] pb-4">
            {title || <div>our services</div>}
          </h3>
          <div className="flex justify-center items-center">
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/section_line.png"
              alt="section-line"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 justify-center items-center mt-10 ">
        {listServices.map((service, index) => (
          <div className="  h-[300px] mr-4" key={index}>
            {/* <div
              key={index}
              className="border-2 border-[#232323] mx-auto my-4 "
            > */}
             <div
              className={`border-2 border-[#232323] mx-auto my-4 ${
                hoveredService === index ? 'group-hover:border-[#ff8502]' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={service.imgService}
                className="w-[360px] h-full object-contain cursor-pointer group-hover:border-[#ff8502]"
                alt={service.name}
              />
            </div>
            <div className="flex items-center justify-center text-white mt-6">
              <p className=" font-bold text-[18px]">{service.name}</p>
            </div>
            {hoveredService === index && (
              <div className="flex items-center justify-center text-white mt-2">
                <p>Contact Us!</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default HomeOurServices;
