function ScrollCard({ title, children }) {
  return (
    <div className="w-[420px] bg-[#FFF8F0] rounded-2xl shadow p-4">
      <h2 className="text-center font-bold mb-2">{title}</h2>

      <div className="h-[260px] overflow-y-auto border rounded-xl p-3 bg-white">
        {children}
      </div>
    </div>
  );
}

export default ScrollCard;
