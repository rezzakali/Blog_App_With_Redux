import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlogs from './blogsAPI';

// initial state
const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  error: '',
};

// create async thunk
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async ({ sortingWord, filter }) => {
    const blogs = await getBlogs({ sortingWord, filter });
    return blogs;
  }
);

// creating blogs slice
const blogsSlice = createSlice({
  name: 'blogs',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
