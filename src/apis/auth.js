import instance from './axios';

export const login = async ({ email, password }) => {
  const response = await instance.post('auth/signin', {
    email,
    password,
  });

  return response.data;
};
