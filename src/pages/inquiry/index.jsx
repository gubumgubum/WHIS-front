import AuthHeader from '../../components/header/auth/ui';
import TitleInput from '../../components/report/TitleInput';
import Dtextarea from '../../components/report/Dtextarea';
import FileAdd from '../../components/create-post/fileadd';
import { useNavigate } from 'react-router-dom';

function InquiryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg=white flex flex-col">
      <AuthHeader />

      <main className="flex-1 flex flex-col items-center justify-start pt-[120px] pb-[120px]">
        <h1 className="text-xl font-pretendard font-bold mb-8">문의 하기</h1>

        <section className="w-[550px] min-h-[545px] h-auto bg-[#FFF7F0] rounded-3xl p-6 shadow-lg shadow-black/40">
          <TitleInput />
          <Dtextarea />

          <div className="mb-[15px]">
            <FileAdd />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="text-pretendard font-black flex-1 py-3 border border-gray-400 rounded-xl bg-white font-medium"
              onClick={() => navigate(-1)}
            >
              취소
            </button>

            <button
              type="button"
              className="text-pretendard font-black  flex-1 py-3 rounded-xl bg-[#B8A38A] text-white font-medium"
            >
              작성 완료
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InquiryPage;
