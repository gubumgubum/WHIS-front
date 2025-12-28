import instance from '../axios'; // axios instance 경로 맞게 조정

export const getMyPosts = async (writerId) => {
  const response = await instance.get('/mypage/post', {
    params: { writerId },
  });

  return response.data;
};

export const getRecentPosts = async (userId) => {
  const res = await instance.get('/mypage/recent-posts', {
    params: { userId },
  });
  return res.data;
};
