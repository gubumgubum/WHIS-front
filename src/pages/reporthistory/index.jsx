import { useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import { Link } from 'react-router-dom';

const dummyData = [
  {
    id: 1,
    type: '욕설/비속어 사용',
    status: '승인',
    date: '12월 1일',
    content:
      '자신이 하고싶은 욕설을 익명뒤에 숨어서 다수 사용하고 있습니다. 빠르게 처리해주세요.',
  },
  {
    id: 2,
    type: '기타',
    status: '거절',
    date: '10월 25일',
    content: '이 게시글 맘에 안들어요. 빠르게 삭제 해주세요!!!!!!!!!!! ><',
  },
];

function SentPage() {
  const [tab, setTab] = useState('sent');

  return (
    <div className="min-h-screen bg-white">
      <AuthHeader />

      <main className="flex flex-col items-center mt-12">
        <div className="flex gap-6 text-sm mb-10">
          <span className="text-gray-300"></span>
          <Link
            to="/sent"
            onClick={() => setTab('sent')}
            className={`${
              tab === 'sent' ? 'font-bold text-black' : 'text-gray-400'
            }`}
          >
            신고 이력
          </Link>
          <span>|</span>
          <Link
            to="/history"
            onClick={() => setTab('received')}
            className={`${
              tab === 'received' ? 'font-bold text-black' : 'text-gray-400'
            }`}
          >
            신고 받은 이력
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {dummyData.map((item) => (
            <div
              key={item.id}
              className="w-[550px] min-h-[213px] h-auto bg-[#FFF8F0] rounded-[25px] px-[26px] pt-[17px] pb-[26px] shadow-lg shadow-black/20 border border-[#838383]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="ml-2 font-bold font-pretendard">댓글</span>

                  <span
                    className="
        ml-[55px]
        w-[100px]
        h-[15px]
        bg-[#DDA67E]
        text-white
        text-xs
        flex items-center justify-center
        rounded-[25px]
      "
                  >
                    {item.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span
                    className={`px-3 py-[2px] rounded-full text-xs ${
                      item.status === '승인' ? 'bg-[#C8F7B8]' : 'bg-[#CDE4FF]'
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              </div>

              <div className="bg-white border border-[#838383] rounded-xl p-4 min-h-[145px] h-auto overflow-y-auto">
                <p className="font-pretendard text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SentPage;
