export default function SelectButton({ className, text, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white border border-[#818181] rounded-xl ${isSelected ? 'bg-[#AC7F5E] text-white font-semibold' : 'text-[818181] text-lg font-light'} ${className}`}
    >
      {text}
    </button>
  );
}
