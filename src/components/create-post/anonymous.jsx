export default function Anoymous({ isAnonymous, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center justify-center w-[49px] h-[32px] py-2
        border border-[#818181] rounded-[8px] font-pretendard
        ${isAnonymous ? 'bg-[#FFEEE1]' : 'bg-white'}
      `}
    >
      {isAnonymous ? '익명' : '실명'}
    </button>
  );
}
