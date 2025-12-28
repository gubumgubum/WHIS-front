import AuthHeader from '../../components/header/auth/ui';
import DownArrow from '../../assets/icon/downarrow';
import { useState } from 'react';
import TitleInput from '../../components/report/TitleInput';
import Dtextarea from '../../components/report/Dtextarea';
import FileAdd from '../../components/create-post/fileadd';
import { useNavigate } from 'react-router-dom';
import { uploadReportFile, submitReport } from '../../apis/report/report';

function ReportPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('신고 사유');

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      let filePath = null;

      if (file) {
        filePath = await uploadReportFile(file, selected);
      }

      await submitReport({
        targetType: 'POST',
        targetId: 1,
        reason: selected,
        title,
        content,
        filePath,
      });

      alert('신고가 접수되었습니다.');
      navigate(-1);
    } catch (e) {
      console.error(e);
      alert('신고 접수 실패');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <AuthHeader />

      <main className="flex-1 flex flex-col items-center pt-[120px] pb-[120px]">
        <h1 className="text-xl font-pretendard font-bold mb-8">신고 접수</h1>

        <section className="w-[550px] bg-[#FFF7F0] rounded-3xl p-6 shadow-lg shadow-black/40">
          <TitleInput value={title} onChange={setTitle} />
          <Dtextarea value={content} onChange={setContent} />

          <div className="mb-[15px]">
            <FileAdd onFileChange={setFile} />
          </div>

          <div className="mb-[18px] w-[500px] relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full h-[50px] px-4 flex justify-between items-center border rounded-xl bg-white text-sm"
            >
              {selected}
              <DownArrow />
            </button>

            {isOpen && (
              <ul className="absolute z-20 mt-2 w-full bg-[#FFF7F0] border rounded-xl shadow-lg">
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
                    className="px-3 py-2 text-sm cursor-pointer hover:bg-[#FFEEE1]"
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
              className="flex-1 py-3 border rounded-xl bg-white"
              onClick={() => navigate(-1)}
            >
              취소
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 py-3 rounded-xl bg-[#B8A38A] text-white"
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
