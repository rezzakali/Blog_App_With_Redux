import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  sortingWord: '',
  filter: '',
};

// creating blog slice
const blogSortingSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    sortingTag: (state, action) => {
      state.sortingWord = action.payload;
    },
    filtered: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default blogSortingSlice.reducer;
export const { sortingTag, filtered } = blogSortingSlice.actions;
