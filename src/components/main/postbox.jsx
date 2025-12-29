import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../apis/main-auth/main';
import { toast } from 'sonner';
import { togglePostLike } from '../../apis/main-auth/postlike';

const CATEGORY_KR_MAP = {
  SCHOOL: '학교',
  GRADE_1: '1학년',
  GRADE_2: '2학년',
  GRADE_3: '3학년',
  CODE_SHARE: '코드 공유',
  LOVE: '연애',
  JOB: '취업',
  CERTIFICATE: '자격증',
  CHAT: '잡담',
  STUDY: '공부',
  MAJOR: '전공',
};

export default function PostBox({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts(category);
        setPosts(data);
      } catch (error) {
        console.error(error);
        toast.error('게시글을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  const handleLikeClick = async (postId) => {
    try {
      await togglePostLike(postId);

      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? {
                ...post,
                likeCount: likedPosts[postId]
                  ? post.likeCount - 1
                  : post.likeCount + 1,
              }
            : post,
        ),
      );

      setLikedPosts((prev) => ({
        ...prev,
        [postId]: !prev[postId],
      }));
    } catch {
      toast.error('좋아요 처리에 실패했습니다.');
    }
  };

  if (loading) return <p>게시글 불러오는 중...</p>;

  return (
    <div className="flex flex-col gap-[20px]">
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/view-post/${post.id}`}
          className="flex flex-col w-[544px] h-[210px] bg-white px-[46px] py-10
                     rounded-[32px] shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)]
                     gap-[20px] hover:bg-[#FFF9F4]"
        >
          {/* 제목 */}
          <p className="font-pretendard font-medium text-xl text-[#1E0D00]">
            {post.title}
          </p>

          {/* 내용 */}
          <p className="font-pretendard text-sm text-[#818181] w-[423px] h-[51px] overflow-hidden">
            {post.content.length > 85
              ? post.content.slice(0, 85) + '...'
              : post.content}
          </p>

          {/* 하단 */}
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <p className="text-xs text-[#818181]">
                {post.writerId ?? '익명'}
              </p>
              <p className="text-xs text-[#818181]">-</p>
              <p className="text-xs text-[#818181]">
                {new Date(post.createdAt).toLocaleDateString('ko-KR')}
              </p>
              <p
                className="bg-[#DDA67E] rounded-lg text-white border border-[#818181]
                            text-[10px] px-2 h-[15px] text-center"
              >
                {CATEGORY_KR_MAP[post.category]}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-1"
                onClick={(e) => {
                  e.preventDefault(); // 🔥 페이지 이동 막기
                  handleLikeClick(post.id);
                }}
              ></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
