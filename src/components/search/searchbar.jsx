import Search from '../../assets/icon/search';

export default function SearchBar({ value, onChange, onSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="relative w-[542px]">
      <div className="absolute left-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
        <Search color="#818181" />
      </div>
      <input
        type="text"
        placeholder="검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          w-full h-[50px]
          pl-[48px] pr-[16px]
          border border-[#818181]
          rounded-2xl
          font-pretendard
          placeholder:text-[#818181]
          text-black
          focus:outline-none
        "
      />
    </div>
  );
}
