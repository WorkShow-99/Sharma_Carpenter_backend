

import axios from "axios";

const APP_API_URL = import.meta.env.APP_API_URL || "http://localhost:8080";

export const UserLoginAPI = axios.create({
  baseURL: APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});








// import axios from "axios";



// const SavedProjectAxios = axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });



// SaveDirectoryAPI.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );


// SaveDirectoryAPI.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // console.log("SaveDirectoryAPI response error:", error);
//     const originalRequest = error.config;

//     if (!originalRequest || originalRequest._retry) {
//       return Promise.reject(error);
//     }

//     if (error.response && error.response.status === 401) {
//       originalRequest._retry = true;

//       try {
//         const refreshResponse = await axios.post(
//           "http://localhost:8080/api/auth/refresh",
//           {},
//           { withCredentials: true }
//         );

//         const newAccessToken = refreshResponse.data?.accessToken;