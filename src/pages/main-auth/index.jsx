import AuthHeader from '../../components/header/auth/ui';
import PostBox from '../../components/signup/postbox';
import postbear from '../../assets/img/postbear.png';
import CreatePost from '../../components/signup/createpost';
import blueberrybear from '../../assets/img/blueberrybear.png';

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
      <div>
        <PostBox />
        <div className="w-px bg-[#818181] h-[2350px]" />
        <div className="flex">
          <div>
            <p className="font-pretendard font-semibold">
              Whis에 대한 모든 것📸
            </p>
            <div>
              <div className="flex flex-col bg-[#FFEEE1] rounded-xl w-[188px] h-[199px] pt-10 px-5 pb-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
