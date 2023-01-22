import { basicApi } from 'lib/config';
import axios from '../../node_modules/axios/index';

export const postSelectedInfo = async data => {
  try {
    const response = await axios.post(`https://mytamla.shop/api/coasts`, data);

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
    const response = await basicApi.get(
      `https://mytamla.shop/api/coasts/${coastType}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return [response.data.error, response.data.message];
    }
  } catch (e) {
    return [true, e.message];
  }
};
