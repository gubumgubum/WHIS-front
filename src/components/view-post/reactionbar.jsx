import { useState } from 'react';
import Heart from '../../assets/icon/heart';
import BigHeart from '../../assets/icon/bigheart';
import Comment from '../../assets/icon/comment';

export default function ReactionBar({ initialLike = 25, commentCount = 147 }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLike);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center gap-[6px]">
        <button
          onClick={handleLikeClick}
          className="w-[32px] h-[32px] bg-[#FFEADB] border border-[#818181] rounded-full flex items-center justify-center"
        >
          {liked ? <BigHeart /> : <Heart />}
        </button>
        <span className="text-sm font-pretendard">{likeCount}</span>
      </div>
      <div className="flex flex-col items-center gap-[6px]">
        <div className="w-[32px] h-[32px] bg-[#FFEADB] border border-[#818181] rounded-full flex items-center justify-center">
          <Comment />
        </div>
        <span className="text-sm font-pretendard">{commentCount}</span>
      </div>
    </div>
  );
}
