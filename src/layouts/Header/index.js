import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass, FaRegPenToSquare } from 'react-icons/fa6';
import './index.scss';
import { TextField } from '@mui/material';
import 'animate.css';

import imgLink from './luanmeme.jpg';
const Header = () => {
  const [searchHover, setSearchHover] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [open, setOpen] = useState(false);
  const [hoverFlag, setHoverFlag] = useState(true);
  const [subNavBarToggle, setSubNavBarToggle] = useState(false);
  // animation scrolling for sub-navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Kiểm tra scrollPosition và cập nhật trạng thái của isFixed
      if (window.scrollY > 150) {
        setSubNavBarToggle(true);
      } else {
        setSubNavBarToggle(false);
      }
    };

    // Thêm sự kiện cuộn trang
    window.addEventListener('scroll', handleScroll);
    // Xóa sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header-container relative">
      <div
        className={` w-full h-[110px] duration-2000 animate__animated flex justify-around bg-[#1f2029] ${
          subNavBarToggle ? 'fixed animate__fadeInDown ' : ' header-before logo-after'
        } items-center`}
        style={{ zIndex: 999 }}
      >
        {/* Logo */}
        <a className="flex flex-col justify-between items-center " href="/">
          <img
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
            src={imgLink}
            alt="Logo"
            className={`w-[62px] h-[49px] cursor-pointer block m-auto rounded-[5px]`}
          />
          <label
            className={`text-[#980B0B] duration-200 lg:text-[20px] sm:text-[30px] min-[320px]:text-[30px] font-semibold`}
          >
            Luan Luan
          </label>
        </a>

        {/* Navigation */}
        <div className="w-[55%] h-[100%] uppercase">
          <ul className="flex w-full h-[100%]  items-center text-lg text-white font-mono leading-10 font-semibold">
            <div
              className="relative "
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => {
                setOpen(false);
              }}
            >
              <li className=" relative h-[110px] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[20deg] flex items-center">
                <div className="transform skew-x-[20deg] tracking-tighter">About Us</div>
              </li>
              <div
                className={`absolute top-full uppercase left-[-21px] bg-[#1a1b29] w-[200px] transition-all transform origin-top duration-300 z-50  ${
                  open ? 'scale-y-100 ' : 'scale-y-0 '
                }
                }`}
                onMouseLeave={() => {
                  setOpen(false);
                }}
              >
                <ul className="flex flex-col py-4 ">
                  <li className="px-4 w-full hover:bg-[#1a1b21] hover:text-orange-700 ">
                    <a href="/about-us" className="transform skew-x-[30deg] tracking-tight">
                      About US
                    </a>
                  </li>
                  <li className="px-4 w-full hover:bg-[#1a1b21] hover:text-orange-700 ">
                    <a href="/our-mission" className="transform skew-x-[30deg] tracking-tight">
                      Our mission
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <a href="/our-team" className="transform skew-x-[30deg] tracking-tighter">
                Our squad
              </a>
            </li>
            <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <a href="/production" className="transform skew-x-[30deg] tracking-tight">
                Production
              </a>
            </li>
            <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <div className="transform skew-x-[30deg] tracking-tight">Games</div>
            </li>
            <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <div className="transform skew-x-[30deg] tracking-tight">Shop</div>
            </li>
            <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <div className="transform skew-x-[30deg] tracking-tight">Blog</div>
            </li>
            <li
              className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4
                        \border-solid border-transparent hover:border-orange-700
            hover:text-orange-700 transform -skew-x-[30deg] flex items-center"
            >
              <div className={`transform skew-x-[30deg] tracking-tight`}>Contacts</div>
            </li>
          </ul>
        </div>

        {/* search - Login  */}
        <div className="h-[100%] flex  items-center  space-x-4 ">
          {/* search */}
          <div
            className="flex text-white items-center relative space-x-3 pr-6 h-[50%] border-r-8 border-solid  border-[#15151a]"
            onMouseOver={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
          >
            <input
              className={`  text-white absolute focus:border-b-4 bg-[#1f2029] focus:border-transparent focus:outline-none  focus:border-orange-700 right-[50px] duration-300 ${
                searchHover ? 'w-[180px] px-3 py-2' : 'w-0'
              }`}
              placeholder="Enter..."
              onChange={(e) => setSearchKey(e.target.value)}
              value={searchKey}
            />
            <FaMagnifyingGlass className={searchHover ? 'text-orange-800' : 'text-white'} />
          </div>
          <div className="bg-[#1a1b21] p-3 flex items-center space-x-3 border-r-4 border-solid border-orange-700 text-white hover:text-orange-700">
            <div className="w-[30px] h-[30px] bg-[#15151a] flex items-center justify-center ">
              <FaRegPenToSquare />
            </div>
            <div className=" border-solid border-transparent text-normal leading-6 font-mono  font-semibold uppercase">
              Log-in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
