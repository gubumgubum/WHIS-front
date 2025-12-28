import { useEffect, useState } from 'react';
import PostBox from '../main/postbox';
import { getMyPosts } from '../../apis/mypage/post';

export default function MyPosts({ writerId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!writerId) return;

    setLoading(true);
    getMyPosts(writerId)
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [writerId]);

  if (loading) {
    return (
      <p className="text-[#818181] text-sm mt-10 text-center">
        게시글 불러오는 중…
      </p>
    );
  }

  if (posts.length === 0) {
    return (
      <p className="text-[#818181] text-sm mt-10 text-center">
        아직 작성한 게시글이 없습니다
      </p>
    );
  }
  return (
    <div>
      <PostBox posts={posts} />
    </div>
  );
}
