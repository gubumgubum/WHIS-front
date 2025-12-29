import { Link, useLocation } from 'react-router-dom';

function ReportTabs() {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-center gap-6 text-sm mb-10">
      <Link
        to="/report/sent"
        className={`${
          pathname === '/report/sent' ? 'font-bold text-black' : 'text-gray-400'
        }`}
      >
        신고 이력
      </Link>

      <span>|</span>

      <Link
        to="/report/history"
        className={`${
          pathname === '/report/history'
            ? 'font-bold text-black'
            : 'text-gray-400'
        }`}
      >
        신고 받은 이력
      </Link>
    </div>
  );
}

export default ReportTabs;
