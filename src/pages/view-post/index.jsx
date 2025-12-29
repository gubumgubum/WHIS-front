import { useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import defultimg from '../../assets/img/defaultImage.png';
import CommentItem from '../../components/view-post/commentitem';
import FileDownload from '../../components/view-post/filedownload';
import LinkBox from '../../components/view-post/linkbox';
import Category from '../../components/view-post/category';
import ReactionBar from '../../components/view-post/reactionbar';
import Anoymous from '../../components/view-post/anonymous';
import MoreActionButton from '../../components/view-post/moreactionbutton';

export default function ViewPostPage() {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      content: '저도 잘 모르겠어요 저도 도와주세요…',
      name: '익명',
      isMine: false,
    },
  ]);

  const [commentCount, setCommentCount] = useState(comments.length);

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;

    const newComment = {
      id: comments.length + 1,
      content: commentInput,
      name: isAnonymous ? '익명' : '이하경',
      isMine: true,
    };

    setComments((prev) => [...prev, newComment]);
    setCommentCount((prev) => prev + 1);
    setCommentInput('');
  };

  return (
    <div>
      <AuthHeader />

      <div className="relative flex pt-[46px] pb-[34px] pl-[385px] pr-[107px]">
        <div className="flex w-[1429px]">
          {/* 좌측 게시글 영역 */}
          <section className="flex flex-col pr-[88px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[36px] font-pretendard font-semibold">
                게시글 제목
              </h1>
              <MoreActionButton isMine />
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
                    <span>이하경</span>
                    <span>·</span>
                    <span className="text-xs text-[#818181]">
                      2025년 12월 29일
                    </span>
                  </div>
                  <div className="mt-1">
                    <Category content="전공" />
                  </div>
                </div>
              </div>

              <ReactionBar initialLike={25} commentCount={commentCount} />
            </div>

            <div className="font-pretendard mt-[40px] leading-7 whitespace-pre-line max-w-[500px]">
              게시글 내용...
            </div>

            <div className="mt-[32px] flex flex-col gap-7">
              <FileDownload />
              <LinkBox />
            </div>
          </section>

          <div className="w-px bg-[#EBEBEB] absolute top-[50px] bottom-[34px] left-[970px]" />

          {/* 우측 댓글 영역 */}
          <section className="flex-1 pl-[88px] mt-[42px]">
            <div className="flex flex-col gap-7">
              {comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  content={comment.content}
                  name={comment.name}
                  isMine={comment.isMine}
                />
              ))}
            </div>

            <div className="h-[180px]" />

            {/* 댓글 작성 */}
            <div className="flex justify-start w-[650px] h-[171px] bg-white fixed bottom-0 right-[50px] z-50">
              <div className="w-[750px] border-t border-[#818181] bg-white pt-[20px]">
                <p className="font-pretendard font-medium mb-[10px] ml-[62px]">
                  게시글 댓글 작성하기
                </p>

                <div className="flex items-center gap-[13px] mb-[15px] ml-[62px]">
                  <img
                    src={defultimg}
                    alt="프로필"
                    className="w-10 h-10 rounded-full border border-black"
                  />
                  <span className="font-pretendard font-medium">
                    {isAnonymous ? '익명' : '이하경'}
                  </span>
                </div>

                <div className="flex items-center gap-[13px]">
                  <Anoymous
                    isAnonymous={isAnonymous}
                    onToggle={() => setIsAnonymous((prev) => !prev)}
                  />

                  <input
                    className="flex-1 border-b border-[#818181] pb-[5px]
                               font-pretendard font-light
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
