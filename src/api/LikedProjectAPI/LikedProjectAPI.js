


import axios from "axios";


import { logOut } from "../../../src/redux_store/User_redux/User_function";

const APP_API_URL = import.meta.env.APP_API_URL || "http://localhost:8080";

export const LikedProjectAPI = axios.create({
  baseURL: APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}); 


LikedProjectAPI.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);


LikedProjectAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    // console.log("LikedProjectAPI response error:", error);
    const originalRequest = error.config;

    if (!originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (error.response && error.response.status === 401) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          `${APP_API_URL}/api/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data?.accessToken;

        if (!newAccessToken) {
          throw new Error("No access token returned from refresh endpoint.");
        }

        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return LikedProjectAPI(originalRequest);
      } catch (refreshError) {  
    
        console.error("Token refresh error:", refreshError);

         localStorage.removeItem("accessToken");

//   optionally:
     
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);  