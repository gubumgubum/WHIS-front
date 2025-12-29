import instance from './axios';

export const postSignup = async ({
  email,
  password,
  name,
  grade,
  profileImageUrl,
}) => {
  const res = await instance.post('/auth/signup', {
    email,
    password,
    name,
    grade,
    profileImageUrl,
  });
  return res.data;
};
