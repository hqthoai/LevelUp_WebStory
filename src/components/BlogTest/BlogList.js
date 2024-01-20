import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}>
            <h3>{post.title}</h3>
            {post.image && <img src={post.image} alt="Featured" style={{ maxWidth: '200px' }} />}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
