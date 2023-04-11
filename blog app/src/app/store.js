import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blog/blogSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import relatedBlogsReducer from '../features/related_blogs/relatedBlogsSlice';
import blogSortingReducer from '../features/sorting/sortingSlice';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    sorting: blogSortingReducer,
  },
});

export default store;
