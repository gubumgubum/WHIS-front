import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import PasswordInput from '../../components/signin/passwrodInput';
import TextInput from '../../components/signin/textInput';
import Button from '../../components/signin/button';
import { Link } from 'react-router-dom';

function Step1Page() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password,
  );

  const isFormValid =
    email.trim() !== '' && isPasswordValid && password === passwordConfirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    navigate('/signup-step2', {
      state: {
        email,
        password,
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[480px] h-[466px] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] shadow-box gap-[34px]">
        <div>
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-light text-xs">1단계 : 계정 정보 입력</p>
        </div>
        <div className="flex flex-col items-center gap-[15px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-[15px]"
          >
            <TextInput
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col gap-[30px]">
              <div>
                <PasswordInput
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="font-light text-xs text-[#818181] mt-[5px] mb-[10px]">
                  영문과 숫자를 포함한 8자 이상
                </p>
                <PasswordInput
                  placeholder="비밀번호 확인"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={!isFormValid}
                className={isFormValid ? 'bg-[#AC7F5E]' : 'bg-[#BA9A81]'}
              >
                다음
              </Button>
            </div>
          </form>
          <p className="inline-flex text-xs text-[#818181] gap-1">
            이미 계정이 있다면,
            <Link to="/signin" className="text-[#AC7F5E]">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step1Page;
