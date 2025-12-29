import axios from '../axios';

export const uploadReportFile = async (file, reason) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('reason', reason);

  const res = await axios.post('/report/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

export const submitReport = async (data) => {
  return axios.post('/api/report/submit', data);
};
