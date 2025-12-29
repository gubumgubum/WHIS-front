import { useNavigate } from 'react-router-dom';

export default function Service() {
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
        <p className="font-medium text-[24px]">서비스 이용약관</p>
        <div className="w-[581px] h-[484px] bg-white border border-[#818181] rounded-xl overflow-y-auto p-4">
          <div className="text-center">
            제1조 (목적)
            <br />
            본 약관은 whis이 제공하는 온라인 커뮤니티 서비스(이하 “서비스”)의
            이용조건 및 절차, 회원과 운영자의 권리·의무와 책임사항을 규정함을
            목적으로 합니다.
            <br />
            <br />
            제2조 (회원가입)
            <br />
            1. 회원가입은 이용자가 본 약관과 개인정보 처리방침에 동의하고,
            운영자가 이를 승인함으로써 성립합니다.
            <br />
            2. 운영자는 다음 각 호의 사유가 있는 경우 회원가입을 거부할 수
            있습니다.
            <br />
            - 타인의 명의나 이메일 주소를 도용한 경우
            <br />
            - 허위 정보를 기재한 경우
            <br />
            - 기타 운영자가 부적절하다고 판단하는 경우
            <br />
            <br />
            제3조 (서비스의 내용)
            <br />
            1. 서비스는 게시판, 댓글, 채팅 등 회원 간 소통과 정보 공유 기능을
            제공합니다.
            <br />
            2. 운영자는 필요에 따라 서비스의 일부 또는 전부를 변경하거나 중단할
            수 있습니다.
            <br />
            <br />
            제4조 (회원의 의무)
            <br />
            1. 회원은 서비스 이용 시 다음 행위를 해서는 안 됩니다.
            <br />
            2. 타인의 개인정보 또는 계정 도용
            <br />
            3. 불법 정보, 음란물, 욕설, 혐오 표현, 스팸성 게시물 작성
            <br />
            4. 저작권, 초상권 등 타인의 권리를 침해하는 행위
            <br />
            5. 운영 방해 행위 (해킹, 서버 공격, 광고성 도배 등)
            <br />
            <br />
            제5조 (게시물 관리 및 저작권)
            <br />
            1. 회원이 작성한 게시물의 저작권은 해당 회원에게 귀속됩니다.
            <br />
            2. 운영자는 서비스 운영 및 홍보 목적에 한해 합리적인 범위에서
            게시물을 이용할 수 있습니다.
            <br />
            3. 운영자는 약관 또는 법령에 위반되는 게시물을 사전 통지 없이 삭제할
            수 있습니다.
            <br />
            <br />
            제6조 (서비스 중단 및 면책)
            <br />
            1. 운영자는 천재지변, 시스템 장애 등 불가항력적 사유로 서비스를
            중단할 수 있습니다.
            <br />
            2. 운영자는 회원이 게시한 정보의 정확성·신뢰성에 대해 보증하지
            않으며, 그로 인한 손해에 책임을 지지 않습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
