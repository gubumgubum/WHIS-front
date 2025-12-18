import UnauthHeader from '../../components/header/unauth/ui';
import employment from '../../assets/img/employment.png';

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
          <p className="text-[64px] font-black  tracking-[-0.06em] text-white">
            모르는게 있으신가요?
          </p>
          <div className="flex">
            <span className="text-[64px] font-black text-[#DDA67E]  tracking-[-0.06em]">
              Whis
            </span>
            <p className="text-[64px] font-black text-white  tracking-[-0.06em]">
              와 함께해요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
