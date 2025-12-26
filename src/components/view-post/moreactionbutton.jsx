import { useState, useRef, useEffect } from 'react';
import More from '../../assets/icon/more';
import { Link } from 'react-router-dom';

export default function MoreActionButton({ isMine }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* 더보기 아이콘 */}
      <button onClick={() => setOpen((prev) => !prev)} className="p-1">
        <More />
      </button>

      {open &&
        (isMine ? (
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="
              absolute right-0 top-[32px]
              w-[84px] h-[52px]
              rounded-[20px] border border-black
              text-[20px] font-pretendard font-medium
              bg-white
            "
          >
            삭제
          </button>
        ) : (
          <Link
            to="/report"
            className="
              absolute right-0 top-[32px]
              w-[84px] h-[52px]
              rounded-[20px] border border-black
              text-[20px] font-pretendard font-medium
              bg-white flex items-center justify-center
            "
          >
            신고
          </Link>
        ))}
    </div>
  );
}
