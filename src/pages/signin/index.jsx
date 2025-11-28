import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import Button from '../../components/signin/button';
import PasswordInput from '../../components/signin/passwrodInput';
import TextInput from '../../components/signin/textInput';

function SigninPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30rem] h-[21.25rem] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] gap-[0.75rem] shadow-box">
        <img src={logo} alt="Logo" width={126} height={86} />
        <form className="flex flex-col items-center gap-4">
          <TextInput placeholder="이메일" />
          <PasswordInput placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
          <p className="inline-flex text-xs text-[#818181] gap-1">
            아직 계정이 없다면,
            <Link to="/signup" className="text-[#AC7F5E]">
              회원가입
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
