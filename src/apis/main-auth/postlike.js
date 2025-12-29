import axios from '../axios';

/**
 * 게시글 좋아요 토글
 * @param {number} postId
 */
export const togglePostLike = async (postId) => {
  const response = await axios.post(`/post/${postId}/like`);
  return response.data;
};
