import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthHeader from '../../components/header/auth/ui';
import defultimg from '../../assets/img/defaultImage.png';
import CommentItem from '../../components/view-post/commentitem';
import FileDownload from '../../components/view-post/filedownload';
import LinkBox from '../../components/view-post/linkbox';
import Category from '../../components/view-post/category';
import ReactionBar from '../../components/view-post/reactionbar';
import Anoymous from '../../components/view-post/anonymous';
import MoreActionButton from '../../components/view-post/moreactionbutton';
import instance from '../../apis/axios';

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

export default function ViewPostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // 댓글 UI
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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await instance.get(`/post/${postId}`);
        setPost(res.data);
      } catch (e) {
        console.error(e);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: commentInput,
        name: isAnonymous ? '익명' : '나',
        isMine: true,
      },
    ]);
    setCommentCount((prev) => prev + 1);
    setCommentInput('');
  };

  if (loading) {
    return (
      <>
        <AuthHeader />
        <p className="text-center mt-20">게시글 불러오는 중...</p>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <AuthHeader />
        <p className="text-center mt-20 text-[#818181]">
          게시글을 찾을 수 없습니다.
        </p>
      </>
    );
  }

  return (
    <>
      <AuthHeader />

      <div className="flex justify-center pt-[46px] pb-[34px]">
        <div className="flex w-[1429px]">
          {/* 게시글 영역 */}
          <section className="w-[700px] pr-[88px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[36px] font-pretendard font-semibold">
                {post.title}
              </h1>
              <MoreActionButton isMine={false} />
            </div>

            <div className="mt-[59px] flex justify-between">
              <div className="flex gap-2">
                <img
                  src={defultimg}
                  className="w-12 h-12 rounded-full border border-black"
                  alt="기본 이미지"
                />
                <div>
                  <div className="flex gap-2 items-center">
                    <span>
                      {post.anonymous
                        ? '익명'
                        : (post.writerId ?? '알 수 없음')}
                    </span>
                    <span>·</span>
                    <span className="text-xs text-[#818181]">
                      {new Date(post.createdAt).toLocaleDateString('ko-KR')}
                    </span>
                  </div>
                  <Category
                    content={CATEGORY_KR_MAP[post.category] || post.category}
                  />
                </div>
              </div>

              <ReactionBar
                initialLike={post.likeCount}
                commentCount={commentCount}
              />
            </div>

            <div className="mt-[40px] leading-7 whitespace-pre-line max-w-[500px]">
              {post.content}
            </div>

            <div className="mt-[32px] flex flex-col gap-7">
              {post.imageUrls?.length > 0 && (
                <FileDownload files={post.imageUrls} />
              )}
              {post.links?.length > 0 && <LinkBox links={post.links} />}
            </div>
          </section>

          {/* 구분선 */}
          <div className="w-px bg-[#EBEBEB]" />

          {/* 댓글 영역 */}
          <section className="flex-1 pl-[88px]">
            <div className="flex flex-col gap-7 mt-[42px]">
              {comments.map((c) => (
                <CommentItem
                  key={c.id}
                  content={c.content}
                  name={c.name}
                  isMine={c.isMine}
                />
              ))}
            </div>

            {/* 댓글 작성 */}
            <div
              className="flex justify-start w-[650px] h-[171px] bg-white
                fixed bottom-0 right-[50px] z-50"
            >
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
                    {isAnonymous ? '익명' : '나'}
                  </span>
                </div>

                <div className="flex items-center gap-[13px] ml-[62px]">
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
                      if (e.key === 'Enter') handleCommentSubmit();
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
