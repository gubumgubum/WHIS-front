import AuthHeader from '../../components/header/auth/ui';
import { Link } from 'react-router-dom';

function InquiryPage() {
  return (
    <div>
      <AuthHeader />
      <main className="flex flex-co items-center mt-[5rem]">
        <h1 className="text-xl font-pretendard font-black font-black">
          문의하기
        </h1>
        <section className="w-[550px] h-[545px] bg-[#FFF7F0] ">
          <textarea
            className="w-[500px] h-[50px] bg-[#FFF7F0] border-gray-400 rounded-xl "
            placeholder="제목을 입력하세요"
          ></textarea>
        </section>
      </main>
    </div>
  );
}
