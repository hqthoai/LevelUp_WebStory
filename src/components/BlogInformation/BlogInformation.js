import React from 'react';
import article11 from '../../assets/images/article-11.png';
import article21 from '../../assets/images/article2-thumbnail.png';
import article31 from '../../assets/images/article3-1.png';
import article41 from '../../assets/images/article4-1.png';
import { Divider } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const blogData = [
  { blogImage: article11, blogName: 'ROBLOX ACHIEVES REMARKABLE GROWTH IN 2023' },
  { blogImage: article21, blogName: "ROBLOX'S PHENOMENAL RISE IN VIETNAM" },
  { blogImage: article31, blogName: 'FROM NIKELAND TO GUCCI TOWN' },
  { blogImage: article41, blogName: 'METAVERSE AND MONEY' },
];

function BlogInformation() {
  const navigate = useNavigate();
  const goToBlogDetail = (blogId) => {
    navigate(`/blog/${blogId}`);
  };
  return (
    <div>
      <div className="mt-8 p-16">
        <div className="flex flex-col items-center">
          {blogData.map((blog, index) => (
            <div className="mb-16" onClick={() => goToBlogDetail(index + 1)}>
              <div key={index} className=" cursor-pointer">
                <img src={blog.blogImage} className="text-white w-[800px] h-[450px] " />
                <p className="font-pop font-bold  text-white text-[24px] mt-4 hover:pointer">
                  {/* {blog.blogImage} */}
                  {blog.blogName}
                </p>
              </div>
              <div className="border-b-2 border-[#8f8c8c] mt-2"></div>
              <div className="mb-10 mt-4">
                <div
                  className="btn bg-[#ff8503] px-[33px] py-[18px] text-white font-bold uppercase inline-block text-[16px] transition-all duration-300"
                  style={{
                    clipPath: 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
                  }}
                >
                  read more
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogInformation;
