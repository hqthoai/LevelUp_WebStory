import React from 'react';
import HomeBlog2 from './HomeBlog-2';
import { useNavigate } from 'react-router-dom';
import HomeBlogThum from '../../assets/images/HomeBlogThumbnail.jpg';

function HomeBlog() {
  const navigate = useNavigate();
  const navigateBlog = () => {
    navigate('/blog/4');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="md:mx-10 mb-16">
      <div className="grid grid-cols-4 gap-10 mt-8">
        <div className="text-white md:min-h-[230px]  ">
          <div className="text-[#ff8503] font-bold font-pop lg:text-[24px] md:text-[18px] ">
            CHECK OUT OUR NEXT
          </div>
          <div className="text-white lg:text-[18px] md:text-[16px] font-bold font-pop mt-2">
            ARTICLES on GAMING and DEVELOPING!
          </div>
          <div className="mt-2 text-[#cfcfcf] font-pop text-justify lg:text-[16px] md:text-[14px] ">
            We're on a mission to fuel your excitement with the latest news from the metaverse, and
            the thrilling stories crafted by the talented individuals at LEVEL UP STUDIO!
          </div>
          <div className="lg:mt-10 md:mt-4">
            <a
              className="btn bg-[#ff8503] lg:px-[20px] lg:py-[16px] md:p-3 text-white font-bold font-pop uppercase inline-block lg:text-[16px] md:text-[12px] transition-all duration-300"
              href="/blog"
              style={{
                clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
              }}
            >
              SEE MORE ARTICLES
            </a>
          </div>
        </div>

        <div className="justify-center items-center text-center">
          <div className="text-[#FF8503] font-bold font-pop lg:text-[24px] md:text-[18px] ">
            LATEST NEWS
          </div>

          <div
            className="mt-[30px] cursor-pointer md:w-full flex justify-center "
            onClick={navigateBlog}
          >
            <img
              src={HomeBlogThum}
              alt="Blog 2"
              className="lg:h-[188px] lg:w-[295px] md:h-[150px] md:w-[230px]"
            />
          </div>

          <p className="text-white lg:text-[24px] md:text-[18px] font-bold font-pop mt-[20px]">
            Metaverse and Money
          </p>
        </div>
        <div className="col-span-2 mt-[-20px]">
          <HomeBlog2 />
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;
