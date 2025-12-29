import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import Input from '../../components/accept/input';
import Button from '../../components/signin/button';

export default function AcceptPage() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({
    service: false,
    privacy: false,
    addition: false,
  });

  // localStorage에서 체크 상태 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('accept-checked');
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch (e) {
        // 파싱 에러 시 무시
      }
    }
  }, []);

  // 버튼 활성화 여부
  const allChecked = Object.values(checked).every(Boolean);

  const handleChange = (key) => {
    setChecked((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem('accept-checked', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="flex justify-center items-center h-screen font-pretendard">
      <div className="w-[475px] h-[391px] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] shadow-box gap-[10px]">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-medium text-xs">모든 약관을 읽고 동의 합니다</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <Input
            link="/service"
            content="서비스 이용약관"
            checked={checked.service}
            onClick={() => handleChange('service')}
          />
          <Input
            link="/privacy-policy"
            content="개인정보 처리방침"
            checked={checked.privacy}
            onClick={() => handleChange('privacy')}
          />
          <Input
            link="/addition"
            content="추가 약관/안내"
            checked={checked.addition}
            onClick={() => handleChange('addition')}
          />
        </div>

        <Button
          type="button"
          onClick={() => {
            if (allChecked) {
              localStorage.removeItem('accept-checked'); // 동의 후 상태 초기화
              navigate('/main-auth');
            }
          }}
          disabled={!allChecked}
          className={`transition-colors ${
            allChecked ? 'bg-[#AC7F5E]' : 'bg-gray-300'
          }`}
        >
          약관동의
        </Button>
      </div>
    </div>
  );
}
