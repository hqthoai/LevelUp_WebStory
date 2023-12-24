import React, { useState } from 'react';
import { FaMagnifyingGlass, FaRegPenToSquare } from 'react-icons/fa6';
import { TextField } from '@mui/material';

const Header = () => {
  const [searchHover, setSearchHover] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [open, setOpen] = useState(false);
  const [hoverFlag, setHoverFlag] = useState(true);

  return (
    <div className="w-full h-[100px] flex justify-around  bg-[#1f2029] fixed items-center ">
      {/* Logo */}
      <div className="flex  flex-col justify-between items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png"
          alt="Logo"
          className={`w-[62px] h-[49px] cursor-pointer block m-auto  `}
        />
        <label
          className={`text-[#980B0B] duration-200 lg:text-[20px] sm:text-[30px] min-[320px]:text-[30px] font-semibold`}
        >
          Universe Fitness
        </label>
      </div>

      {/* Navigation */}
      <div className="w-[55%] h-[100%]">
        <ul className="flex w-full h-[100%]  items-center text-lg text-white font-mono leading-10 font-semibold">
          <div className="relative " onMouseOver={() => setOpen(true)}>
            <li className=" relative h-[100px] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[20deg] flex items-center">
              <div className="transform skew-x-[20deg] tracking-tighter">About Us</div>
            </li>

            <div
              className={`absolute top-full left-[-20px] bg-[#1a1b29] w-[200px] transition-all transform origin-top duration-300 z-50  ${
                open ? 'scale-y-100' : 'scale-y-0'
              }
                }`}
              onMouseLeave={() => {
                setOpen(false);
              }}
            >
              <ul className="flex flex-col py-4 ">
                <li className="px-4 w-full hover:bg-[#1a1b21] hover:text-orange-700 ">About US</li>
                <li className="px-4 w-full hover:bg-[#1a1b21] hover:text-orange-700 ">
                  Our mission
                </li>
              </ul>
            </div>
          </div>
          <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
            <div className="transform skew-x-[30deg] tracking-tighter">Our squad</div>
          </li>
          <li className="h-[100%] px-6 hover:bg-[#1a1b21] border-b-4 border-solid border-transparent hover:border-orange-700 hover:text-orange-700 transform -skew-x-[30deg] flex items-center">
            <div className="transform skew-x-[30deg] tracking-tight">Production</div>
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
          <div className=" border-solid border-transparent text-normal leading-6 font-mono  font-semibold">
            Log-in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
