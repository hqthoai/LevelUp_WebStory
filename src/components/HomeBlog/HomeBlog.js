import React from 'react';
import HomeBlog2 from './HomeBlog-2';

function HomeBlog() {
  return (
    <div className="ml-8 mr-8 mb-16">
      <div className="text-white font-bold font-pop text-[32px] ">PRIZE POOL</div>
      <div className="flex items-center justify-between mt-8">
        <div className="text-white w-[300px] h-[230px] mt-[-120px]">
          <div className="text-[#ff8503] font-bold font-pop ">CHECK OUT OUR NEXT</div>
          <div className="text-white text-[20px] font-bold font-pop mt-2">
            ARTICLES on GAMING and DEVELOPING!
          </div>
          <div className="mt-2 text-[#cfcfcf] font-pop text-justify">
            We're on a mission to fuel your excitement with the latest news from the metaverse,
            development, and the thrilling stories crafted by the talented individuals at LEVEL UP
            STUDIO!
          </div>
          <div className="mt-10">
            <a
              className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold font-pop uppercase inline-block text-[16px] transition-all duration-300"
              href="/our-team"
              style={{
                clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
              }}
            >
              SEE MORE ARTICLES
            </a>
          </div>
        </div>
        <div>
          {/* <div className="text-white font-bold font-pop text-[20px]">PRIZE POOL</div> */}
          <div>
            <img
              src="https://themebeyond.com/demo/haldalive/wp-content/uploads/2022/04/prize_img.png"
              alt="Blog 2"
            />
          </div>
        </div>
        <div>
          <HomeBlog2 />
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;
