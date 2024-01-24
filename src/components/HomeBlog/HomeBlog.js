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
    <div className="ml-8 mr-8 mb-16">
      <div className="flex items-start justify-between mt-8">
        <div className="text-white w-[300px] h-[230px] ">
          <div className="text-[#ff8503] font-bold font-pop text-[24px] ">CHECK OUT OUR NEXT</div>
          <div className="text-white text-[24px] font-bold font-pop mt-2 w-[300px]">
            ARTICLES on GAMING and DEVELOPING!
          </div>
          <div className="mt-2 text-[#cfcfcf] font-pop text-justify">
            We're on a mission to fuel your excitement with the latest news from the metaverse, and
            the thrilling stories crafted by the talented individuals at LEVEL UP STUDIO!
          </div>
          <div className="mt-10">
            <a
              className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold font-pop uppercase inline-block text-[16px] transition-all duration-300"
              href="/blog"
              style={{
                clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
              }}
            >
              SEE MORE ARTICLES
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 text-center">
          <div className="text-[#FF8503] font-bold font-pop text-[24px] ">LATEST NEWS</div>

          <div className="mt-[30px] cursor-pointer" onClick={navigateBlog}>
            <img src={HomeBlogThum} alt="Blog 2" className="h-[188px] w-[295px]" />
          </div>

          <p className="text-white text-[24px]  font-bold font-pop mt-[20px] w-[300px]">
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
