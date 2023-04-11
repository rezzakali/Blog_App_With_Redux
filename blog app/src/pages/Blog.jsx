import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainBlog from '../components/blog_related/main_blog/MainBlog';
import RelatedBlogs from '../components/blog_related/relatedBlogs/RelatedBlogs';
import { fetchBlog } from '../features/blog/blogSlice';
import GoToHomePage from '../ui/GoToHomePage';
import Loading from '../ui/Loading';

function Blog() {
  const { isLoading, isError, error, blog } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();
  const { blogId } = useParams();

  const { tags, id } = blog || {};

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found!</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <>
        <GoToHomePage />
        <section className="post-page-container">
          <MainBlog blog={blog} />
          <RelatedBlogs currentBlogId={id} tags={tags} />
        </section>
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  return <>{content}</>;
}

export default Blog;
