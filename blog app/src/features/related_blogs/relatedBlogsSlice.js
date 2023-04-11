import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRelatedBlogs from './relatedBlogsAPI';

// initial state
const initialState = {
  isLoading: false,
  relatedBlogs: [],
  isError: false,
  error: '',
};

// create async thunk
export const fetchRelatedBlogs = createAsyncThunk(
  'relatedBlogs/fetchRelatedBlogs',
  async ({ id, tags }) => {
    const relatedBlogs = await getRelatedBlogs({ id, tags });
    return relatedBlogs;
  }
);

// creating relatedBlogs slice
const relatedBlogsSlice = createSlice({
  name: 'relatedBlogs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedBlogs = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
