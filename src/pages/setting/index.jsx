import AuthHeader from '../../components/header/auth/ui';
import { Link } from 'react-router-dom';

function SettingPage() {
  return (
    <div>
      <AuthHeader />
      <main className="flex flex-col items-center mt-[6.5rem]">
        <h1 className="text-xl font-pertendard font-black mb-[30px]">
          계정 설정
        </h1>
        <section className="w-[698px] bg-[#FFF7F0] rounded-3xl shadow-md shadow-black/60 p-6 mb-6">
          <h2 className="font-pretendard font-bold mb-4">개인 정보 보호</h2>
          <Link
            to="/report-view"
            className="block font-pretendard font-medium bg-white w-full border-gray-400 border p-3 rounded-xl mb-5 text-left"
          >
            신고 이력 보기
          </Link>
          <Link
            to="report-received"
            className="block font-pretendard font-medium bg-white w-full border-gray-400 border p-3 rounded-xl mb-5 text-left"
          >
            신고 받은 이력
          </Link>
          <Link
            to="/report-inquiry"
            className="block font-pretendard font-medium bg-white w-full border-gray-400 border p-3 rounded-xl text-left"
          >
            문의 하기
          </Link>
        </section>
        <section className="w-[698px] h-[144px] bg-[#FFF7F0] rounded-3xl shadow-md shadow-black/60 p-6 mt-8 mb-6">
          <h2 className="font-pretendard font-bold mb-4">이용 약관</h2>
          <Link
            to="/service"
            className="block bg-[#FFFFFF] w-full border-gray-400 border p-3 rounded-xl text-left font-pretendard font-medium"
          >
            서비스 이용 약관
          </Link>
        </section>
        <section className="w-[698px] h-[110px] bg-[#FFF7F0] rounded-3xl shadow-md shadow-black/60 p-6 mt-[100px] mb-6">
          <button className="bg-white w-[650px] h-[50px] text-[#C21414] font-pretendard font-medium p-3 rounded-xl text-left border-gray-400 border mt-2">
            로그아웃
          </button>
        </section>
      </main>
    </div>
  );
}

export default SettingPage;
