import instance from '../axios';

export const getMe = async () => {
  const res = await instance.get('auth/me');
  return res.data;
};
