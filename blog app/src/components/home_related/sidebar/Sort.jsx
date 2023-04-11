import React from 'react';
import { useDispatch } from 'react-redux';
import { sortingTag } from '../../../features/sorting/sortingSlice';

function Sort() {
  const dispatch = useDispatch();

  return (
    <>
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        onChange={(e) => dispatch(sortingTag(e.target.value))}
      >
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </>
  );
}

export default Sort;
