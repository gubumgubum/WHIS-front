export default function ContentInput({ value, onChange }) {
  return (
    <textarea
      type="text"
      placeholder="내용을 입력하세요"
      className="w-[500px] h-[200px] p-4 border border-[#818181] font-pretendard rounded-xl placeholder:text-[#818181] text-black focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
