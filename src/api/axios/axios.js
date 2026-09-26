import axios from "axios";


// ========================================
// AUTH API
// ========================================
const APP_API_URL = import.meta.env.APP_API_URL || "http://localhost:8080";

export const AuthApi = axios.create({
    baseURL: `${APP_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});


// ========================================
// PROTECTED API
// ========================================

const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};

const Api = axios.create({
    baseURL: `${APP_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});


// ========================================
// REQUEST INTERCEPTOR
// ========================================

Api.interceptors.request.use(
    (config) => {

        const accessToken = getAccessToken();

        if (!accessToken) {

            const error =
                new Error("ACCESS_TOKEN_MISSING");

            error.code =
                "ACCESS_TOKEN_MISSING";

            return Promise.reject(error);
        }

        config.headers.Authorization =
            `Bearer ${accessToken}`;

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


// ========================================
// RESPONSE INTERCEPTOR
// ========================================

Api.interceptors.response.use(

    (response) => {
        return response;
    },

    async (error) => {

        const originalRequest = error.config;


        // --------------------------------
        // Only handle 401
        // --------------------------------

        if (
            error.response?.status !== 401 ||
            !originalRequest ||
            originalRequest._retry
        ) {
            return Promise.reject(error);
        }


        // --------------------------------
        // Mark request as retried
        // --------------------------------

        originalRequest._retry = true;


        try {

            console.log(
                "Access token expired. Refreshing..."
            );


            // IMPORTANT:
            // Use AuthApi, NOT Api

            const refreshResponse =
                await AuthApi.post(
                    "/auth/refresh"
                );


            const newAccessToken =
                refreshResponse.data?.accessToken;


            if (!newAccessToken) {
                throw new Error(
                    "No access token returned from refresh"
                );
            }


            // --------------------------------
            // Save new token
            // --------------------------------

            localStorage.setItem(
                "accessToken",
                newAccessToken
            );


            // --------------------------------
            // Retry original request
            // --------------------------------

            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;


            return Api(originalRequest);


        } catch (refreshError) {

            console.error(
                "Refresh token failed:",
                refreshError
            );


            // Access token is no longer usable

            localStorage.removeItem(
                "accessToken"
            );

            localStorage.removeItem(
                "user"
            );


            return Promise.reject(
                refreshError
            );
        }
    }
);


// ========================================
// DASHBOARD API
// ========================================

export const DashboardRequest = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});


export default Api;