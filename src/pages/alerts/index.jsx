// pages/AlarmPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlarmItem from '../../components/alerts/alarmitem';
import { mockNotifications } from '../../mock/alerts/index';
import AuthHeader from '../../components/header/auth/ui';

function AlarmPage() {
  const navigate = useNavigate();
  const [readIds, setReadIds] = useState([]);

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

  return (
    <div>
      <AuthHeader />

      <div className="flex flex-col items-center gap-4 py-8">
        {mockNotifications.map((alarm) => (
          <AlarmItem
            key={alarm.id}
            alarm={alarm}
            isRead={readIds.includes(alarm.id)}
            onClick={() => handleAlarmClick(alarm.id, alarm.link)}
          />
        ))}
      </div>
    </div>
  );
}

export default AlarmPage;
