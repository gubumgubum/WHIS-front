export default function SelectButton({ className, text, isSelected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl ${isSelected ? 'bg-[#AC7F5E] text-white font-semibold text-lg' : 'bg-white text-[#818181] text-lg font-light border border-[#818181]'} ${className}`}
    >
      {text}
    </button>
  );
}
