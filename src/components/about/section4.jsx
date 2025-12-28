import bear from '../../assets/img/bear.png';

export default function Section4() {
  return (
    <section className="w-[1920px] h-[1080px] font-pretendard flex items-center justify-center flex-col border-b border-">
      <div>
        <p className="font-medium text-[36px] mb-[105px]">
          Whis 마스코드를 소개해요! 🙌
        </p>
      </div>
      <div className="w-[995px] h-[418px] bg-[#FFF9F4] border border-[#818181] rounded-[32px] flex items-center justify-center gap-[62px]">
        <img src={bear} alt="머머 이미지" className="w-[154px]" />
        <div>
          <p className="font-extrabold text-[36px]">머머 (Murmur)</p>
          <div className="flex flex-col text-[#818181] text-[28px]">
            <p>murmur = 속삭임</p>
            <p>작은 속삭임까지 머머에게 말하면 다 들어줄 거예요😶‍🌫</p>
          </div>
        </div>
      </div>
      <div className="text-[20px] flex flex-col justify-center items-center mt-[64px]">
        <p>서비스 곳곳에 머머가 숨어 있을 거예요!</p>
        <p>머머를 찾으면 고민을 털어보세요☺️</p>
      </div>
    </section>
  );
}
