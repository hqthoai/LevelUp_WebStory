import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/Loading';

// import Footer from '../../Footer';
const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col w-full  h-fit bg-[#151212] relative">
      {isLoading ? <Loading /> : <></>}
      <div>
        <Header />
        <div className=" w-full bg-[#151212] justify-self-center  h-fit ">{children}</div>
        <Footer />
      </div>
      {/* <div className="flex flex-col pl-20 flex-wrap w-full h-screen "> */}
      {/* </div> */}
    </div>
  );
};

export default DefaultLayout;
