

import SaveDirectoryAPI from "./SaveDirectoryAPI";


export const FetchAllDirectories = async () => {
    try {
        const response = await SaveDirectoryAPI.get("/api/project-directories");
        return response.data;
    } catch (error) {
        console.error("Error fetching all directories:", error);
        throw error;
    }
};


export const createSavedDirectory = async (name, directoryData) => {
    try {
        const response = await SaveDirectoryAPI.post("/api/project-directories", {
            name,
            ...directoryData
        });
        return response.data;
    } catch (error) {
        console.error("Error creating saved directory:", error);
        throw error;
    }
}

export const deleteSavedDirectory = async (directoryId) => {
    try {
        const response = await SaveDirectoryAPI.delete(`/api/project-directories/${directoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting saved directory:", error);
        throw error;
    }
}


export const updateSavedDirectory = async (directoryId, updatedData) => {
    try {
        const response = await SaveDirectoryAPI.patch(`/api/project-directories/${directoryId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Error updating saved directory:", error);
        throw error;
    }
};


export const fetchDirectoryById = async (directoryId) => {
    try {
        const response = await SaveDirectoryAPI.get(`/api/project-directories/${directoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching directory by ID:", error);
        throw error;
    }
};  

