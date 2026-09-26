import axios from "axios";

const APP_API_URL = import.meta.env.APP_API_URL || "http://localhost:8080";

const AuthAPI = axios.create({

    baseURL: `${APP_API_URL || "http://localhost:8080"}/api`,
    
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default AuthAPI;