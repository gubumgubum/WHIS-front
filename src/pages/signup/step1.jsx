import logo from '../../assets/img/logo.png';
import TextInput from '../../components/signin/textInput';

function Step1Page() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
        <p>1단계 : 계정 정보 입력</p>
        <form>
          <TextInput placeholder="이메일" />
        </form>
      </div>
    </div>
  );
}

export default Step1Page;
