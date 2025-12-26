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
  const isMyPost = true;
  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: commentInput,
        name: isAnonymous ? '익명' : '이하경',
        isMine: true,
      },
    ]);

    setCommentInput('');
  };

  const [comments, setComments] = useState([
    {
      id: 1,
      content: '저도 잘 모르겠어요 저도 도와주세요…',
      name: '익명',
      isMine: false,
    },
  ]);

  const [commentInput, setCommentInput] = useState('');

  return (
    <div>
      <AuthHeader />
      <div className="flex pt-[46px] pb-[34px] pl-[385px] pr-[107px]">
        <div className="flex w-[1429px]">
          <section className="flex flex-col pr-[88px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <h1 className="text-[36px] font-pretendard font-semibold">
                  전공 선택 어려워요
                </h1>
                {isMyPost && (
                  <span className="text-center px-1 pb-1 w-[38px] h-[27px] rounded-xl bg-[#AC7F5E] text-white">
                    My
                  </span>
                )}
              </div>
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

            <div className="font-pretendard mt-[40px] leading-7 whitespace-pre-line max-w-[500px]">
              전공을 정하는 게 왜 이렇게까지 어려운 일인지 도무지 모르겠어요.
              그냥 하나 고르면 되는 문제인 것 같은데, 막상 진짜로 선택해야
              한다고 생각하면 머릿속이 하얘지고 아무것도 결정할 수 없게 돼요.
              하루 종일 이 생각만 하다 보면 시간이 이렇게 흘러도 되는 건가 싶을
              정도로 불안해지고, 답은커녕 마음만 점점 더 조급해져요. 주변에서는
              다들 아무렇지 않게 “너는 뭐 할 거야?”, “전공은 정했어?” 하고
              묻는데, 그 말들이 왜 이렇게 아프게 들리는지 모르겠어요. 악의가
              없다는 걸 알면서도 그 질문 하나하나가 괜히 제 가슴을 콕콕 찌르는
              느낌이에요. 솔직히 말하면 아직 제가 뭘 좋아하는지도 잘 모르겠고,
              뭘 잘할 수 있는지도 확신이 없어요. 디자인을 생각하면 감각 있어
              보이고 자유롭고 재밌을 것 같다는 생각이 들다가도, 이걸 평생 가까이
              두고 할 수 있을까, 언젠가는 질려서 후회하지 않을까 하는 걱정이
              바로 따라와요. 프론트엔드를 떠올리면 내가 만든 화면이 바로 보이는
              게 매력적으로 느껴지지만, 코딩이 막힐 때마다 스스로를 계속
              의심하게 될 것 같아서 겁이 나요. 백엔드는 또 더 멀게 느껴지고,
              나랑 정말 맞는 길인지 감도 안 잡혀요. 전공 하나를 고르는 일인데도
              마치 인생 전체를 걸고 도박하는 기분이 들어서 더 무서운 것 같아요.
            </div>
            <div className="mt-[32px] flex flex-col gap-7">
              <FileDownload />
              <LinkBox />
            </div>
          </section>

          <div className="w-px bg-[#E5E5E5]" />

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
            <div className="flex justify-start w-[790px] h-[171px] bg-white fixed bottom-[0] right-[70px] z-50">
              <div className="w-[750px] border-t border-[#818181] bg-white pt-[20px] ">
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
                    className="flex-1 border-b border-[#818181]
                              pb-[5px] font-pretendard font-light
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
