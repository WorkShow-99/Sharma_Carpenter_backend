import axios from "axios";

const DashboardAxios = axios.create({
  baseURL: "http://localhost:8080/api/projects",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// REQUEST INTERCEPTOR
DashboardAxios.interceptors.request.use(
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

// RESPONSE INTERCEPTOR
DashboardAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops if original request does not exist or has already retried
    if (!originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (error.response && error.response.status === 401) {
      originalRequest._retry = true; // Mark as retried immediately

      try {
        // Use standard axios to avoid triggering DashboardAxios interceptor again
        const refreshResponse = await axios.post(
          "http://localhost:8080/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data?.accessToken;

        if (!newAccessToken) {
          throw new Error("No access token returned from refresh endpoint.");
        }

        // Save new token
        localStorage.setItem("accessToken", newAccessToken);

        // Update auth header for retried request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry original request
        return DashboardAxios(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);

        // Cleanup invalid state on refresh failure
        localStorage.removeItem("accessToken");

        // Optional: Redirect to login
        // window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default DashboardAxios;