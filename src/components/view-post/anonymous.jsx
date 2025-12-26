import { useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import defultimg from '../../assets/img/defaultImage.png';
import CommentItem from '../../components/view-post/commentitem';
import ReportButton from '../../components/view-post/moreactionbutton';
import FileDownload from '../../components/view-post/filedownload';
import LinkBox from '../../components/view-post/linkbox';
import Category from '../../components/view-post/category';
import ReactionBar from '../../components/view-post/reactionbar';
import Anoymous from '../../components/view-post/anonymous';

export default function ViewPostPage() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: commentInput,
        name: isAnonymous ? '익명' : '이하경',
      },
    ]);

    setCommentInput('');
  };

  return (
    <div>
      <AuthHeader />

      <div className="flex justify-center pt-[46px] pb-[80px] pl-[385px] pr-[107px]">
        <div className="flex w-[1200px]">
          {/* ===== 게시글 ===== */}
          <section className="flex-1 pr-[88px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[36px] font-pretendard font-semibold">
                전공 선택 어려워요
              </h1>
              <ReportButton />
            </div>

            <div className="mt-[59px] flex justify-between">
              <div className="flex items-start gap-2">
                <img
                  src={defultimg}
                  className="w-12 h-12 rounded-full border border-black"
                  alt="기본 이미지"
                />
                <div>
                  <div className="flex gap-[14px] items-center">
                    <span>김지유</span>
                    <span>·</span>
                    <span className="text-xs text-[#818181]">
                      2025년 12월 19일
                    </span>
                  </div>
                  <div className="mt-1">
                    <Category content="전공" />
                  </div>
                </div>
              </div>

              <ReactionBar initialLike={25} commentCount={comments.length} />
            </div>

            <div className="mt-[40px] leading-7 whitespace-pre-line">
              전공을 정하는 게 왜 이렇게까지 어려운 일인지 도무지 모르겠어요...
            </div>

            <div className="mt-[32px] flex flex-col gap-7">
              <FileDownload />
              <LinkBox />
            </div>
          </section>

          <div className="w-px bg-[#E5E5E5]" />

          {/* ===== 댓글 ===== */}
          <section className="flex-1 pl-[88px]">
            <div className="flex flex-col gap-7">
              {comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  content={comment.content}
                  name={comment.name}
                />
              ))}
            </div>

            {/* 댓글 작성 */}
            <div className="mt-[32px] border-t pt-[28px]">
              <p className="font-pretendard font-medium mb-[18px]">
                게시글 댓글 작성하기
              </p>

              {/* 사용자 정보 */}
              <div className="flex items-center gap-[13px] mb-[14px]">
                <img
                  src={defultimg}
                  alt="프로필"
                  className="w-10 h-10 rounded-full border border-black"
                />
                <span className="font-pretendard font-medium">
                  {isAnonymous ? '익명' : '이하경'}
                </span>
              </div>

              {/* 입력 영역 */}
              <div className="flex items-center gap-[10px]">
                <Anoymous
                  isAnonymous={isAnonymous}
                  onToggle={() => setIsAnonymous((prev) => !prev)}
                />

                <input
                  className="flex-1 border-b border-[#818181]
                             pb-[6px] font-pretendard font-light
                             focus:outline-none focus:border-black"
                  placeholder="댓글을 작성하세요..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommentSubmit();
                    }
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
