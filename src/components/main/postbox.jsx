import { Link } from 'react-router-dom';
import Comment from '../../assets/icon/comment';
import Heart from '../../assets/icon/heart';

export default function PostBox({ posts = [] }) {
  return (
    <Link to="/view-post" className="flex flex-col gap-[20px]">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col w-[544px] h-[210px] bg-white px-[46px] py-10 rounded-[32px]
          shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)]
          gap-[20px] hover:bg-[#FFF9F4] hover:cursor-pointer"
        >
          {/* 제목 */}
          <p className="font-pretendard font-medium text-xl text-[#1E0D00]">
            {post.title}
          </p>

          {/* 내용 */}
          <p className="font-pretendard text-sm text-[#818181] w-[423px] h-[51px] overflow-hidden">
            {post.contents}
          </p>

          {/* 하단 정보 */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 items-center">
              <p className="font-pretendard text-xs text-[#818181]">
                {post.user}
              </p>
              <p className="text-xs text-[#818181]">-</p>
              <p className="font-pretendard text-xs text-[#818181]">
                {post.time}
              </p>
              <p
                className="bg-[#DDA67E] rounded-lg text-white font-pretendard
                border border-[#818181] text-[10px] w-[44px] h-[15px] text-center"
              >
                {post.type}
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="flex items-center gap-1">
                <Heart />
                <p className="font-pretendard text-xs text-[#1E0D00]">
                  {post.like}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Comment />
                <p className="font-pretendard text-xs text-[#1E0D00]">
                  {post.comment}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
}
