import logo from '../../assets/img/logo.png';
import Input from '../../components/accept/input';

export default function AcceptPage() {
  return (
    <div className="flex justify-center items-center h-screen font-pretendard">
      <div className="w-[475px] h-[391px] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] shadow-box gap-[10px]">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-medium text-xs">모든 약관을 읽고 동의 합니다</p>
        </div>
        <div>
          <Input link={'/service'} content={'서비스 이용약관'} />
          <Input link={'/'} content={'서비스 이용약관'} />
          <Input link={'/service'} content={'서비스 이용약관'} />
        </div>
      </div>
    </div>
  );
}
