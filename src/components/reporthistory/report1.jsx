function InquiryForm({ onSubmit }) {
  return (
    <div className="w-[420px] bg-[#FFF8F0] rounded-2xl shadow p-4">
      <input className="w-full border rounded p-2 mb-2" placeholder="제목" />

      <textarea
        className="w-full h-[160px] border rounded p-2"
        placeholder="내용"
      />

      <button
        onClick={onSubmit}
        className="mt-3 w-full bg-[#C9A27C] text-white py-2 rounded"
      >
        신고 접수
      </button>
    </div>
  );
}

export default InquiryForm;
