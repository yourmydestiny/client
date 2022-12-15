import { BASE_URL, basicApi } from 'lib/config';
import axios from '../../node_modules/axios/index';

console.log(BASE_URL);

export const postSelectedInfo = async data => {
  try {
    //   const response = await axios({
    //     method: "POST",
    //     url:'http://ec2-43-201-87-82.ap-northeast-2.compute.amazonaws.com:8080',
    //     data: {
    //       irdntNms: [...irdntNms],
    //       email: email,
    //     },
    //     headers: { contentType: "application/json" },
    //   });
    //   return response.data;
    // } catch (error) {
    //   throw new Error(error);
    // }
    const response = await axios.post(
      `http://ec2-43-201-87-82.ap-northeast-2.compute.amazonaws.com:8080/api/coasts`,
      data
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
