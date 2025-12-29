import instance from '../axios'; // 네 axios 인스턴스

export const getAllAlarms = (userId) =>
  instance.get(`/alarm/all?userId=${userId}`);

export const getFilteredAlarms = (userId, isRead) =>
  instance.get(`/alarm/filter?userId=${userId}&isRead=${isRead}`);

export const readAlarm = (alarmId) => {
  return instance.patch(`/alarm/read/${alarmId}`);
};
