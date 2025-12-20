import AuthHeader from '../../components/header/auth/ui';
import PostBox from '../../components/main/postbox';
import postbear from '../../assets/img/postbear.png';
import CreatePost from '../../components/main/createpost';
import blueberrybear from '../../assets/img/blueberrybear.png';
import letter from '../../assets/img/letter.png';
import snack from '../../assets/img/snack.png';
import hearts from '../../assets/img/hearts.png';
import paper from '../../assets/img/paper.png';
import { Link } from 'react-router-dom';

export default function MainAuthPage() {
  return (
    <div>
      <AuthHeader />
      <img
        src={postbear}
        alt="곰탱이 이미지"
        className="w-[104px] fixed bottom-[50px] left-[50px] z-50"
      />
      <CreatePost className="fixed bottom-[50px] right-[50px] z-50" />
      <div className="flex pt-[83px] pl-[474px] pr-[386px] pb-[110px] gap-[60px]">
        <PostBox />
        <div className="w-px bg-[#C2C2C2] h-[2350px]" />
        <div className="flex flex-col gap-[100px]">
          <div className="flex flex-col gap-5">
            <p className="font-pretendard font-semibold">
              Whis에 대한 모든 것📸
            </p>
            <div className="grid grid-cols-2 gap-5">
              <Link
                to="/about"
                className="flex flex-col bg-[#FFEEE1] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-extrabold">Whis?</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  Whis 알아보러 가기
                </p>
                <div className="flex justify-end">
                  <img
                    src={blueberrybear}
                    alt="블루베리 곰 이미지"
                    className="w-[62px]"
                  />
                </div>
              </Link>
              <Link
                to="/report-view"
                className="flex flex-col bg-[#FFE1E1] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-semibold">신고 내역</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  내가 신청한 신고에서
                  <br />
                  내가 받은 신고 내역까지
                </p>
                <div className="flex justify-end">
                  <img src={letter} alt="편지 이미지" className="w-[78px]" />
                </div>
              </Link>
              <Link
                to="/create-post"
                className="flex flex-col bg-[#D8EDFF] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-semibold">글 작성</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  카테고리를 설정하여
                  <br />
                  원하는 글 작성
                </p>
                <div className="flex justify-end">
                  <img
                    src={snack}
                    alt="한입 베어문 과자 이미지"
                    className="w-[55px]"
                  />
                </div>
              </Link>
              <Link
                to="/like-post"
                className="flex flex-col bg-[#FFD9C9] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5"
              >
                <p className="font-pretendard font-semibold">좋아요</p>
                <p className="font-pretendard text-[10px] mb-[21px]">
                  좋아요한 글 확인
                </p>
                <div className="flex justify-end">
                  <img src={hearts} alt="하트 이미지" className="w-[86px]" />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-pretendard font-semibold">문의하기</p>
            <Link
              to="/inquiry"
              className="flex flex-col bg-[#FFF6D0] rounded-xl w-[396px] h-[149px] pt-10 px-5"
            >
              <p className="font-pretendard text-[10px]">
                Whis에 대해 문의하실 내용이 있으신가요?
              </p>
              <p className="font-pretendard font-extrabold">
                문의하러 가기 &gt;
              </p>
              <div className="flex justify-end">
                <img
                  src={paper}
                  alt="종이와 연필 이미지"
                  className="w-[110px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
