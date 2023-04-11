import axios from '../../utils/axios';

export const getBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

export const updateBlogLikes = async (blog) => {
  const response = await axios.patch(`/blogs/${blog.id}`, {
    likes: blog.likes + 1,
  });
  return response.data;
};

export const updateBlogSaved = async (blog) => {
  const response = await axios.patch(`/blogs/${blog.id}`, {
    isSaved: !blog.isSaved,
  });

  return response.data;
};
