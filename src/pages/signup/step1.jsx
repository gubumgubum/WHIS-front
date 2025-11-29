import logo from '../../assets/img/logo.png';
import PasswordInput from '../../components/signin/passwrodInput';
import TextInput from '../../components/signin/textInput';
import Button from '../../components/signin/button';

function Step1Page() {
  return (
    <div>
      <div>
        <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
        <p>1단계 : 계정 정보 입력</p>
        <form>
          <TextInput placeholder="이메일" />
          <div>
            <PasswordInput placeholder="비밀번호" />
            <p>영문과 숫자를 포함한 8자 이상</p>
            <PasswordInput placeholder="비밀번호 확인" />
          </div>
          <Button type="submit">다음</Button>
        </form>
      </div>
    </div>
  );
}

export default Step1Page;
