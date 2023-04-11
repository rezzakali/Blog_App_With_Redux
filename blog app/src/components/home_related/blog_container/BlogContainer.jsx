import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../features/blogs/blogsSlice';
import Loading from '../../../ui/Loading';
import SingleBlog from '../grid/SingleBlog';

function BlogContainer() {
  const dispatch = useDispatch();
  const { isLoading, isError, blogs, error } = useSelector(
    (state) => state.blogs
  );

  const { sortingWord, filter } = useSelector((state) => state.sorting);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog) => <SingleBlog key={blog.id} blog={blog} />);
  }

  useEffect(() => {
    dispatch(fetchBlogs({ sortingWord, filter }));
  }, [dispatch, sortingWord, filter]);

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}

export default BlogContainer;
