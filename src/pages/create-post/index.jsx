import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/header/auth/ui';
import TitleInput from '../../components/create-post/titleinput';
import ContentInput from '../../components/create-post/contentinput';
import Dropdown from '../../components/main/dropdown';
import LinkAdd from '../../components/create-post/linkadd';
import FileAdd from '../../components/create-post/fileadd';

export default function CreatePostPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const categories = [
    '1학년',
    '2학년',
    '3학년',
    '공부',
    '전공',
    '코드 공유',
    '자격증',
    '취업',
    '연애',
    '잡담',
    '학교',
  ];

  return (
    <div>
      <AuthHeader />

      <div className="flex flex-col items-center mt-[100px] gap-[50px]">
        <p className="font-pretendard font-semibold text-[24px]">게시글 작성</p>

        <div className="flex flex-col gap-[20px]">
          <TitleInput />
          <ContentInput />
          <LinkAdd />
          <FileAdd />
          <Dropdown
            width="500px"
            height="50px"
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />

          <div className="flex items-center justify-between w-[500px] h-[50px] px-4 border border-[#818181] rounded-xl">
            <span className="font-pretendard text-black">익명으로 작성</span>
            <div
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={`w-[45px] h-[22px] rounded-full relative cursor-pointer transition-colors ${isAnonymous ? 'bg-[#818181]' : 'bg-[#AC7F5E]'}`}
            >
              <div
                className={`absolute top-[2px] w-[18px] h-[18px] bg-white rounded-full transition-all ${isAnonymous ? 'left-[2px]' : 'left-[25px]'}`}
              />
            </div>
          </div>

          <div className="flex gap-10 mt-[16px]">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-[230px] h-[50px] border border-[#818181] rounded-xl font-pretendard text-black bg-white"
            >
              취소
            </button>
            <button className="flex items-center justify-center w-[230px] h-[50px] bg-[#BA9A81] rounded-xl font-pretendard text-white">
              작성 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
