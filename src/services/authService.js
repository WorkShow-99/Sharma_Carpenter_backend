import api from "../api/axios/axios.js";


export const getCurrentUser = async (accessToken) => {

    if (!accessToken) {
        throw new Error("No access token found");
    }

    const response = await api.get("/auth/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if ( response.status !== 200) {
        throw new Error("Failed to fetch current user");
    }

    // axios responses contain the data on `response.data` (no .json() method)
    const data = response.data;
    console.log("Current user fetched:", data);
    return data ;




    };

    export const refreshAccessToken = async () => {

        return api.post("/auth/refresh");

    };


    export  const logoutUser = async () => {
        try {
            const response = await api.post("/auth/logout", {}, { withCredentials: true });
            if (response.status !== 200) {
                throw new Error("Failed to log out");
            }
            
            return true;
        } catch (error) {
            console.error("Logout error:", error.message);
            throw error;
        }
    };