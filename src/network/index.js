import axios from "axios";

export function $req(config) {
  const axiosInstance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });
  axiosInstance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );
  axiosInstance.interceptors.response.use(
    ret => {
      return ret.data;
    },
    err => {
      console.log(err);
    }
  );
  return axiosInstance(config);
}
