import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import { UNAUTH_HEADER_NAV } from '../config';

export default function UnauthHeader() {
  return (
    <header className="flex items-center justify-center w-full h-[70px] border-b border-[#818181] gap-[418px]">
      <div>
        <Link to="/main-unauth">
          <img src={logo} alt="Logo" className="w-[82.62px] h-[55.5px]" />
        </Link>
      </div>
      <div className="flex items-center gap-[50px]">
        {UNAUTH_HEADER_NAV.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
