import { useState, useRef, useEffect } from 'react';
import More from '../../assets/icon/more';
import { Link } from 'react-router-dom';

export default function ReportButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // 바깥 클릭 시 닫기
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
      {/* 더보기 버튼 */}
      <button onClick={() => setOpen((prev) => !prev)} className="p-1">
        <More />
      </button>

      {/* 신고 버튼 */}
      {open && (
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
      )}
    </div>
  );
}
