import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBlog, updateBlogLikes, updateBlogSaved } from './blogAPI';

// initial state
const initialState = {
  isLoading: false,
  blog: {},
  isError: false,
  error: '',
};

// create async thunk
export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const updateLikes = createAsyncThunk(
  'blog/updateLikes',
  async (blog) => {
    const updateLk = await updateBlogLikes(blog);
    return updateLk;
  }
);

export const updateSaved = createAsyncThunk(
  'blog/updateSaved',
  async (blog) => {
    const updateSvd = await updateBlogSaved(blog);
    return updateSvd;
  }
);

// creating blog slice
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(updateLikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog.likes = action.payload.likes;
      })
      .addCase(updateSaved.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog.isSaved = action.payload.isSaved;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
