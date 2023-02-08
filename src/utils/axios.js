import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://nontonyuk.deta.dev",
  // baseURL: "http://localhost:3001",
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
    if (error.response.status === 403) {
      alert(error.response.data.msg);
      if (error.response.data.msg !== "jwt expired") {
        // alert(error.response.data.msg);
        // localStorage.clear();
        // window.location.href = "/login";
      } else {
        const refreshToken = localStorage.getItem("refreshToken");
        // console.log(refreshToken);
        axiosApiIntances
          .post("auth/refresh", { refreshToken })
          .then((res) => {
            // res = {
            //   data: {
            //     data: {
            //       id: ...
            //       token: ...
            //       refreshToken: ...
            //     }
            //   }
            // }
            // console.log(res);
            // alert("token baru berhasil di dapatkan");
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch((err) => {
            // alert(error.response.data.msg);
            localStorage.clear();
            window.location.href = "/login";
          });
      }
    }

    return Promise.reject(error);
  }
);

// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
//   "token"
// )}`;
export default axiosApiIntances;
