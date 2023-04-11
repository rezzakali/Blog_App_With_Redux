import React from 'react';
import { useDispatch } from 'react-redux';
import { updateLikes, updateSaved } from '../../../features/blog/blogSlice';

function MainBlog({ blog }) {
  const dispatch = useDispatch();

  const { image, title, tags, likes, isSaved, desctiption } = blog;
  const tag = tags?.map((tag) => `#${tag}`).join(' , ');

  const handleLikes = (blog) => {
    dispatch(updateLikes(blog));
  };

  const handleSaved = (blog) => {
    dispatch(updateSaved(blog));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          <span>{tag}</span>
        </div>
        <div className="btn-group">
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={() => handleLikes(blog)}
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          <button
            className={isSaved ? 'active save-btn' : 'save-btn'}
            id="lws-singleSavedBtn"
            onClick={() => handleSaved(blog)}
          >
            <i className="fa-regular fa-bookmark"></i>{' '}
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="mt-6">
          <p>{desctiption}</p>
        </div>
      </div>
    </main>
  );
}

export default MainBlog;
