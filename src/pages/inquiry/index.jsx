import AuthHeader from '../../components/header/auth/ui';
import File from '../../assets/icon/file';
import ContentTextarea from '../../components/inquiry/content';
import TitleInput from '../../components/inquiry/title';
import Plus from '../../assets/icon/plus';

function InquiryPage() {
  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      <main className="flex flex-col items-center mt-[120px]">
        <h1 className="text-xl font-pretendard font-bold mb-8">문의하기</h1>

        <section className="w-[550px] h-[545px] bg-[#FFF7F0] rounded-3xl p-6 shadow-lg shadow-black/40">
          <ContentTextarea />
          <TitleInput />

          <div className="mb-[15px]">
            <input type="file" id="file-upload" className="hidden" />

            <label
              htmlFor="file-upload"
              className="flex items-center justify-between
                                   w-[500px] h-[50px]
                                   px-4
                                   border border-gray-400 rounded-xl
                                   bg-white text-sm cursor-pointer"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <File />
                파일 추가
              </div>
              <Plus />
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="text-pretendard font-black flex-1 py-3 border border-gray-400 rounded-xl bg-white font-medium"
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
