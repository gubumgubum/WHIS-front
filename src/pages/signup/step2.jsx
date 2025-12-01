import logo from '../../assets/img/logo.png';
import defaultProfile from '../../assets/img/defaultImage.png';

function Step2Page() {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="Logo" className="w-[126px] h-[86px]" />
          <p className="font-light text-xs">2단계 : 프로필 정보 입력</p>
        </div>
        <form>
          <div>
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border border-black">
              <img
                src={defaultProfile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2Page;
