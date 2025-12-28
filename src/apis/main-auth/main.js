import axios from '../axios';

export const getPosts = async (category) => {
  const response = await axios.get('/post', {
    params: category ? { category } : {},
  });

  return response.data;
};
