import React from 'react';
import Header from '../Header';

// import Footer from '../../Footer';
const defaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen  ">
      {/* <div className="flex flex-col pl-20 flex-wrap w-full h-screen "> */}
      <Header />
      <div className=" w-full bg-[#151212] justify-self-center mt-[90px] h-[100vh] ">
        {children}
      </div>

      {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
};

export default defaultLayout;
