// components/alarm/AlarmItem.jsx
function AlarmItem({ alarm, isRead, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative w-[544px] h-[176px] cursor-pointer rounded-2xl px-[46px] pb-[34px] pt-10
        transition shadow-sm hover:shadow-md
        ${isRead ? 'bg-white' : 'bg-blue-50'}
      `}
    >
      <div className="flex gap-1 items-start">
        <div className="flex items-center justify-center">{alarm.icon}</div>
        <div className="flex-1">
          <p className="text-[20px] font-pretendard font-medium text-[#1E0D00]">
            {alarm.title}
          </p>
          <p className="mt-[20px] text-sm text-[#818181] font-pretendard">
            {alarm.content}
          </p>
          <p className="mt-[27px] text-xs text-[#818181]">{alarm.createdAt}</p>
        </div>
      </div>
      {!isRead && (
        <span className="absolute right-4 top-5 h-2 w-2 rounded-full bg-blue-500" />
      )}
    </div>
  );
}

export default AlarmItem;
