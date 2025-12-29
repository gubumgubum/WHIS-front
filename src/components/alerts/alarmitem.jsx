import { Link } from 'react-router-dom';

export default function AlarmItem({ alarm, isRead, onClick }) {
  return (
    <Link
      to="/view-post"
      onClick={onClick}
      className={`
        relative w-[544px] h-[176px] cursor-pointer rounded-[32px]
        px-[46px] pb-[31px] pt-10
        shadow-[6px_6px_15px_1px_rgba(0,0,0,0.15)]
        ${isRead ? 'bg-white' : 'bg-[#EDF8FF]'}
      `}
    >
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center">{alarm.icon}</div>

        <p className="text-[20px] font-pretendard font-medium text-[#1E0D00]">
          {alarm.title}
        </p>
      </div>
      <p className="mt-[20px] text-sm text-[#818181] font-pretendard ml-[28px]">
        {alarm.content}
      </p>
      <p className="mt-[27px] text-xs text-[#818181] ml-[28px]">
        {alarm.createdAt}
      </p>
      {!isRead && (
        <span className="absolute right-[49px] top-[44px] h-[15px] w-[15px] rounded-full bg-[#20ABFF]" />
      )}
    </Link>
  );
}
