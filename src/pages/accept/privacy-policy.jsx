import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen font-pretendard relative">
      {/* 이전 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        ← 이전
      </button>

      <div className="w-[642px] h-[587px] bg-[#FFF7F0] flex flex-col items-center justify-center rounded-[2rem] shadow-box gap-[10px] p-[32px]">
        <p className="font-medium text-[24px]">개인정보처리방침</p>
        <div className="w-[581px] h-[484px] bg-white border border-[#818181] rounded-xl overflow-y-auto p-4">
          <div className="text-center">
            1. 수집 항목
            <br />
            필수: 닉네임, 이메일, 비밀번호
            <br />
            선택: 프로필 사진, 학과/전공
            <br />
            자동 수집 정보: 접속 IP, 쿠키, 서비스 이용 기록
            <br />
            <br />
            2. 이용 목적
            <br />
            회원 식별 및 관리
            <br />
            게시판 글 작성 및 커뮤니티 활동 지원
            <br />
            서비스 제공 및 개선
            <br />
            불법·부정 이용 방지, 보안 유지
            <br />
            <br />
            3. 보유 기간
            <br />
            회원 탈퇴 시 즉시 파기
            <br />
            법령에 따른 보관:
            <br />
            로그 기록: 3개월 (통신비밀보호법)유료 거래 기록: 5년 (전자상거래법)
            <br />
            <br />
            4. 파기 절차 및 방법
            <br />
            전자적 파일: 복구 불가능하게 삭제
            <br />
            종이 문서: 소각 또는 분쇄
            <br />
            <br />
            5. 이용자 권리
            <br />
            개인정보 열람·정정·삭제·처리정지 가능
            <br />
            요청 방법: 계정 설정 또는 이메일(s25067@gsm.hs.kr)
            <br />
            <br />
            6. 개인정보 보호책임자
            <br />
            성명: 전세준
            <br />
            연락처: s25067@gsm.hs.kr
            <br />
            <br />
            7. 쿠키 안내
            <br />
            접속 기록, 맞춤 알림 등에 사용
            <br />
            브라우저 설정으로 거부 가능
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
