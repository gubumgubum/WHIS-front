import { useState, useRef, useEffect } from 'react';
import BottomArrow from '../../assets/icon/bottomarrow';

const categories = [
  '전체',
  '1학년',
  '2학년',
  '3학년',
  '공부',
  '전공',
  '코드 공유',
  '자격증',
  '취업',
  '연애',
  '잡담',
  '학교',
];

export default function CategoryDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('전체');
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
    <div ref={ref} className="relative w-[160px]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-[136px] h-[48px] flex items-center justify-between
                   px-4 py-2 rounded-2xl border border-[#818181]
                   shadow-sm bg-white"
      >
        <span className="font-pretendard font-medium text-[20px]">
          {selected}
        </span>
        <span>
          <BottomArrow />
        </span>
      </button>

      {/* 드롭다운 */}
      {open && (
        <ul
          className="absolute w-[136px] rounded-xl border
                     bg-[#FFF9F4] shadow-lg
                     h-[349px] overflow-y-auto z-50"
        >
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => {
                setSelected(cat);
                setOpen(false);
              }}
              className={`px-[7px] cursor-pointer
                hover:bg-[#FFEEE1] hover:text-[#1E0D00] font-pretendard text-sm text-[#818181] h-[29px] flex items-center 
                ${selected === cat ? 'font-semibold' : ''}`}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
