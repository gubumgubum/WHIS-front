export default function Category({ content }) {
  return (
    <div className="w-[48px] h-[15px] bg-[#DDA67E] rounded-[8px] flex items-center justify-center px-[6px] py-[2px]">
      <p className="font-pretendard text-[10px] text-white">{content}</p>
    </div>
  );
}
