

import SavedProjectAxios from "./SavedProjectAPI";




export  const deleteProjectFromDirectory = async (projectId, directoryId) => {
    try {
        const response = await SavedProjectAxios.delete(`/api/project-directories/${projectId}/save/${directoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting project from directory:", error);
        console.log(error.response?.data)
        throw error;
    }
};



export const fetchUnorganizedProjects = async ( cursor = null,
    limit = 5) => {
    try {
        const response = await SavedProjectAxios.get(`/api/project-directories/unorganized`, {
            params: {
                cursor,
                limit,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching unorganized projects:", error);
        throw error;
    }
}




export const fetchSavedProjectsInDirectory = async (directoryId) => {
    try {
        const response = await SavedProjectAxios.get(`/api/project-directories/${directoryId}/projects?limit=4`);
        return response.data;
    } catch (error) {
        console.error("Error fetching saved projects in directory:", error);
        throw error;
    }
}

// -----------to update the directory of the saved projects in the directory
export const UpdateDirectory = async (directoryId,data) => {
    try {
        const response = await SavedProjectAxios.patch(`/api/project-directories/${directoryId}`,data);
        return response.data;
    } catch (error) {
        console.error("Error updating directory:", error);
        throw error;
    }
};



export const deleteDirectory = async (directoryId) => {
    try {
        const response = await SavedProjectAxios.delete(`/api/project-directories/${directoryId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting directory:", error);
        throw error;
    }
};



