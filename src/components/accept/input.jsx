import { Link } from 'react-router-dom';

export default function Input({ link, content, checked, onClick }) {
  return (
    <div className="w-[395px] h-[50px] flex justify-between items-center p-4 rounded-xl font-pretendard border border-[#818181] bg-white">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onClick} // 체크 시 부모 상태 변경
          className="w-4 h-4 mr-2"
        />
        <p className="text-[#818181]">{content}</p>
      </label>
      <Link to={link} className="text-[12px] text-blue-500">
        보기
      </Link>
    </div>
  );
}
