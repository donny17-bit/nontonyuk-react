import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://project-nontonyuk.herokuapp.com",
  // timeout: 10000,

  // Authorization: "",
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // const token = awa `Bearer ${localStorage.getItem("token")}`;

    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  function (error) {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
//   "token"
// )}`;
export default axiosApiIntances;
