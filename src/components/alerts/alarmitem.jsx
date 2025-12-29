import { Link } from 'react-router-dom';

export default function AlarmItem({ alarm, onClick }) {
  return (
    <Link
      to="/view-post"
      onClick={onClick}
      className={`
        relative w-[544px] h-[176px] cursor-pointer rounded-[32px]
        pl-[46px] pr-[65px] pb-[31px] pt-10
        shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)]
        ${alarm.read ? 'bg-white' : 'bg-[#EDF8FF]'}
      `}
    >
      <div className="flex items-center gap-1">
        <p className="text-[18px] font-pretendard font-medium text-[#1E0D00]">
          {alarm.message}
        </p>
      </div>

      <p className="mt-[27px] text-xs text-[#818181]">{alarm.createdAt}</p>

      {!alarm.read && (
        <span className="absolute right-[49px] top-[44px] h-[15px] w-[15px] rounded-full bg-[#20ABFF]" />
      )}
    </Link>
  );
}
