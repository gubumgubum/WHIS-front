import { useEffect, useState } from 'react';
import PostBox from '../main/postbox';
import { getMyPosts } from '../../apis/mypage/post'; // 경로 확인

export default function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getMyPosts();
        setPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">내 게시글 불러오는 중...</p>;
  }

  if (!posts || posts.length === 0) {
    return (
      <p className="text-center mt-10 text-[#818181]">
        작성한 게시글이 없습니다
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <PostBox posts={posts} />
    </div>
  );
}
