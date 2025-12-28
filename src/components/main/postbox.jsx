import { useState, useEffect } from 'react';
import Comment from '../../assets/icon/comment';
import Heart from '../../assets/icon/heart';
import { getPosts } from '../../apis/main-auth/main';
import { toast } from 'sonner';

export default function PostBox({ category }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) return <p>게시글 불러오는 중...</p>;

  return (
    <div className="flex flex-col gap-[20px]">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col w-[544px] h-[210px] bg-white px-[46px] py-10  rounded-[32px] shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)] gap-[20px] hover:bg-[#FFF9F4] hover:cursor-pointer"
        >
          <p className="font-pretendard font-medium text-xl text-[#1E0D00]">
            {post.title}
          </p>
          <p className="font-pretendard text-sm text-[#818181] w-[423px] h-[51px]">
            {post.content}
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1">
              <p className="font-pretendard text-xs text-[#818181]">
                {post.writerId}
              </p>
              <p className="text-xs text-[#818181]">-</p>
              <p className="font-pretendard text-xs text-[#818181]">
                {new Date(post.createdAt).toLocaleDateString('ko-KR')}
              </p>
              <p className="bg-[#DDA67E] rounded-lg text-white font-pretendard border border-[#818181] text-[10px] w-[44px] h-[15px] text-center">
                {CATEGORY_KR_MAP[post.category] || post.category}
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="flex items-center gap-1">
                <Heart />
                <p className="font-pretendard text-xs text-[#1E0D00]">
                  {post.like || 0}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Comment />
                <p className="font-pretendard text-xs text-[#1E0D00]">
                  {post.comment || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
