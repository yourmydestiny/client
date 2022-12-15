import { BASE_URL, basicApi } from 'lib/config';

console.log(BASE_URL);

export const postSelectedInfo = async data => {
  try {
    const response = await basicApi.post(`/api/coasts`, data);

    if (response.status === 200) {
      return response.data;
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};

export const getResultInfo = async coastType => {
  try {
    const response = await basicApi.get(`/api/coasts/${coastType}`);

    if (response.status === 200) {
      return response.data;
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
