import AuthHeader from '../../components/header/auth/ui';
import defultimg from '../../assets/img/defaultImage.png';
import CommentItem from '../../components/view-post/commentitem';
import ReportButton from '../../components/view-post/moreactionbutton';
import FileDownload from '../../components/view-post/filedownload';
import LinkBox from '../../components/view-post/linkbox';
import Category from '../../components/view-post/category';
import ReactionBar from '../../components/view-post/reactionbar';

export default function ViewPostPage() {
  return (
    <div>
      <AuthHeader />

      <div className="flex justify-center pt-[46px] pb-[80px] pl-[385px] pr-[107px]">
        {/* 전체 컨테이너 */}
        <div className="flex w-[1200px]">
          {/* ===== 왼쪽 : 게시글 ===== */}
          <section className="flex-1 pr-[88px]">
            {/* 제목 */}
            <div className="flex justify-between items-center">
              <h1 className="text-[36px] font-pretendard font-semibold">
                전공 선택 어려워요
              </h1>
              <ReportButton />
            </div>

            <div className="mt-[59px] flex justify-between">
              <div className="flex items-start gap-2">
                <img
                  src={defultimg}
                  className="w-12 h-12 rounded-full border border-black"
                  alt="기본 이미지"
                />
                <div className="flex flex-col">
                  <div className="flex gap-[14px] items-center">
                    <span className="font-pretendard text-black">김지유</span>
                    <span>·</span>
                    <span className="font-pretendard text-[#818181] text-xs font-light">
                      2025년 12월 19일
                    </span>
                  </div>
                  <div className="mt-1">
                    <Category content="전공" />
                  </div>
                </div>
              </div>
              <ReactionBar initialLike={25} commentCount={147} />
            </div>
            <div className="mt-[40px] leading-7 text-black whitespace-pre-line">
              전공을 정하는 게 왜 이렇게까지 어려운 일인지 도무지 모르겠어요.
              그냥 하나 고르면 되는 문제인 것 같은데, 막상 진짜로 선택해야
              한다고 생각하면 머릿속이 하얘지고 아무것도 결정할 수 없게 돼요.
              하루 종일 이 생각만 하다 보면 시간이 이렇게 흘러도 되는 건가 싶을
              정도로 불안해지고, 답은커녕 마음만 점점 더 조급해져요. 주변에서는
              다들 아무렇지 않게 “너는 뭐 할 거야?”, “전공은 정했어?” 하고
              묻는데, 그 말들이 왜 이렇게 아프게 들리는지 모르겠어요. 악의가
              없다는 걸 알면서도 그 질문 하나하나가 괜히 제 가슴을 콕콕 찌르는
              느낌이에요. 솔직히 말하면 아직 제가 뭘 좋아하는지도 잘 모르겠고,
              뭘 잘할 수 있는지도 확신이 없어요. 디자인을 생각하면 감각 있어
              보이고 자유롭고 재밌을 것 같다는 생각이 들다가도, 이걸 평생 가까이
              두고 할 수 있을까, 언젠가는 질려서 후회하지 않을까 하는 걱정이
              바로 따라와요. 프론트엔드를 떠올리면 내가 만든 화면이 바로 보이는
              게 매력적으로 느껴지지만, 코딩이 막힐 때마다 스스로를 계속
              의심하게 될 것 같아서 겁이 나요. 백엔드는 또 더 멀게 느껴지고,
              나랑 정말 맞는 길인지 감도 안 잡혀요. 전공 하나를 고르는 일인데도
              마치 인생 전체를 걸고 도박하는 기분이 들어서 더 무서운 것 같아요.
              이 선택 하나로 미래가 완전히 달라질 것만 같고, 한 번 잘못 고르면
              되돌릴 수 없을 것처럼 느껴져요. 그래서 가끔은 누가 옆에서 “이게
              정답이야, 이 길로 가면 돼”라고 딱 잘라 말해줬으면 좋겠다는 생각도
              들어요. 그냥 그 말에 기대서 아무 생각 없이 따라가고 싶을 때도
              있어요. 그런데 또 그러면 안 된다는 걸 스스로가 제일 잘 알고 있어서
              더 괴로워요. 결국 선택은 내가 해야 하고, 그 결과도 내가 감당해야
              한다는 걸 아니까 책임이 너무 무겁게 느껴져요. 그래서 요즘은 뭘
              선택해야 할지 고민한다기보다는, 그냥 모르겠다는 감정만 계속
              쌓여가는 느낌이에요. 디자인인지, 프론트인지, 백엔드인지 아무것도
              확신이 없고, 내가 지금 제대로 고민하고 있는 건지도 모르겠어요.
              오늘도 결국 결론은 못 내린 채로 “전공 정하는 거 너무 어렵다”라는
              말만 혼자 계속 반복하게 돼요. 이게 단순히 선택을 못 해서가 아니라,
              내 미래를 스스로 결정해야 한다는 사실 자체가 너무 무겁게 느껴져서
              그런 것 같아요.
            </div>
            <div className="mt-[32px] flex flex-col gap-7">
              <FileDownload />
              <LinkBox />
            </div>
          </section>

          <div className="w-px bg-[#E5E5E5]" />

          <section className="flex-1 pl-[88px]">
            <div className="flex flex-col gap-7">
              <CommentItem />
              <CommentItem />
              <CommentItem />
            </div>
            <div className="mt-[32px] border-t pt-4">
              <p className="font-pretendard font-medium mb-[21px]">
                게시글 댓글 작성하기
              </p>
              <div className="flex gap-2">
                <img
                  className="w-10 h-10 border border-black rounded-full"
                  src={defultimg}
                  alt="기본 이미지"
                />

                <input
                  className="flex-1 border-b border-[#818181] pb-[5px] text-[#818181] font-pretendard font-light focus:outline-none"
                  placeholder="댓글을 작성하세요..."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
