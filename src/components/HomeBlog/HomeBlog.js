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
    <div className="lg:ml-8 lg:mr-8 md:p-4 lg:p-0 mb-16">
      <div className="flex items-start lg:justify-between md:justify-around mt-8">
        <div className="text-white lg:w-[300px] lg:h-[230px] md:w-[250px] md:h-[230px]  ">
          <div className="text-[#ff8503] font-bold font-pop lg:text-[24px] md:text-[18px] ">
            CHECK OUT OUR NEXT
          </div>
          <div className="text-white lg:text-[24px] md:text-[18px] font-bold font-pop mt-2 w-[300px]">
            ARTICLES on GAMING and DEVELOPING!
          </div>
          <div className="mt-2 text-[#cfcfcf] font-pop text-justify">
            We're on a mission to fuel your excitement with the latest news from the metaverse, and
            the thrilling stories crafted by the talented individuals at LEVEL UP STUDIO!
          </div>
          <div className="mt-10">
            <a
              className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold font-pop uppercase inline-block lg:text-[16px] md:text-[12px] transition-all duration-300"
              href="/blog"
              style={{
                clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
              }}
            >
              SEE MORE ARTICLES
            </a>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-1 text-center md:flex-col md:justify-center">
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

          <p className="text-white lg:text-[24px] md:text-[18px]  font-bold font-pop mt-[20px] w-[300px]">
            Metaverse and Money
          </p>
        </div>
        <div>
          <HomeBlog2 />
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;
