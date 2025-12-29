import instance from '../axios';

export const getCommentCount = (postId) =>
  instance.get(`/comment/check-num?postId=${postId}`);

export const postComment = (data) => instance.post('/comment/post', data);
