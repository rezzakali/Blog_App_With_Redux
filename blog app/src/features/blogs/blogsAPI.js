import axios from '../../utils/axios';

const getBlogs = async ({ sortingWord, filter }) => {
  let filterBlogs = [];
  try {
    const response = await axios.get('/blogs');
    if (sortingWord === 'most_liked') {
      filterBlogs = await response.data.sort((a, b) => b.likes - a.likes);

      return filterBlogs;
    }
    if (sortingWord === 'newest') {
      const compareBlogs = (a, b) => {
        const date1 = new Date(a);
        const date2 = new Date(b);
        return date2 - date1;
      };
      filterBlogs = await response.data.sort((a, b) =>
        compareBlogs(a.createdAt, b.createdAt)
      );

      return filterBlogs;
    }
    if (filter === 'saved') {
      filterBlogs = await response.data.filter(
        (blog) => blog.isSaved.toString() === 'true'
      );

      return filterBlogs;
    }
    if (filter === 'all') {
      return response.data;
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getBlogs;
