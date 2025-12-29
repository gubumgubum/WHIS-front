import { useNavigate } from 'react-router-dom';

export default function Addition() {
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
        <p className="font-medium text-[24px]">추가 약관/안내</p>
        <div className="w-[581px] h-[484px] bg-white border border-[#818181] rounded-xl overflow-y-auto p-4">
          <div className="text-center">
            저작권 정책
            <br />
            제1조 (목적)
            <br />
            본 정책은 whis 서비스 내에서 게시되는 모든 게시물, 이미지, 동영상
            등(이하 "게시물")의 저작권 보호 및 관리, 저작권 침해 분쟁 예방을
            목적으로 합니다.
            <br />
            <br />
            제2조 (게시물의 저작권)
            <br />
            1. 회원이 서비스 내에 게시한 게시물의 저작권은 원칙적으로 해당
            회원에게 귀속됩니다.
            <br />
            2. 단, 회원은 운영자가 서비스 홍보 및 운영을 위해 필요한 범위 내에서
            게시물을 무상으로 이용할 수 있도록 허락한 것으로 봅니다.
            <br />
            <br />
            제3조 (저작권 침해 금지)
            <br />
            회원은 다음과 같은 게시물을 등록해서는 안 됩니다.
            <br />
            1. 타인의 저작권, 초상권, 상표권 등 권리를 침해하는 내용
            <br />
            2. 불법 복제물, 음란물, 불법 다운로드 링크 등 법령을 위반하는 내용
            <br />
            <br />
            제4조 (저작권 침해 신고 및 처리)
            <br />
            1. 권리자가 본인의 권리가 침해되었다고 판단하는 경우, 운영자에게
            서면 또는 이메일로 신고할 수 있습니다.
            <br />
            2. 운영자는 신고가 접수되면 해당 게시물의 임시 차단, 삭제 등의
            조치를 취할 수 있으며, 필요 시 관련 기관에 통보합니다.
            <br />
            3. 권리 침해가 반복되는 회원은 서비스 이용이 제한될 수 있습니다.
            <br />
            <br />
            청소년 보호 정책
            <br />
            제1조 (목적)
            <br />
            본 정책은 청소년이 유해한 정보로부터 보호받고, 건전한 인터넷 사용
            문화를 형성하기 위하여 [커뮤니티명]이 마련한 청소년 보호 정책입니다.
            <br />
            <br />
            제2조 (청소년 보호를 위한 조치)
            <br />
            운영자는 다음과 같은 조치를 시행합니다.
            <br />
            1. 유해 게시물 차단: 음란물, 폭력적 표현, 불법 정보 등 청소년에게
            유해한 게시물은 사전·사후 모니터링을 통해 삭제 또는 차단합니다.
            <br />
            2. 신고 기능 제공: 이용자가 유해 정보나 부적절한 게시물을 발견할
            경우 즉시 신고할 수 있는 기능을 제공합니다.
            <br />
            3. 청소년 보호 책임자 지정: 청소년이 안전하게 서비스를 이용할 수
            있도록 전담 책임자를 두고 관리합니다
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
