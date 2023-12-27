import React, { useState } from 'react';
// import ImgLink from './url.png';
import { FaSquareTwitter, FaTwitch, FaPinterest, FaVimeo } from 'react-icons/fa6';

const listDistribute = [
  {
    id: 1,
    memImg: 'https://mfiles.alphacoders.com/100/1005060.png',
    memName: 'Nguyễn Thanh Duy',
    memPosition: 'FOUNDER & CEO',
  },
  {
    id: 2,
    memImg: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    memName: 'Đào Chí Hào',
    memPosition: 'TECHLEAD',
  },
  {
    id: 3,
    memImg:
      'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
    memName: 'Nguyễn Phùng Yến Nhi',
    memPosition: 'ART DIRECTOR',
  },

  {
    id: 4,
    memImg: 'https://mfiles.alphacoders.com/100/1005060.png',
    memName: 'Trương Thụy Khánh An',
    memPosition: '  HEAD OF MARKETING RESEARCH & DEVELOPMENT',
  },
  {
    id: 5,
    memImg: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    memName: 'Võ Thị Mỹ Linh',
    memPosition: 'GAME DESIGNER',
  },
  {
    id: 6,
    memImg:
      'https://e1.pxfuel.com/desktop-wallpaper/502/361/desktop-wallpaper-rengoku-smile-rengoku-death.jpg',
    memName: 'Nguyễn Phạm Tiến Hưng',
    memPosition: '3D DESIGNER & PROGRAMMER',
  },
  {
    id: 7,
    memImg: 'https://mfiles.alphacoders.com/100/1005060.png',
    memName: 'Nguyễn Trọng Hữu',
    memPosition: '3D ARTIST',
  },
  {
    id: 8,
    memImg: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    memName: 'Nguyễn Thị Minh Phúc',
    memPosition: '2D ARTIST',
  },
  {
    id: 9,
    memImg: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    memName: 'Võ Hoàng Vương',
    memPosition: 'DEVELOPER',
  },
  {
    id: 10,
    memImg: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    memName: 'Tống Phát Vương',
    memPosition: 'DEVELOPER',
  },
  {
    id: 11,
    memImg: 'https://i.ytimg.com/vi/hZ5KbowMIN0/maxresdefault.jpg',
    memName: 'Nguyễn Quốc Trung',
    memPosition: 'DEVELOPER',
  },
];

function MemOurTeam({ title }) {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="bg-[#1c121f] h-full flex items-center flex-col mb-[110px]">
      <div className="flex justify-center items-center mt-16">
        <div className="content-around text-center">
          <h3 className="uppercase text-white font-bold text-[24px] pb-4">
            {title || <div>MEET OUR TEAM</div>}
          </h3>
          <div className="flex justify-center items-center">
            {/* <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/section_line.png"
              alt="section-line"
            /> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8  mt-10">
        {listDistribute.map((mem, index) => (
          <div className="bg-black w-[250px] h-[300px] p-3">
            <div key={index} className="relative w-[70%] h-[120px] mx-auto my-4 ">
              <div
                className="w-full h-full border-2 border-transparent group  relative "
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="overflow-hidden w-full h-full rounded-[5px] ">
                  <img
                    src={mem.memImg}
                    className="w-full h-full object-cover cursor-pointer group-hover:border-[#ff8502]"
                    alt={mem.memName}
                  />
                </div>
                <div className="text-white text-center items-center justify-between mt-4">
                  <p className="text-[16px] uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] from-10% via-purple-500 via-30% to-[#18ffff] to-90%">
                    {mem.memName}
                  </p>
                  <p className=" font-semibold text-[12px]">{mem.memPosition}</p>
                </div>
                {isHovered === index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity cursor-pointer text-[#ff8502]">
                    <a target="_blank" href={`https://www.facebook.com/${mem.name}`}>
                      {/* <img src={ImgLink} className="h-[30px] w-[30px]" alt="Link-Profile" /> */}
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* {listDistribute.map((text, index) => {
              <div className="text-center items-center justify-between text-white mt-12">
              <p className="uppercase font-bold text-[18px]">{text.memName}</p>

              <p className="text-white font-bold">{text.memPosition}</p>
            </div>
            })} */}
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

export default MemOurTeam;
