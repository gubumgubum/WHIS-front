import logo from '../../assets/img/logo.png';

function Step2Page() {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-light text-xs">2단계 : 프로필 정보 입력</p>
        </div>
      </div>
    </div>
  );
}

export default Step2Page;
