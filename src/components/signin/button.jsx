export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-[25.5rem] h-[3.125rem] bg-[#BA9A81] text-white font-semibold rounded-[1.25rem]"
    >
      {children}
    </button>
  );
}
