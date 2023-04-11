import React from 'react';
import { Link } from 'react-router-dom';

function SingleBlog({ blog }) {
  const { image, title, likes, isSaved, createdAt, tags, id } = blog;
  const tag = tags?.map((tag) => `#${tag}`).join(' , ');

  return (
    <div className="lws-card">
      <Link to={`blogs/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          <span>{tag}</span>
        </div>
        <div className="flex gap-2 mt-4">
          {isSaved ? <span className="lws-badge">Saved</span> : ''}
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
