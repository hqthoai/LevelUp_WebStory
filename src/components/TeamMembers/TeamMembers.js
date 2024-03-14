import React, { useState } from 'react';
import ImgLink from './url.png';
import NguyenThanhDuy from '../../assets/images/NguyenThanhDuy.jpg';
import NguyenPhungYenNhi from '../../assets/images/NguyenPhungYenNhi.jpg';
import DaoChiHao from '../../assets/images/DaoChiHao.jpg';
import SueHoang from '../../assets/images/SueHoang.jpg';
import TruongThuyKhanhAn from '../../assets/images/TruongThuyKhanhAn.jpg';

const listDistribute = [
  {
    imgLink: NguyenThanhDuy,
    position: 'FOUNDER & CEO',
    name: 'Nguyễn Thanh Duy',
  },
  {
    imgLink: SueHoang,
    position: 'CO-FOUNDER CHIEF CREATIVE OFFICER',
    name: 'Sue Hoàng',
  },
  {
    imgLink: NguyenPhungYenNhi,
    position: 'ART DIRECTOR',
    name: 'Nguyễn Phùng Yến Nhi',
  },
  {
    imgLink: DaoChiHao,
    position: 'TECHLEAD',
    name: 'Đào Chí Hào',
  },
  {
    imgLink: TruongThuyKhanhAn,
    position: 'HEAD OF MARKETING',
    name: 'Trương Thụy Khánh An',
  },
];

function TeamMembers({ title }) {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="bg-[#1c121f] h-[600px] flex items-center flex-col font-display">
      <div className="flex justify-center items-center">
        <div className="content-around text-center">
          <h3 className="uppercase text-white font-bold text-[24px] pb-4">
            {title || <div>MEET OUR SQUAD!</div>}
          </h3>
          <div className="flex justify-center items-center">
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/themes/halda/assets/img/images/section_line.png"
              alt="section-line"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 lg:gap-8 md:gap-4 justify-center items-center mt-10 ">
        {listDistribute.map((mem, index) => (
          <div className="bg-black lg:w-[230px] lg:h-[300px] md:w-[130px] md:h-[220px] lg:p-3 border-b-2 border-[#242424]" key={index}>
            <div className="relative lg:w-[120px] lg:h-[120px] mx-auto my-4 md:w-[80px] md:h-[80px] ">
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

            <div className="text-center">
              <p className="lg:text-[16px] md:text-[13.5px] uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] from-10% via-purple-500 via-30% to-[#18ffff] to-90%">
                {mem.position}
              </p>
              <div className="flex items-center justify-center ">
                <p className="lg:text-[14px] md:text-[13px] text-white mt-4 font-quicksand font-bold">{mem.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold uppercase inline-block text-[16px] transition-all duration-300"
          href="/our-team"
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
