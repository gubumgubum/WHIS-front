import { useState, useRef, useEffect } from 'react';
import BottomArrow from '../../assets/icon/bottomarrow';

export default function Dropdown({ options, value, onChange, width = 136 }) {
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
    <div ref={ref} className="relative" style={{ width }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-[48px] flex items-center justify-between
                   px-4 rounded-2xl border border-[#818181]
                   shadow-sm bg-white"
      >
        <span className="font-pretendard font-medium text-[20px]">{value}</span>
        <BottomArrow />
      </button>

      {open && (
        <ul
          className="absolute mt-2 w-full rounded-xl border
                     bg-[#FFF9F4] shadow-lg
                     z-50"
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`
                px-[7px] h-[29px] flex items-center cursor-pointer
                font-pretendard text-sm
                ${
                  value === opt
                    ? 'bg-[#FFEEE1] text-[#1E0D00] font-semibold'
                    : 'text-[#818181] hover:bg-[#FFEEE1]'
                }
              `}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
