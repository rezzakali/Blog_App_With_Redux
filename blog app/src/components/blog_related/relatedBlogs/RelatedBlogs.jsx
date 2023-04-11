import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../../features/related_blogs/relatedBlogsSlice';
import Loading from '../../../ui/Loading';
import RelatedBlogItem from './RelatedBlogItem';

function RelatedBlogs({ currentBlogId, tags }) {
  const { isLoading, isError, error, relatedBlogs } = useSelector(
    (state) => state.relatedBlogs
  );

  const dispatch = useDispatch();

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && relatedBlogs.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }

  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((relatedBlog) => (
      <RelatedBlogItem key={relatedBlog.id} relatedBlog={relatedBlog} />
    ));
  }

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id: currentBlogId, tags }));
  }, [dispatch, currentBlogId, tags]);

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}

export default RelatedBlogs;
