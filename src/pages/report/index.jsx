import AuthHeader from '../../components/header/auth/ui';
import File from '../../assets/icon/file';
import Flus from '../../assets/icon/flus';
import DownArrow from '../../assets/icon/downarrow';
import { useState } from 'react';

function ReportPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('신고 사유');

  return (
    <div className="min-h-screen bg=white flex flex-col">
      <AuthHeader />

      <main className="flex-1 flex flex-col items-center justify-start pt-[120px] pb-[120px]">
        <h1 className="text-xl font-pretendard font-bold mb-8">신고 하기</h1>

        <section className="w-[550px] h-[620px] bg-[#FFF7F0] rounded-3xl p-6 shadow-lg shadow-black/40">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            className="font-pretendard placeholder:text-gray-500 w-[500px] h-[50px] px-4 mb-4 border border-gray-400 rounded-xl bg-white text-sm focus:outline-none"
          />

          <textarea
            placeholder="내용을 입력하세요"
            className="font-pretendard placeholder:text-gray-500 w-[500px] h-[300px] p-4 mb-[15px] border border-gray-400 rounded-xl resize-none focus:outline-none"
          />

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
              <Flus />
            </label>
          </div>

          <div className="mb-[18px] w-[500px] relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="font-pretendard
               w-full h-[50px]
               px-4
               flex items-center justify-between
               border border-gray-400 rounded-xl
               bg-white text-sm text-gray-700"
            >
              {selected}
              <DownArrow />
            </button>

            {isOpen && (
              <ul
                className="absolute z-20 mt-2 w-full
                 bg-[#FFF7F0]
                 border border-gray-300
                 rounded-xl
                 shadow-lg
                 overflow-hidden"
              >
                {[
                  '욕설/비속어 사용',
                  '혐오/차별 발언',
                  '개인정보 노출',
                  '도배/의미 없는 글',
                  '불쾌/공격적인 내용',
                  '기타',
                ].map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelected(item);
                      setIsOpen(false);
                    }}
                    className="mx-2 my-1 px-3 py-2
                     rounded-lg
                     text-sm cursor-pointer
                     transition-colors
                     hover:bg-[#FFEEE1]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
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

export default ReportPage;
