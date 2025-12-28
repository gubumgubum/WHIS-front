import instance from '../axios';

export const searchPosts = async ({ keyword, category }) => {
  const response = await instance.get('/post/search', {
    params: {
      keyword,
      category: category === '전체' ? null : category,
    },
  });

  return response.data;
};
