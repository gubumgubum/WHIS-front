import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import Upload from '../../assets/icon/upload';
import defaultProfile from '../../assets/img/defaultImage.png';
import TextInput from '../../components/signin/textInput';
import SelectButton from '../../components/signup/selectButton';

function Step2Page() {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-light text-xs">2단계 : 프로필 정보 입력</p>
        </div>
        <form>
          <div>
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-black">
              <img
                src={preview || defaultProfile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <label
              htmlFor="profileUpload"
              className="cursor-pointer text-[#AC7F5E] flex items-center gap-1 text-xs"
            >
              <Upload />
              프로필 사진 업로드
            </label>

            <input
              type="file"
              id="profileUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div>
            <TextInput placeholder="이름" />
            <div>
              <SelectButton className="w-[194px] h-[50px]" text="남자" />
              <SelectButton className="w-[194px] h-[50px]" text="여자" />
            </div>
            <div>
              <SelectButton className="w-[128px] h-[50px]" text="1학년" />
              <SelectButton className="w-[128px] h-[50px]" text="2학년" />
              <SelectButton className="w-[128px] h-[50px]" text="3학년" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2Page;
