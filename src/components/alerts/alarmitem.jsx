// components/alarm/AlarmItem.jsx
function AlarmItem({ alarm, isRead, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        relative w-[480px] cursor-pointer rounded-2xl p-5
        transition shadow-sm hover:shadow-md
        ${isRead ? 'bg-white' : 'bg-blue-50'}
      `}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow">
          {alarm.icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{alarm.title}</p>
          <p className="mt-1 text-sm text-gray-500">{alarm.content}</p>
          <span className="mt-2 block text-xs text-gray-400">
            {alarm.createdAt}
          </span>
        </div>
      </div>
      {!isRead && (
        <span className="absolute right-4 top-5 h-2 w-2 rounded-full bg-blue-500" />
      )}
    </div>
  );
}

export default AlarmItem;
