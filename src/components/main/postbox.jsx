import { useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../../assets/icon/comment';
import Heart from '../../assets/icon/heart';
import BigHeart from '../../assets/icon/bigheart';
import { togglePostLike } from '../../apis/main-auth/postlike';
import { toast } from 'sonner';

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

export default function PostBox({ posts = [] }) {
  const [likedPosts, setLikedPosts] = useState({});

  const handleLikeClick = async (e, postId) => {
    e.preventDefault(); // Link 이동 방지
    e.stopPropagation();

    try {
      await togglePostLike(postId);

      setLikedPosts((prev) => ({
        ...prev,
        [postId]: !prev[postId],
      }));
    } catch {
      toast.error('좋아요 처리에 실패했습니다.');
    }
  };

  return (
    <div className="flex flex-col gap-[20px]">
      {posts.map((post) => {
        const isLiked = likedPosts[post.id];

        return (
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
              {post.content}
            </p>

            {/* 하단 */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-1 items-center">
                <p className="font-pretendard text-xs text-[#818181]">
                  {post.writerId}
                </p>
                <p className="text-xs text-[#818181]">-</p>
                <p className="font-pretendard text-xs text-[#818181]">
                  {new Date(post.createdAt).toLocaleDateString('ko-KR')}
                </p>
                <p
                  className="bg-[#DDA67E] rounded-lg text-white font-pretendard
                  border border-[#818181] text-[10px] px-2 h-[15px] text-center"
                >
                  {CATEGORY_KR_MAP[post.category] || post.category}
                </p>
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="flex items-center gap-1">
                  <div
                    onClick={(e) => handleLikeClick(e, post.id)}
                    className="cursor-pointer"
                  >
                    {isLiked ? <BigHeart /> : <Heart />}
                  </div>
                  <p className="font-pretendard text-xs text-[#1E0D00]">
                    {post.likeCount + (isLiked ? 1 : 0)}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Comment />
                  <p className="font-pretendard text-xs text-[#1E0D00]">
                    {post.commentCount ?? 0}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
