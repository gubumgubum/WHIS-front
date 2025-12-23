import UnauthHeader from '../../components/header/unauth/ui';
import employment from '../../assets/img/employment.png';
import character from '../../assets/img/character.png';
import letter from '../../assets/img/letter.png';
import { Link } from 'react-router-dom';

export default function MainUnauthPage() {
  return (
    <div>
      <UnauthHeader />
      <div className="w-full relative">
        <img
          src={employment}
          alt="취업 동아리 설명회 이미지"
          className="w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <img
            src={character}
            alt="캐릭터 이미지"
            className="w-[90px] absolute right-[700px] top-[29%]"
          />
          <img
            src={letter}
            alt="편지 이미지"
            className="w-[88px] absolute left-[600px] bottom-[40%]"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[64px] font-extrabold font-pretendard text-white">
              모르는게 있으신가요?
            </p>
            <div className="flex">
              <span className="text-[64px] font-extrabold text-[#DDA67E] font-pretendard">
                Whis
              </span>
              <p className="text-[64px] font-extrabold text-white font-pretendard">
                와 함께해요!
              </p>
            </div>
          </div>
          <button className="text-white border border-white w-[140px] h-[54px] rounded-xl font-bold mt-[59px]">
            <Link to="/signin">로그인 하러가기</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
