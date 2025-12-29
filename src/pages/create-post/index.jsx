import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../../components/header/auth/ui';
import TitleInput from '../../components/create-post/titleinput';
import ContentInput from '../../components/create-post/contentinput';
import Dropdown from '../../components/main/dropdown';
import LinkAdd from '../../components/create-post/linkadd';
import FileAdd from '../../components/create-post/fileadd';
import { createPost } from '../../apis/create-post/api';
import { toast } from 'sonner';

const CATEGORY_MAP = {
  학교: 'SCHOOL',
  '1학년': 'GRADE_1',
  '2학년': 'GRADE_2',
  '3학년': 'GRADE_3',
  공부: 'STUDY',
  전공: 'MAJOR',
  '코드 공유': 'CODE_SHARE',
  자격증: 'CERTIFICATE',
  취업: 'JOB',
  연애: 'LOVE',
  잡담: 'CHAT',
};

export default function CreatePostPage() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

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

  const isFormComplete = title && content && selectedCategory;

  const handleSubmit = async () => {
    if (!isFormComplete) return;

    setLoading(true);

    try {
      const postId = await createPost({
        title,
        content,
        category: CATEGORY_MAP[selectedCategory],
        anonymous: isAnonymous,
        imageUrls: [],
        links: [],
      });
      navigate(`/view-post/${postId}`);
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('게시글 작성에 실패했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthHeader />
      <div className="flex flex-col items-center mt-[100px] gap-[50px]">
        <p className="font-pretendard font-semibold text-[24px]">게시글 작성</p>

        <div className="flex flex-col gap-[20px]">
          <TitleInput value={title} onChange={setTitle} />
          <ContentInput value={content} onChange={setContent} />
          <LinkAdd />
          <FileAdd />

          <Dropdown
            width="500px"
            height="50px"
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            defaultValue="카테고리를 선택해주세요"
            className="rounded-xl"
            renderValue={(value, isDefault) => (
              <span
                className="font-pretendard"
                style={{ color: isDefault ? '#818181' : '#000000' }}
              >
                {value}
              </span>
            )}
          />

          <div className="flex items-center justify-between w-[500px] h-[50px] px-4 border border-[#818181] rounded-xl">
            <span
              className={`font-pretendard ${
                isAnonymous ? 'text-[#818181]' : 'text-black'
              }`}
            >
              익명으로 작성
            </span>

            <div
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={`w-[45px] h-[22px] rounded-full relative cursor-pointer transition-colors ${
                isAnonymous ? 'bg-[#818181]' : 'bg-[#AC7F5E]'
              }`}
            >
              <div
                className={`absolute top-[2px] w-[18px] h-[18px] bg-white rounded-full transition-all ${
                  isAnonymous ? 'left-[2px]' : 'left-[25px]'
                }`}
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

            <button
              onClick={handleSubmit}
              disabled={!isFormComplete || loading}
              className={`flex items-center justify-center w-[230px] h-[50px] rounded-xl font-pretendard text-white ${
                isFormComplete
                  ? 'bg-[#AC7F5E]'
                  : 'bg-[#BA9A81] cursor-not-allowed'
              }`}
            >
              {loading ? '작성 중...' : '작성 완료'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
