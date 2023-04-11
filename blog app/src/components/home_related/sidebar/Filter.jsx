import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../features/blogs/blogsSlice';
import { filtered } from '../../../features/sorting/sortingSlice';

function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.sorting);

  useEffect(() => {
    dispatch(fetchBlogs({ filter }));
  }, [dispatch, filter]);

  return (
    <>
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            className="radio"
            defaultChecked
            value="all"
            onChange={(e) => dispatch(filtered(e.target.value))}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            value="saved"
            onChange={(e) => dispatch(filtered(e.target.value))}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </>
  );
}

export default Filter;
