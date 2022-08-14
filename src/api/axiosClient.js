import axios from "axios";
import queryString from "query-string";

import apiConfiguration from "./apiConfiguration";

const axiosClient = axios.create({
  baseURL: apiConfiguration.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify({...params, api_key: apiConfiguration.API_KEY }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    } else {
      return response;
    }
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
