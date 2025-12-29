import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/header/auth/ui';

const reports = [
  {
    id: 1,
    category: '욕설/비하',
    postId: 10,
    date: '12월 1일',
  },
];

function ReportHistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <AuthHeader />
      {reports.map((r) => (
        <div
          key={r.id}
          onClick={() => navigate(`/post/${r.postId}`)}
          className="w-[420px] bg-[#FFF8F0] rounded-2xl shadow p-4 cursor-pointer"
        >
          <span className="text-sm bg-[#E0C3A3] px-2 py-1 rounded">
            {r.category}
          </span>

          <p className="mt-2 text-gray-700">신고한 게시물 보기</p>
        </div>
      ))}
    </div>
  );
}

export default ReportHistoryPage;
