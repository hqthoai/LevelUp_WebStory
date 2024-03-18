import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import 'animate.css';
import './index.css';

import LevelUpLogo from '../../../assets/images/main_logo_v2.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const [searchHover, setSearchHover] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [open, setOpen] = useState(false);
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
    <div className="header-container relative font-display">
      <div
        className={`w-full lg:h-20 md:h-16 duration-2000 animate__animated flex justify-between bg-[#1f2029] px-4  ${
          subNavBarToggle ? 'fixed animate__fadeInDown' : 'header'
        } items-center`}
        style={{ zIndex: 9999 }}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={LevelUpLogo}
            alt="Logo"
            className={` ${
              subNavBarToggle
                ? 'lg:w-[110px] lg:h-20 md:w-[6rem] md:h-[5rem]'
                : 'lg:w-[110px] lg:h-20 md:w-[6rem] md:h-[6rem] mt-4 '
            }  cursor-pointer block m-auto rounded-[5px] object-cover`}
          />
        </Link>

        {/* Navigation */}
        <div className="lg:w-[60%] md:w-[70%] h-full uppercase">
          <ul className="flex w-full h-full items-center md:text-[12px] lg:text-[15px] text-white lg:leading-6 font-semibold md:font-medium">
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => {
                setOpen(false);
              }}
            >
              <li className=" relative lg:h-20 semilg:h-16 md:h-16  lg:px-6 md:px-4 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[20deg] flex items-center">
                <div className="transform skew-x-[20deg] tracking-tighter">About Us</div>
              </li>
              <div
                className={`absolute top-full uppercase left-[-21px] bg-[#1a1b29]  w-[200px] transition-all transform origin-top duration-300 z-50  ${
                  open ? 'scale-y-100 ' : 'scale-y-0 '
                }
                }`}
                onMouseLeave={() => {
                  setOpen(false);
                }}
              >
                <ul className="flex flex-col py-4 lg:text-[15px] md:text-[12px]">
                  <li className="px-4 w-full hover:bg-[#1a1b21] hover:text-orange-700 mb-3">
                    <Link to="/about-us" className="transform skew-x-[30deg] tracking-tight">
                      About US
                    </Link>
                  </li>
                  <li className="px-4 w-full hover:bg-[#1a1b21] hover:text-orange-700 ">
                    <Link to="/our-mission" className="transform skew-x-[30deg] tracking-tight">
                      Our mission
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <li className="h-[100%]  lg:px-6 md:px-4 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <Link to="/our-team" className="transform skew-x-[30deg] tracking-tighter">
                Our squad
              </Link>
            </li>
            <li className="h-[100%]  lg:px-6 md:px-4  hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <Link to="/production" className="transform skew-x-[30deg] tracking-tight">
                Production
              </Link>
            </li>
            <li className="h-[100%]  lg:px-6 md:px-4  hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <div className="transform skew-x-[30deg] tracking-tight">Games</div>
            </li>
            {/* <li className="h-[100%]  lg:px-6 md:px-4  hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <div className="transform skew-x-[30deg] tracking-tight">Shop</div>
            </li> */}
            <li className="h-[100%]  lg:px-6 md:px-4  hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
              <Link to="/blog" className="transform skew-x-[30deg] tracking-tight">
                Blog
              </Link>
            </li>
            <li
              className="h-[100%]  lg:px-6 md:px-4  hover:bg-[#1a1b21] border-b-4
                        \border-solid border-transparent hover:border-orange-700
            hover:text-orange-700 transform -skew-x-[30deg] flex items-center"
            >
              <div className={`transform skew-x-[30deg] tracking-tight`}>
                <Link to="/contact" className="transform skew-x-[30deg] tracking-tight">
                  Contacts
                </Link>
              </div>
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
          {/* <div className="bg-[#1a1b21] p-3 flex items-center space-x-3 border-r-4 border-solid border-orange-700 text-white hover:text-orange-700">
            <div className="w-[30px] h-[30px] bg-[#15151a] flex items-center justify-center ">
              <FaRegPenToSquare />
            </div>
            <div className=" border-solid border-transparent text-normal leading-6 font-mono  font-semibold uppercase">
              Log-in
            </div> 
            </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
