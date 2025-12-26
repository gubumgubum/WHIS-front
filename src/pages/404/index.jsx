import { useNavigate } from 'react-router-dom';
import Error from '../../assets/img/error';
import notfound from '../../assets/img/notfound.png';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-[77px] min-h-screen">
      <div className="flex flex-col gap-2">
        <img src={notfound} alt="404 Not Found" width={436} />
        <div className="flex items-center gap-2">
          <p className="font-pretendard font-medium text-[36px] text-[#818181]">
            찾을 수 없는 페이지 입니다
          </p>
          <Error />
        </div>
      </div>
      <button
        onClick={() => navigate('/main-auth')}
        className="w-[200px] h-[60px] border border-black bg-white text-[#764D2E] rounded-[10px] font-semibold font-pretendard"
      >
        돌아가기
      </button>
    </div>
  );
}
