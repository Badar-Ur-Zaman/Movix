import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, { params });
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
