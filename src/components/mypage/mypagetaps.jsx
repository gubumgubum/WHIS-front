export default function MyPageTabs({ tab, onChange }) {
  return (
    <div className="flex items-center w-[544px] h-[42px] border border-[#D9D9D9] shadow-[4px_4px_4px_rgba(0,0,0,0.10)] rounded-2xl px-[63px] font-pretendard justify-between">
      <button
        onClick={() => onChange('posts')}
        className={
          tab === 'posts'
            ? 'border border-[#D9D9D9] w-[100px] h-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl'
            : ''
        }
      >
        내 글
      </button>

      <button
        onClick={() => onChange('comments')}
        className={
          tab === 'comments'
            ? 'border border-[#D9D9D9] w-[100px] h-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl'
            : ''
        }
      >
        댓글
      </button>

      <button
        onClick={() => onChange('likes')}
        className={
          tab === 'likes'
            ? 'border border-[#D9D9D9] w-[100px] h-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl'
            : ''
        }
      >
        좋아요
      </button>

      <button
        onClick={() => onChange('views')}
        className={
          tab === 'views'
            ? 'border border-[#D9D9D9] w-[100px] h-[30px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl'
            : ''
        }
      >
        최근 본 글
      </button>
    </div>
  );
}
