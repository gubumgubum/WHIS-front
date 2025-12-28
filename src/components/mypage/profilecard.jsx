import { Link } from 'react-router-dom';
import Setting from '../../assets/icon/setting';
import { DEFAULT_PROFILE_URL } from '../../constants/profile';
import { useState } from 'react';
import Pencil from '../../assets/icon/pencil';

export default function ProfileCard({ me, postCount }) {
  const [preview, setPreview] = useState(
    me?.profileImageUrl || DEFAULT_PROFILE_URL,
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  if (!me) return null;

  return (
    <div className="flex items-center bg-[#FFF7F0] w-[544px] h-[140px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl px-[30px] py-5">
      {/* 프로필 이미지 */}
      <label
        htmlFor="profileUpload"
        className="relative group cursor-pointer w-[100px] h-[100px]"
      >
        <img
          src={preview}
          alt="profile"
          className="w-[100px] h-[100px] rounded-full object-cover border border-black bg-white"
        />
        <div className="absolute inset-0 rounded-full bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Pencil />
        </div>
        <input
          type="file"
          id="profileUpload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>

      {/* 유저 정보 */}
      <div className="flex flex-col gap-1 pl-[18px]">
        <p className="font-pretendard font-semibold text-2xl">{me.name}</p>
        <p className="font-pretendard text-[#818181] text-sm">{me.grade}학년</p>
      </div>

      {/* 게시물 수 */}
      <div className="flex items-center pl-[103px]">
        <div className="flex flex-col gap-1 items-center">
          <p className="font-pretendard font-semibold text-2xl">{postCount}</p>
          <p className="font-pretendard font-semibold text-sm text-[#764D2E]">
            게시물
          </p>
        </div>

        <Link
          to="/setting"
          className="flex flex-col gap-[6px] items-center pl-[70px]"
        >
          <Setting />
          <p className="font-pretendard font-semibold text-sm text-[#764D2E]">
            계정 설정
          </p>
        </Link>
      </div>
    </div>
  );
}
