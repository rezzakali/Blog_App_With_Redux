import React from 'react';
import { Link } from 'react-router-dom';

function RelatedBlogItem({ relatedBlog }) {
  const { image, title, tags, createdAt, id } = relatedBlog;
  const tag = tags?.map((tag) => `#${tag}`).join(' , ');

  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          <span>{tag}</span>
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
}

export default RelatedBlogItem;
