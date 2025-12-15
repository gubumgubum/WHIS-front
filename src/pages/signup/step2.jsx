import { useState } from 'react';
import logo from '../../assets/img/logo.png';
import Upload from '../../assets/icon/upload';
import defaultProfile from '../../assets/img/defaultImage.png';
import TextInput from '../../components/signin/textInput';
import SelectButton from '../../components/signup/selectButton';
import Button from '../../components/signin/button';

function Step2Page() {
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const isFormValid = name.trim() !== '' && grade !== '';

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[480px] h-[441px] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] shadow-box gap-[10px]">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-light text-xs">2단계 : 프로필 정보 입력</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-[15px]"
        >
          <div className="flex flex-col items-center mb-[17px] gap-[10px]">
            <div className="w-[80px] h-[80px] bg-white rounded-full overflow-hidden border border-black ">
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
          <div className="flex flex-col items-center gap-[10px]">
            <TextInput
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex items-center gap-[12px] mb-[12px]">
              <SelectButton
                className="w-[128px] h-[50px]"
                isSelected={grade === '1학년'}
                onClick={() => setGrade('1학년')}
                text="1학년"
              />
              <SelectButton
                className="w-[128px] h-[50px]"
                isSelected={grade === '2학년'}
                onClick={() => setGrade('2학년')}
                text="2학년"
              />
              <SelectButton
                className="w-[128px] h-[50px]"
                isSelected={grade === '3학년'}
                onClick={() => setGrade('3학년')}
                text="3학년"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={!isFormValid}
            className={!isFormValid ? 'bg-[#BA9A81]' : 'bg-[#AC7F5E]'}
          >
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Step2Page;
