import { Link } from 'react-router-dom';

export default function Input({ link, content }) {
  return (
    <Link
      to={link}
      className="w-[395px] h-[50px] bg-white border border-[#818181] flex justify-between items-center p-4 rounded-xl font-pretendard"
    >
      <p className="text-[#818181]">{content}</p>
      <p className="text-[12px]">확인하고 동의</p>
    </Link>
  );
}
