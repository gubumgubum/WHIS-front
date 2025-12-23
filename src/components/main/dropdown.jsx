import { useState, useRef, useEffect } from 'react';
import BottomArrow from '../../assets/icon/bottomarrow';

export default function Dropdown({
  options,
  defaultValue = '전체',
  onChange,
  scrollable = false, // ⭐ 추가
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
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

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
    onChange?.(value);
  };

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
        <BottomArrow />
      </button>

      {open && (
        <ul
          className={`
            absolute w-[136px] rounded-xl border
            bg-[#FFF9F4] shadow-lg z-50
            ${scrollable ? 'h-[349px] overflow-y-auto' : 'py-2'}
          `}
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`px-[7px] cursor-pointer
                hover:bg-[#FFEEE1] hover:text-[#1E0D00]
                font-pretendard text-sm text-[#818181]
                h-[29px] flex items-center
                ${selected === opt ? 'font-semibold' : ''}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
