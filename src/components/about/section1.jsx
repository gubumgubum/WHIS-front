import AuthHeader from '../../components/header/auth/ui';
import employment from '../../assets/img/employment.png';
import character from '../../assets/img/character.png';
import letter from '../../assets/img/letter.png';
import BottomArrow from '../../assets/icon/bottomarrow';

export default function Section1() {
  return (
    <div>
      <AuthHeader />
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
          <BottomArrow
            className="cursor-pointer absolute bottom-[63px] animate-bounce"
            color="white"
            onClick={() => {
              document
                .getElementById('section2')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </div>
  );
}
