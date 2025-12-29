import { useEffect, useState } from 'react';
import { getRecentPosts } from '../../apis/mypage/recentposts';
import PostBox from '../main/postbox';

export default function ViewedPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!userId) return;

    getRecentPosts(userId)
      .then((data) => {
        console.log('최근 본 글 API data:', data);
        const uniquePosts = Array.from(
          new Map(data.map((post) => [post.id, post])).values(),
        );
        setPosts(uniquePosts);
      })
      .catch(console.error);
  }, [userId]);

  if (posts.length === 0) {
    return (
      <p className="text-[#818181] text-sm mt-10">최근 본 게시글이 없습니다</p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* 🔥 여기서 posts 배열 그대로 넘기기 */}
      <PostBox posts={posts} />
    </div>
  );
}
