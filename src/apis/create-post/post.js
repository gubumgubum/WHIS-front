import axios from '../axios';

export const createPost = async ({
  title,
  content,
  category,
  anonymous,
  imageUrls,
  links,
}) => {
  const response = await axios.post('/post/post', {
    title,
    content,
    category,
    anonymous,
    imageUrls,
    links,
  });
  return response.data;
};
