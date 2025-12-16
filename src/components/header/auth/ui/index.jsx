import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import { AUTH_HEADER_NAV } from '../config';

export default function AuthHeader() {
  return (
    <header className="flex items-center justify-center w-full h-[70px] border-b border-[#818181] gap-[20px]">
      <div>
        <Link to="/main-unauth">
          <img src={logo} alt="Logo" className="w-[82.62px] h-[55.5px]" />
        </Link>
      </div>
      <div className="flex items-center">
        {AUTH_HEADER_NAV.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 ${item.className ?? ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
