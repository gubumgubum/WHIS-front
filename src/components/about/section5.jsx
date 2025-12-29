import Team from './team';
import gun from '../../assets/img/gun.png';
import gue from '../../assets/img/gue.png';
import seo from '../../assets/img/seo.png';
import jiyu from '../../assets/img/jiyu.png';
import ha from '../../assets/img/ha.png';

export default function Section5() {
  return (
    <div className="w-full h-[1080px] font-pretendard flex justify-center items-center flex-col">
      <div className="flex flex-col items-center justify-center gap-1 mb-[54px]">
        <p className="text-[24px]">광주소프트웨어마이스터고</p>
        <p className="text-[36px] font-medium">제9회 아이디어페스티벌</p>
      </div>
      <p className="font-semibold text-[40px] mb-[73px]">
        팀 규범규범 Whis 개발진 소개
      </p>
      <div className="flex flex-col items-center justify-center gap-[54px]">
        <div className="flex items-center justify-center">
          <Team
            link={'https://github.com/lkw-k'}
            src={gun}
            name="이건우"
            and="AI과"
          />
        </div>
        <div className="flex items-center justify-center pr-[400px] gap-[100px]">
          <Team
            link={'https://github.com/Beom09'}
            src={gue}
            name="임규범"
            and="SW과"
          />
          <Team
            link={'https://github.com/jeonsejoon'}
            src={seo}
            name="전세준"
            and="AI과"
          />
        </div>
        <div className="flex items-center justify-center gap-[100px]">
          <Team
            link={'https://github.com/jyuuuuu0'}
            src={jiyu}
            name="김지유"
            and="SW과"
          />
          <Team
            link={'https://github.com/hikeong'}
            src={ha}
            name="이하경"
            and="IOT과"
          />
          <Team
            link={'https://github.com/lkw-k'}
            src={gun}
            name="이건우"
            and="AI과"
          />
        </div>
        <div className="flex items-center justify-center gap-[247px] font-medium text-[32px]">
          <p>Front-End</p>
          <p>Back-End</p>
          <p>Design</p>
        </div>
      </div>
    </div>
  );
}
