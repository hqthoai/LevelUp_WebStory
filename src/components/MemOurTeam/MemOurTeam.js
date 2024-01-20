import React, { useState } from 'react';
import NguyenThanhDuy from '../../assets/images/NguyenThanhDuy.jpg';
import DaoChiHao from '../../assets/images/DaoChiHao.jpg';
import NguyenPhungYenNhi from '../../assets/images/NguyenPhungYenNhi.jpg';
import TruongThuyKhanhAn from '../../assets/images/TruongThuyKhanhAn.jpg';
import VoThiMYLinh from '../../assets/images/VoThiMYLinh.jpg';
import NguyenPhamTienHung from '../../assets/images/NguyenPhamTienHung.jpg';
import NguyenHuuTrong from '../../assets/images/NguyenHuuTrong.jpg';
import NguyenThiMinhPhuc from '../../assets/images/NguyenThiMinhPhuc.jpg';
import VoHoangVuong from '../../assets/images/VoHoangVuong.jpg';
import TongVuongPhat from '../../assets/images/TongVuongPhat.jpg';
import NguyenQuocTrung from '../../assets/images/NguyenQuocTrung.jpg';

const listDistribute = [
  {
    id: 1,
    memImg: NguyenThanhDuy,
    memName: 'Nguyễn Thanh Duy',
    memPosition: 'FOUNDER & CEO',
  },
  {
    id: 2,
    memImg: DaoChiHao,
    memName: 'Đào Chí Hào',
    memPosition: 'TECHLEAD',
  },
  {
    id: 3,
    memImg: NguyenPhungYenNhi,

    memName: 'Nguyễn Phùng Yến Nhi',
    memPosition: 'ART DIRECTOR',
  },

  {
    id: 4,
    memImg: TruongThuyKhanhAn,
    memName: 'Trương Thụy Khánh An',
    memPosition: 'GAME DIRECTOR',
  },
  {
    id: 5,

    memImg: VoThiMYLinh,
    memName: 'Võ Thị Mỹ Linh',
    memPosition: 'GAME DESIGNER',
  },
  {
    id: 6,
    memImg: NguyenPhamTienHung,
    memName: 'Nguyễn Phạm Tiến Hưng',
    memPosition: '3D DESIGNER & PROGRAMMER',
  },
  {
    id: 7,
    memImg: NguyenHuuTrong,
    memName: 'Nguyễn Trọng Hữu',
    memPosition: '3D ARTIST',
  },
  {
    id: 8,
    memImg: NguyenThiMinhPhuc,
    memName: 'Nguyễn Thị Minh Phúc',
    memPosition: '2D ARTIST',
  },
  {
    id: 9,
    memImg: VoHoangVuong,
    memName: 'Võ Hoàng Vương',
    memPosition: 'DEVELOPER',
  },
  {
    id: 10,
    memImg: TongVuongPhat,
    memName: 'Tống Phát Vương',
    memPosition: 'DEVELOPER',
  },
  {
    id: 11,
    memImg: NguyenQuocTrung,
    memName: 'Nguyễn Quốc Trung',
    memPosition: 'DEVELOPER',
  },
  {
    id: 12,
    memImg: TruongThuyKhanhAn,
    memName: 'Trương Thụy Khánh An',
    memPosition: 'HEAD OF MARKETING RESEARCH & DEVELOPMENT',
  },
];

function MemOurTeam({ title }) {
  return (
    <div className="bg-[#1c121f] h-full flex items-center flex-col mb-[110px] font-display">
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
              <div className="w-full h-full border-2 border-transparent group  relative ">
                <div className="overflow-hidden w-full h-full rounded-[5px] ">
                  <img
                    src={mem.memImg}
                    className="w-full h-full object-contain cursor-pointer group-hover:border-[#ff8502]"
                    alt={mem.memName}
                  />
                </div>
                <div className="text-white text-center items-center justify-between mt-4">
                  {/* <p className="text-[16px] uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] from-10% via-purple-500 via-30% to-[#18ffff] to-90%">
                    {mem.memName}
                  </p>
                  <p className="text-[12px] mt-2  font-medium font-pop">{mem.memPosition}</p> */}
                  <p className="text-[16px] uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] from-10% via-purple-500 via-30% to-[#18ffff] to-90%">
                    {mem.memPosition}
                  </p>
                  <p className="text-[12px] mt-2  font-medium font-pop">{mem.memName}</p>
                </div>
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
      {/* <div className="mt-10">
        <a
          className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold uppercase inline-block text-[16px] transition-all duration-300"
          href="#"
          style={{
            clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
          }}
        >
          Show our full team
        </a>
      </div> */}
    </div>
  );
}

export default MemOurTeam;
