import { Link } from 'react-router-dom';

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
  if (!posts.length) {
    return (
      <div className="text-center text-[#818181] mt-10">게시글이 없습니다.</div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px]">
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/view-post/${post.id}`}
          className="flex flex-col w-[544px] h-[210px] bg-white px-[46px] py-10
          rounded-[32px] shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)]
          gap-[20px] hover:bg-[#FFF9F4] transition"
        >
          {/* 제목 */}
          <p className="font-pretendard font-medium text-xl text-[#1E0D00]">
            {post.title}
          </p>

          {/* 내용 */}
          <p className="font-pretendard text-sm text-[#818181] w-[423px] h-[51px] overflow-hidden">
            {post.content}
          </p>

          {/* 하단 정보 */}
          <div className="flex items-center gap-2">
            <span className="font-pretendard text-xs text-[#818181]">
              {post.anonymous ? '익명' : (post.writerId ?? '알 수 없음')}
            </span>
            <span className="text-xs text-[#818181]">·</span>
            <span className="font-pretendard text-xs text-[#818181]">
              {new Date(post.createdAt).toLocaleDateString('ko-KR')}
            </span>
            <span
              className="bg-[#DDA67E] rounded-lg text-white font-pretendard
              border border-[#818181] text-[10px] px-2 h-[15px] flex items-center"
            >
              {CATEGORY_KR_MAP[post.category] || post.category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
