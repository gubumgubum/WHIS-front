import Comment from '../../assets/icon/comment';
import Heart from '../../assets/icon/heart';
import { CATEGORY_MAP } from '../../constants/categoryMap';

export default function PostBox({ posts = [] }) {
  return (
    <div className="flex flex-col gap-[20px]">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col w-[544px] h-[210px] bg-white px-[46px] py-10
                     rounded-[32px] shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)]
                     gap-[20px] hover:bg-[#FFF9F4] hover:cursor-pointer"
        >
          <p className="font-pretendard font-medium text-xl text-[#1E0D00]">
            {post.title}
          </p>

          <p className="font-pretendard text-sm text-[#818181] w-[423px] h-[51px]">
            {post.content}
          </p>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1">
              <p className="font-pretendard text-xs text-[#818181]">
                {post.anonymous ? '익명' : `사용자 ${post.writerId}`}
              </p>
              <p className="text-xs text-[#818181]">-</p>
              <p className="font-pretendard text-xs text-[#818181]">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p
                className="bg-[#DDA67E] rounded-lg text-white font-pretendard border border-[#818181]
                            text-[10px] w-[44px] h-[15px] text-center"
              >
                {CATEGORY_MAP[post.category] ?? post.category}
              </p>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="flex items-center gap-1">
                <Heart />
                <p className="font-pretendard text-xs text-[#1E0D00]">
                  {post.like ?? 0}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Comment />
                <p className="font-pretendard text-xs text-[#1E0D00]">
                  {post.comment ?? 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
