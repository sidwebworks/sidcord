import axios from "axios";

export const createInstance = (token) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const axiosInstance = createInstance();

export default axiosInstance;
