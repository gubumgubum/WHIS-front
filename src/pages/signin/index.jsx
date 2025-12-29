import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';

import logo from '../../assets/img/logo.png';
import Button from '../../components/signin/button';
import PasswordInput from '../../components/signin/passwrodInput';
import TextInput from '../../components/signin/textInput';

import { login } from '../../apis/auth';

function SigninPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      setLoading(true);

      const data = await login({ email, password });

      sessionStorage.setItem('accessToken', data.accessToken);

      toast.success('로그인이 성공적으로 완료되었습니다.');
      navigate('/main-auth');
    } catch (error) {
      console.error('로그인 에러 상세:', error);
      toast.error('이메일 또는 비밀번호가 올바르지 않습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30rem] h-[21.25rem] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] gap-[0.75rem] shadow-box">
        <img src={logo} alt="Logo" width={126} height={86} />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <TextInput
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            disabled={!isFormValid || loading}
            className={!isFormValid ? 'bg-[#BA9A81]' : 'bg-[#AC7F5E]'}
          >
            {loading ? '로그인 중...' : '로그인'}
          </Button>

          <p className="inline-flex text-xs text-[#818181] gap-1">
            아직 계정이 없다면,
            <Link to="/signup-step1" className="text-[#AC7F5E]">
              회원가입
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
