import instance from '../axios';

export const getRecentPosts = async (userId) => {
  const res = await instance.get('/mypage/recent-posts', {
    params: { userId },
  });
  return res.data;
};
