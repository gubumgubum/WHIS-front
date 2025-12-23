// pages/alerts/index.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AlarmItem from '../../components/alerts/alarmitem';
import { mockNotifications } from '../../mock/alerts';
import AuthHeader from '../../components/header/auth/ui';
import Dropdown from '../../components/main/dropdown';

function AlarmPage() {
  const navigate = useNavigate();
  const [readIds, setReadIds] = useState([]);
  const [filter, setFilter] = useState('전체');

  useEffect(() => {
    const stored = sessionStorage.getItem('readNotifications');
    if (stored) {
      setReadIds(JSON.parse(stored));
    }
  }, []);

  const handleAlarmClick = (id, link) => {
    if (!readIds.includes(id)) {
      const updated = [...readIds, id];
      setReadIds(updated);
      sessionStorage.setItem('readNotifications', JSON.stringify(updated));
    }
    navigate(link);
  };

  const filteredNotifications = mockNotifications.filter((alarm) => {
    const isRead = readIds.includes(alarm.id);
    if (filter === '읽음') return isRead;
    if (filter === '안읽음') return !isRead;
    return true;
  });

  return (
    <div>
      <AuthHeader />
      <div className="flex flex-col py-[83px] px-[688px] gap-10">
        <div className="flex">
          <Dropdown
            options={['전체', '읽음', '안읽음']}
            defaultValue="전체"
            onChange={setFilter}
          />
        </div>
        <div className="flex flex-col items-center gap-4 py-4">
          {filteredNotifications.map((alarm) => (
            <AlarmItem
              key={alarm.id}
              alarm={alarm}
              isRead={readIds.includes(alarm.id)}
              onClick={() => handleAlarmClick(alarm.id, alarm.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlarmPage;
