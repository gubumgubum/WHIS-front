const receivedReports = [
  {
    id: 1,
    category: '기타',
    content: '신고 받은 게시물 내용입니다.',
  },
];

function ReportedHistoryPage() {
  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      {receivedReports.map((r) => (
        <div
          key={r.id}
          className="w-[420px] bg-[#FFF8F0] rounded-2xl shadow p-4"
        >
          <span className="text-sm bg-[#E0C3A3] px-2 py-1 rounded">
            {r.category}
          </span>

          <p className="mt-2 text-gray-700">{r.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ReportedHistoryPage;
