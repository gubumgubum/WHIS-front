import { useEffect, useState } from 'react';
import AlarmItem from '../../components/alerts/alarmitem';
import AuthHeader from '../../components/header/auth/ui';
import Dropdown from '../../components/main/dropdown';
import letter from '../../assets/img/letter.png';
import {
  getAllAlarms,
  getFilteredAlarms,
  readAlarm,
} from '../../apis/alerts/alarm';
import { toast } from 'sonner';

function AlarmPage() {
  const [alarms, setAlarms] = useState([]);
  const [filter, setFilter] = useState('전체');

  useEffect(() => {
    const userId = 1;

    if (filter === '전체') {
      getAllAlarms(userId).then((res) => setAlarms(res.data));
    } else if (filter === '읽음') {
      getFilteredAlarms(userId, true).then((res) => setAlarms(res.data));
    } else {
      getFilteredAlarms(userId, false).then((res) => setAlarms(res.data));
    }
  }, [filter]);
  const handleAlarmClick = async (alarm) => {
    if (!alarm.read) {
      try {
        await readAlarm(alarm.id);

        setAlarms((prev) =>
          prev.map((a) => (a.id === alarm.id ? { ...a, read: true } : a)),
        );
      } catch (e) {
        toast.error('알림 읽음 처리 실패');
      }
    }
  };

  return (
    <div className="relative">
      <AuthHeader />
      <img
        src={letter}
        alt="편지 이미지"
        className="w-[140px] fixed bottom-[50px] right-[50px] z-50"
      />
      <div className="flex flex-col py-[83px] px-[688px] gap-10">
        <div className="flex">
          <Dropdown
            options={['전체', '읽음', '안읽음']}
            defaultValue="전체"
            onChange={setFilter}
          />
        </div>

        <div className="flex flex-col items-center gap-4 py-4">
          {alarms.length === 0 ? (
            <div className="font-pretendard text-xl font-semibold">
              알람이 없습니다.
            </div>
          ) : (
            alarms.map((alarm) => (
              <AlarmItem
                key={alarm.id}
                alarm={alarm}
                onClick={() => handleAlarmClick(alarm)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AlarmPage;
