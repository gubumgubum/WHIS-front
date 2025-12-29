import instance from '../axios';

export const getMyComments = async (userId) => {
  const response = await instance.get('/comment/check-my', {
    params: { userId },
  });

  return response.data;
};
