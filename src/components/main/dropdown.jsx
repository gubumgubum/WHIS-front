import { useState, useRef, useEffect } from 'react';
import BottomArrow from '../../assets/icon/bottomarrow';

export default function Dropdown({
  options,
  defaultValue = '전체',
  onChange,
  scrollable = false,
  width = '136px',
  height = '48px',
  className = '',
  renderValue,
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

  const isDefault = selected === defaultValue;

  return (
    <div ref={ref} className="relative w-[160px]">
      <button
        style={{ width, height }}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-between
                   px-4 py-2 rounded-2xl border border-[#818181]
                   shadow-sm bg-white ${className}`}
      >
        {renderValue ? (
          renderValue(selected, isDefault)
        ) : (
          <span className="font-pretendard">{selected}</span>
        )}

        <BottomArrow />
      </button>

      {open && (
        <ul
          className={`
            absolute w-[136px] rounded-xl border
            bg-[#FFF9F4] shadow-lg z-50
            ${scrollable ? 'h-[349px] overflow-y-auto' : ''}
          `}
        >
          {options.map((opt, index) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`px-[7px] cursor-pointer
                hover:bg-[#FFEEE1] hover:text-[#1E0D00]
                font-pretendard text-sm text-[#818181]
                h-[29px] flex items-center
                ${index === 0 ? 'rounded-t-xl' : ''}
                ${index === options.length - 1 ? 'rounded-b-xl' : ''}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
