import { useEffect, useState } from 'react';
import { getRecentPosts } from '../../apis/mypage/recentposts';
import PostBox from '../main/postbox';

export default function ViewedPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!userId) return;

    getRecentPosts(userId).then(setPosts).catch(console.error);
  }, [userId]);

  if (posts.length === 0) {
    return (
      <p className="text-[#818181] text-sm mt-10">최근 본 게시글이 없습니다</p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostBox key={post.id} post={post} />
      ))}
    </div>
  );
}
