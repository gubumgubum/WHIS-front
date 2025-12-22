import Exit from '../../assets/icon/exit';
import RightArrow from '../../assets/icon/rightarrow';
import AuthHeader from '../../components/header/auth/ui';
import { Link } from 'react-router-dom';

function SettingPage() {
  return (
    <div>
      <AuthHeader />
      <main className="flex flex-col items-center mt-[6.5rem]">
        <h1 className="text-xl font-pertendard font-extrabold mb-[30px]">
          계정 설정
        </h1>

        <section className="w-[698px] bg-[#FFF7F0] rounded-3xl shadow-md shadow-black/60 pt-5 px-6 pb-[30px] mb-[52px]">
          <h2 className="font-pretendard font-bold mb-4">개인 정보 보호</h2>

          <Link
            to="/report-view"
            className="flex justify-between items-center font-pretendard font-medium bg-white w-full border-gray-400 border p-3 rounded-xl mb-5 text-left"
          >
            <span>신고 이력 보기</span>
            <RightArrow />
          </Link>

          <Link
            to="/report-received"
            className="flex justify-between items-center font-pretendard font-medium bg-white w-full border-gray-400 border p-3 rounded-xl mb-5 text-left"
          >
            <span>신고 받은 이력</span>
            <RightArrow />
          </Link>

          <Link
            to="/report-inquiry"
            className="flex justify-between items-center font-pretendard font-medium bg-white w-full border-gray-400 border p-3 rounded-xl text-left"
          >
            <span>문의 하기</span>
            <RightArrow />
          </Link>
        </section>

        <section className="w-[698px] h-auto bg-[#FFF7F0] rounded-3xl shadow-md shadow-black/60 pt-5 pb-[30px] px-6 mb-[98px]">
          <h2 className="font-pretendard font-bold mb-4">이용 약관</h2>
          <Link
            to="/service"
            className="flex justify-between items-center bg-[#FFFFFF] w-full border-gray-400 border p-3 rounded-xl text-left font-pretendard font-medium"
          >
            <span>서비스 이용 약관</span>
            <RightArrow />
          </Link>
        </section>

        <section className="w-[698px] h-auto bg-[#FFF7F0] rounded-3xl shadow-md shadow-black/60 py-[30px] px-6">
          <button className="flex justify-between items-center bg-white w-full text-[#C21414] font-pretendard font-medium p-3 rounded-xl text-left border-gray-400 border">
            <span>로그아웃</span>
            <Exit />
          </button>
        </section>
      </main>
    </div>
  );
}

export default SettingPage;
