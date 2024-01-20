import React from 'react';
import AboutUs from './AboutUs';
import BlogInformation from '../components/BlogInformation/BlogInformation';
import MyComponent from '../components/BlogTest/Editor22';

function Blog() {
  return (
    <div>
      <AboutUs title={'Blog'} />
      <BlogInformation />
    </div>
  );
}

export default Blog;
