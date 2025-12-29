export default function Team({ src, name, and, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="w-[290px] h-[130px] rounded-[76px] bg-[#FFF9F4] border border-[#818181] font-pretendard flex items-center pl-[30px] pr-10">
        <img src={src} alt={name} className="w-[80px] h-[80px] rounded-full" />
        <p className="font-medium text-[32px] pr-1 pl-3">{name}</p>
        <p className="text-[#1E0D00] pt-[15px]">{and}</p>
      </div>
    </a>
  );
}
