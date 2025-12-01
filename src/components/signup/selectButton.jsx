export default function SelectButton({ className, text }) {
  return (
    <button
      type="button"
      className={`border border-[#818181] font-light text-lg text-[#818181] rounded-xl focus:bg-[#AC7F5E] focus:text-white focus:font-semibold ${className}`}
    >
      {text}
    </button>
  );
}
