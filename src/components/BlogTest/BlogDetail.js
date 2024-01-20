// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      {post.image && <img src={post.image} alt="Featured" style={{ maxWidth: '400px' }} />}
      <p>Content: {post.content}</p>
    </div>
  );
};

export default BlogDetail;
