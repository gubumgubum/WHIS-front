import instance from '../axois'; // 네 axios 인스턴스

export const getAllAlarms = (userId) =>
  instance.get(`/alarm/all?userId=${userId}`);

export const getFilteredAlarms = (userId, isRead) =>
  instance.get(`/alarm/filter?userId=${userId}&isRead=${isRead}`);
// 알림 읽음 처리
export const readAlarm = (alarmId) => {
  return instance.patch(`/alarm/read/${alarmId}`);
  // 또는
  // return instance.post(`/alarm/read/${alarmId}`);
};
