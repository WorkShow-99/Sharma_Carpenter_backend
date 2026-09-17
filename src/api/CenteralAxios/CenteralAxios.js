// import axios from "axios";
// import AuthAPI from "./AuthAPI.js";



// import store from "../../../src/redux_store/main_store.js";
// import { logOut } from "../../../src/redux_store/User_redux/User_function";

// const API = axios.create({
//     baseURL: "http://localhost:8080/",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     withCredentials: true,
// });


// // =====================================
// // REQUEST INTERCEPTOR
// // =====================================

// API.interceptors.request.use(
//     (config) => {

//         const accessToken =
//             localStorage.getItem("accessToken");

//         if (accessToken) {

//             config.headers.Authorization =
//                 `Bearer ${accessToken}`;
//         }

//         return config;
//     },

//     (error) => {
//         return Promise.reject(error);
//     }
// );


// // =====================================
// // RESPONSE INTERCEPTOR
// // =====================================

// API.interceptors.response.use(

//     (response) => {
//         return response;
//     },

//     async (error) => {

//         const originalRequest =
//             error.config;


//         // Only handle 401
//         if (
//             error.response?.status !== 401 ||
//             !originalRequest ||
//             originalRequest._retry
//         ) {

//             return Promise.reject(error);
//         }


//         originalRequest._retry = true;


//         try {

//             // IMPORTANT:
//             // AuthAPI does NOT have this interceptor

//             const refreshResponse =
//                 await AuthAPI.post(
//                     "/auth/refresh"
//                 );


//             const newAccessToken =
//                 refreshResponse.data?.accessToken;


//             if (!newAccessToken) {

//                 throw new Error(
//                     "No access token returned"
//                 );
//             }


//             localStorage.setItem(
//                 "accessToken",
//                 newAccessToken
//             );


//             originalRequest.headers.Authorization =
//                 `Bearer ${newAccessToken}`;


//             return API(originalRequest);


//         } catch (refreshError) {

//             console.error(
//                 "Refresh token failed:",
//                 refreshError
//             );


//             // =================================
//             // USER IS NO LONGER AUTHENTICATED
//             // =================================

//             localStorage.removeItem(
//                 "accessToken"
//             );

//             localStorage.removeItem(
//                 "user"
//             );

//             store.dispatch(logOut());
            
//             return Promise.reject(
//                 refreshError
//             );
//         }
//     }
// );


// export default API;






import axios from "axios";
import AuthAPI from "./AuthAPI.js";

import store from "../../../src/redux_store/main_store.js";
import { logOut } from "../../../src/redux_store/User_redux/User_function";

const API = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});


// =====================================
// REFRESH STATE
// =====================================

let refreshPromise = null;


// =====================================
// REQUEST INTERCEPTOR
// =====================================

API.interceptors.request.use(
    (config) => {

        const accessToken =
            localStorage.getItem("accessToken");

        if (accessToken) {

            config.headers.Authorization =
                `Bearer ${accessToken}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


// =====================================
// RESPONSE INTERCEPTOR
// =====================================

API.interceptors.response.use(

    (response) => {
        return response;
    },

    async (error) => {

        const originalRequest =
            error.config;


        // =================================
        // NOT A 401
        // =================================

        if (
            error.response?.status !== 401 ||
            !originalRequest
        ) {
            return Promise.reject(error);
        }


        // =================================
        // REQUEST ALREADY RETRIED
        // =================================

        if (originalRequest._retry) {
            return Promise.reject(error);
        }


        originalRequest._retry = true;


        try {

            // =================================
            // CREATE ONLY ONE REFRESH REQUEST
            // =================================

            if (!refreshPromise) {

                refreshPromise =
                    AuthAPI
                        .post("/auth/refresh")
                        .then((response) => {

                            const newAccessToken =
                                response.data?.accessToken;

                            if (!newAccessToken) {
                                throw new Error(
                                    "No access token returned"
                                );
                            }

                            localStorage.setItem(
                                "accessToken",
                                newAccessToken
                            );

                            return newAccessToken;
                        })
                        .finally(() => {

                            refreshPromise = null;

                        });
            }


            // =================================
            // WAIT FOR THE SAME REFRESH
            // =================================

            const newAccessToken =
                await refreshPromise;


            // =================================
            // RETRY ORIGINAL REQUEST
            // =================================

            originalRequest.headers =
                originalRequest.headers || {};

            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;


            return API(originalRequest);


        } catch (refreshError) {

            console.error(
                "Refresh token failed:",
                refreshError
            );


            // =================================
            // LOG USER OUT
            // =================================

            localStorage.removeItem(
                "accessToken"
            );

            localStorage.removeItem(
                "user"
            );


            store.dispatch(
                logOut()
            );


            return Promise.reject(
                refreshError
            );
        }
    }
);


export default API;