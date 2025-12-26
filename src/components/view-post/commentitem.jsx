import { useState } from 'react';
import Comment from '../../assets/icon/comment';
import Heart from '../../assets/icon/heart';
import BigHeart from '../../assets/icon/bigheart';
import defaultimg from '../../assets/img/defaultImage.png';
import LF from '../../assets/icon/lf';
import Anonymous from './anonymous';
import MoreActionButton from './moreactionbutton';

export default function CommentItem({ content, name }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleReplySubmit = () => {
    if (!reply.trim()) return;

    setReplies((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: reply,
        name: isAnonymous ? '익명' : '이하경',
      },
    ]);

    setReply('');
    setIsReplyOpen(false);
  };

  return (
    <div>
      {/* ===== 댓글 본문 ===== */}
      <div className="flex gap-[14px]">
        <img
          className="w-12 h-12 rounded-full border border-black"
          src={defaultimg}
          alt="기본 이미지"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between h-12">
            <span className="text-[20px] font-semibold font-pretendard">
              {name}
            </span>
            <MoreActionButton isMine />
          </div>

          <p className="mt-[9px] font-light text-[20px] font-pretendard">
            {content}
          </p>

          <div className="mt-[15px] flex gap-[30px] text-sm font-pretendard font-light">
            <button
              onClick={handleLikeClick}
              className="flex items-center gap-[10px]"
            >
              {liked ? <BigHeart /> : <Heart />}
              <span>{likeCount}</span>
            </button>

            <button
              onClick={() => setIsReplyOpen((prev) => !prev)}
              className="flex items-center gap-[10px]"
            >
              <Comment />
              <span>답글</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== 답글 목록 ===== */}
      <div className="mt-[11px] ml-[60px]">
        {replies.map((r) => (
          <div key={r.id} className="flex mb-[18px]">
            <LF />
            <div className="ml-[25px] flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={defaultimg}
                    className="w-10 h-10 border border-black rounded-full mr-[13px]"
                    alt="default"
                  />
                  <span className="font-semibold font-pretendard text-[18px]">
                    {r.name}
                  </span>
                </div>
                <MoreActionButton isMine />
              </div>

              <p className="mt-[9px] ml-[53px] font-light font-pretendard">
                {r.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== 답글 작성 ===== */}
      {isReplyOpen && (
        <div className="mt-[11px] ml-[60px]">
          <div className="flex items-center mb-[21px]">
            <LF />
            <img
              src={defaultimg}
              className="w-10 h-10 border border-black rounded-full ml-[25px] mr-[13px]"
              alt="default"
            />
            <span className="font-semibold font-pretendard text-[18px]">
              {isAnonymous ? '익명' : '이하경'}
            </span>
          </div>

          <div className="flex gap-[13px] items-center">
            <Anonymous
              isAnonymous={isAnonymous}
              onToggle={() => setIsAnonymous((prev) => !prev)}
            />

            <textarea
              rows={1}
              maxLength={400}
              className="flex-1 resize-none border-b pb-[5px] focus:outline-none focus:text-black font-light font-pretendard"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleReplySubmit();
                }
              }}
              placeholder="답글을 작성하세요..."
            />
          </div>
        </div>
      )}
    </div>
  );
}
