import { useState } from 'react';
import Comment from '../../assets/icon/comment';
import Heart from '../../assets/icon/heart';
import BigHeart from '../../assets/icon/bigheart';
import defaultimg from '../../assets/img/defaultImage.png';
import LF from '../../assets/icon/lf';
import Anoymous from './anonymous';
import MoreActionButton from './moreactionbutton';

export default function CommentItem() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(945);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const isMine = true;

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const [isAnonymous, setIsAnonymous] = useState(true);
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);

  const handleReplySubmit = () => {
    if (!reply.trim()) return;

    setReplies((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: reply,
        isAnonymous,
        name: isAnonymous ? '익명' : '이하경',
      },
    ]);

    setReply('');
    setIsReplyOpen(false);
  };

  return (
    <div>
      {/* ===== 댓글 본문 ===== */}
      <div className="flex gap-3">
        <img
          className="w-12 h-12 rounded-full border border-black"
          src={defaultimg}
          alt="default"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between h-12">
            <span className="text-[20px] font-semibold font-pretendard">
              익명
            </span>
            <MoreActionButton isMine={isMine} />
          </div>

          <p className="mt-[9px] font-pretendard font-light text-[20px]">
            저도 잘 모르겠어요 저도 도와주세요…
          </p>

          <div className="mt-[15px] flex gap-4 text-xs text-[#818181]">
            {/* 좋아요 */}
            <button
              onClick={handleLikeClick}
              className="flex items-center gap-1"
            >
              {liked ? <BigHeart /> : <Heart />}
              <span>{likeCount}</span>
            </button>

            {/* 답글 버튼 */}
            <button
              onClick={() => setIsReplyOpen((prev) => !prev)}
              className="flex items-center gap-1"
            >
              <Comment />
              <span>답글</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== 등록된 답글 목록 ===== */}
      <div className="mt-[11px] ml-[60px]">
        {replies.map((reply) => (
          <div key={reply.id} className="flex mb-[18px]">
            <LF />

            <div className="ml-[25px] flex-1">
              {/* 이름 + 더보기 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={defaultimg}
                    className="w-10 h-10 border border-black rounded-full mr-[13px]"
                    alt="default"
                  />
                  <span className="text-[18px] font-pretendard font-semibold">
                    {reply.name}
                  </span>
                </div>

                <MoreActionButton isMine={isMine} />
              </div>

              {/* 내용 */}
              <p className="mt-[9px] ml-[53px] font-pretendard font-light">
                {reply.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== 답글 작성 영역 ===== */}
      {isReplyOpen && (
        <div className="mt-[11px] ml-[60px]">
          <div className="flex items-center mb-[21px]">
            <LF />
            <img
              src={defaultimg}
              className="w-10 h-10 border border-black rounded-full ml-[30px] mr-[13px]"
              alt="default"
            />
            <span className="text-[18px] font-pretendard font-semibold">
              {isAnonymous ? '익명' : '이하경'}
            </span>
          </div>

          <div className="flex gap-[13px] items-center">
            <Anoymous
              isAnonymous={isAnonymous}
              onToggle={() => setIsAnonymous((prev) => !prev)}
            />
            <textarea
              rows={1}
              maxLength={400}
              className="flex-1 resize-none border-b pb-[5px] font-pretendardtext-[#818181] leading-6 break-words focus:outline-none focus:text-black"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleReplySubmit();
                }
              }}
              placeholder="댓글을 작성하세요..."
            />
          </div>
        </div>
      )}
    </div>
  );
}
