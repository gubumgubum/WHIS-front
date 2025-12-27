import axios from '../axois';

export const getPosts = async (category) => {
  const response = await axios.get('/post/check-all', {
    params: { category },
  });
  return response.data;
};
