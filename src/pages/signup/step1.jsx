import logo from '../../assets/img/logo.png';

function Step1Page() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
        <p>1단계 : 계정 정보 입력</p>
      </div>
    </div>
  );
}

export default Step1Page;
