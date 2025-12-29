import { useState } from 'react';
import AuthHeader from '../../components/header/auth/ui';
import { Link } from 'react-router-dom';

const dummyData = [
  {
    id: 1,
    name: '규범',
    type: '기타',
    date: '12월 1일',
    status: '승인',
    hasFile: true,
  },
  {
    id: 2,
    name: '건우',
    type: '개인정보 노출',
    date: '11월 2일',
    status: '거절',
    hasFile: true,
  },
];

function SentPage() {
  const [tab, setTab] = useState('sent');

  return (
    <div className="min-h-screen bg-white pb-[80px]">
      <AuthHeader />

      <main className="flex flex-col items-center mt-12">
        {/* 탭 */}
        <div className="flex gap-6 text-sm mb-12">
          <Link
            to="/sent"
            onClick={() => setTab('sent')}
            className={
              tab === 'sent' ? 'font-bold text-black' : 'text-gray-400'
            }
          >
            신고 이력
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            to="/history"
            onClick={() => setTab('received')}
            className={
              tab === 'received' ? 'font-bold text-black' : 'text-gray-400'
            }
          >
            신고 받은 이력
          </Link>
        </div>

        {/* 🔁 원래 HistoryPage 카드 */}
        <div className="flex flex-col gap-10">
          {dummyData.map((item) => (
            <div
              key={item.id}
              className="w-[550px] h-[446px] bg-[#FFF8F0] rounded-[20px] p-5 shadow-md border border-[#838383]"
            >
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">이름 : {item.name}</span>
                  <span className="bg-[#DDA67E] text-white px-3 py-[2px] rounded-full text-xs">
                    {item.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span
                    className={`px-3 py-[2px] rounded-full text-xs ${
                      item.status === '승인' ? 'bg-[#C8F7B8]' : 'bg-[#FABABA]'
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-gray-500">{item.date}</span>
                </div>
              </div>

              <div className="bg-white border border-[#838383] rounded-lg w-[500px] min-h-[50px] h-auto mb-[8px] px-4 py-3">
                <p className="text-[14px] text-gray-800 font-pretendard font-medium">
                  전세준이 딴짓해요!!!
                </p>
              </div>

              <div className="bg-white border border-[#838383] rounded-lg w-[500px] min-h-[254px] h-auto p-5">
                <p className="text-[14px] text-gray-700 leading-[1.7] font-pretendard font-medium">
                  세준이가 아이디어 페스티벌 시간에 사보과제만 해요 진짜
                  망했어요..ㅠㅠ 빠르게 처리 부탁드립니다.
                </p>
              </div>

              {item.hasFile && (
                <div className="w-[500px] mt-4 bg-white border border-[#838383] rounded-lg px-3 py-2 flex justify-between items-center text-sm font-pretendard font-medium">
                  <span>세준이가 과제하는 사진.png</span>
                  <span className="cursor-pointer">⬇</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SentPage;
