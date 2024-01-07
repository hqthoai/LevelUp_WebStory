import React, { useState } from 'react';
import ImgLink from './url.png';
import { FaSquareTwitter, FaTwitch, FaPinterest, FaVimeo } from 'react-icons/fa6';

const listDistribute = [
  {
    imgLink: 'https://mfiles.alphacoders.com/100/1005060.png',
    name: 'Thoại',
  },
  {
    imgLink: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    name: 'Luân',
  },
  {
    imgLink:
      'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
    name: 'Khoa',
  },
  {
    imgLink: 'https://mfiles.alphacoders.com/100/1005060.png',
    name: 'Thoại',
  },
  // {
  //   imgLink: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
  //   name: 'Luân',
  // },
  // {
  //   imgLink:
  //     'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
  //   name: 'Khoa',
  // },
  // {
  //   imgLink: 'https://mfiles.alphacoders.com/100/1005060.png',
  //   name: 'Thoại',
  // },
  // {
  //   imgLink: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
  //   name: 'Luân',
  // },
];

function TeamMembers({ title }) {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="bg-[#1c121f] h-[600px] flex items-center flex-col font-display">
      <div className="flex justify-center items-center">
        <div className="content-around text-center">
          <h3 className="uppercase text-white font-bold text-[24px] pb-4">
            {title || <div>active team members</div>}
          </h3>
          <div className="flex justify-center items-center">
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/section_line.png"
              alt="section-line"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 justify-center items-center mt-10 ">
        {listDistribute.map((mem, index) => (
          <div className="bg-black w-[250px] h-[300px] p-3 border-b-2 border-[#242424]" key={index}>
            <div  className="relative w-[120px] h-[120px] mx-auto my-4 ">
              <div
                className="w-full h-full rounded-full border-2 border-transparent group hover:border-[#ff8502] relative "
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="overflow-hidden w-full h-full rounded-full ">
                  <img
                    src={mem.imgLink}
                    className="w-full h-full object-cover cursor-pointer group-hover:border-[#ff8502]"
                    alt={mem.name}
                  />
                </div>
                {isHovered === index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity cursor-pointer text-[#ff8502]">
                    <a target="_blank" href={`https://www.facebook.com/${mem.name}`}>
                      <img src={ImgLink} className="h-[30px] w-[30px]" alt="Link-Profile" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center text-white mt-12">
              <p className="uppercase font-bold text-[18px]">Games Name</p>
              {/* <div className="flex text-zinc-300">
                <div className="mx-[3px]">
                  <FaSquareTwitter />
                </div>

                <div className="mx-[3px]">
                  <FaTwitch />
                </div>
                <div className="mx-[3px]">
                  <FaPinterest />
                </div>
                <div className="mx-[3px]">
                  <FaVimeo />
                </div>
              </div> */}
            </div>
            <div className="flex items-center justify-center uppercase mt-3">
              <p className="text-zinc-300 font-pop font-light">Sub name</p>
              {/* <p className="text-[#ff8502] text-[12px]">follow us</p> */}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold uppercase inline-block text-[16px] transition-all duration-300"
          href="#"
          style={{
            clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
          }}
        >
          Show our full team
        </a>
      </div>
    </div>
  );
}

export default TeamMembers;
