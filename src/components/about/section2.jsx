import logo2 from '../../assets/img/logo2.png';

export default function Section2() {
  return (
    <section
      id="section2"
      className="w-[1920px] h-[1080px] font-pretendard  items-center justify-center flex flex-col"
    >
      <div className="flex flex-col gap-[58.27px] items-center jusitify-center">
        <div className="flex">
          <img src={logo2} alt="Whis 로고" className="w-[208.53px]" />
          <p className="flex items-end pb-[34px] font-medium text-[36px]">
            는 무슨 서비스인가요? 💡
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[48px] bg-[#FFF9F4] rounded-[32px] w-[1055px] h-[486px] text-[32px] border border-[#818181]">
          <p>Whis는 Whispering Peers 합성어로 ‘속삭이는 또래들’</p>
          <div className="flex flex-col justify-center items-center">
            <p>즉, 부담 없이 조용히, 같은 또래끼리</p>
            <p>생각과 질문을 나눌 수 있는 공간을 상징합니다</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>이를 통해 GSM 학생들은 익명으로 자유롭게 질문하고, </p>
            <p>
              같은 고민을 가진 또래와 공감하며 서로의 경험을 공유할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
