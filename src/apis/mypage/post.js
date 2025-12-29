import axios from '../axios'; // axios instance 경로 맞게 조정

export const getMyPosts = async () => {
  const response = await axios.get('/post/my');
  return response.data;
};

export const getRecentPosts = async (userId) => {
  const res = await axios.get('/mypage/recent-posts', {
    params: { userId },
  });
  return res.data;
};
