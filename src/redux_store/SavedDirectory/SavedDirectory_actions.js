import {
    FETCH_DIRECTORIES_REQUEST,
    FETCH_DIRECTORIES_SUCCESS,
    FETCH_DIRECTORIES_FAILURE,

    CREATE_DIRECTORY_REQUEST,
    CREATE_DIRECTORY_SUCCESS,
    CREATE_DIRECTORY_FAILURE,

    DELETE_DIRECTORY_REQUEST,
    DELETE_DIRECTORY_SUCCESS,
    DELETE_DIRECTORY_FAILURE,

    UPDATE_DIRECTORY_REQUEST,
    UPDATE_DIRECTORY_SUCCESS,
    UPDATE_DIRECTORY_FAILURE,

    CLEAR_DIRECTORIES
} from "./SavedDirectory_types";


// ==========================================
// API BASE URL
// ==========================================

const API_URL = "http://localhost:5000/api/project-directories";

import SaveDirectoryAPI from "../../api/SaveDirectoryAPI/SaveDirectoryAPI";
import API from "../../api/CenteralAxios/CenteralAxios";
// ==========================================
// GET ALL DIRECTORIES
// ==========================================


export const fetchAllDirectories = () => {

    return async (dispatch) => {

        dispatch({
            type: FETCH_DIRECTORIES_REQUEST
        });

        try {

            const response = await API.get("/api/project-directories");

            if (response.status === 401) {
                throw new Error("Login required. Please log in again.");
            }

            if(response.status !== 200) {
                throw new Error(
                    "Failed to fetch directories"
                );
            }

            const data = await response.data;

            if (!data.success) {

                throw new Error(
                    data.message ||
                    "Failed to fetch directories"
                );
            }

            dispatch({
                type: FETCH_DIRECTORIES_SUCCESS,

                payload: data.directories
            });

            return data.directories;

        } catch (error) {

            if (error.response && error.response.status === 401) {
                dispatch({
                    type: FETCH_DIRECTORIES_FAILURE,

                    payload: "Login required. Please log in again."
                });
            } else {
                dispatch({
                    type: FETCH_DIRECTORIES_FAILURE,

                    payload: error.message
                });
            }

            // dispatch({
            //     type: FETCH_DIRECTORIES_FAILURE,

            //     payload: error.message
            // });
            

            throw error;
        }
    }
}
        


export const fetchSavedDirectories = () => {

    return async (dispatch) => {

        dispatch({
            type: FETCH_DIRECTORIES_REQUEST
        });

        try {

            const token =
                localStorage.getItem("accessToken");


            const response = await fetch(
                `${API_URL}/`,
                {
                    method: "GET",

                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    },

                    credentials: "include"
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to fetch directories"
                );
            }


            dispatch({
                type: FETCH_DIRECTORIES_SUCCESS,

                payload: data.directories
            });


            return data.directories;


        } catch (error) {

            dispatch({
                type: FETCH_DIRECTORIES_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};


// ==========================================
// CREATE DIRECTORY
// ==========================================

export const createSavedDirectory = (
    name,
    description = ""
) => {

    return async (dispatch) => {

        dispatch({
            type: CREATE_DIRECTORY_REQUEST
        });


        try {

            const token =
                localStorage.getItem("accessToken");


            const response = await fetch(
                `${API_URL}/`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        name,
                        description
                    })
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to create directory"
                );
            }


            dispatch({
                type: CREATE_DIRECTORY_SUCCESS,

                payload: data.directory
            });


            return data.directory;


        } catch (error) {

            dispatch({
                type: CREATE_DIRECTORY_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};


// ==========================================
// UPDATE DIRECTORY
// ==========================================

export const updateSavedDirectory = (
    directoryId,
    updates
) => {

    return async (dispatch) => {

        dispatch({
            type: UPDATE_DIRECTORY_REQUEST
        });


        try {

            const token =
                localStorage.getItem("accessToken");


            const response = await fetch(
                `${API_URL}/${directoryId}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    },

                    credentials: "include",

                    body: JSON.stringify(updates)
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to update directory"
                );
            }


            dispatch({
                type: UPDATE_DIRECTORY_SUCCESS,

                payload: data.directory
            });


            return data.directory;


        } catch (error) {

            dispatch({
                type: UPDATE_DIRECTORY_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};


// ==========================================
// DELETE DIRECTORY
// ==========================================

export const deleteSavedDirectory = (
    directoryId
) => {

    return async (dispatch) => {

        dispatch({
            type: DELETE_DIRECTORY_REQUEST
        });


        try {

            const token =
                localStorage.getItem("accessToken");


            const response = await fetch(
                `${API_URL}/${directoryId}`,
                {
                    method: "DELETE",

                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                            Authorization: `Bearer ${token}`
                        })
                    },

                    credentials: "include"
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to delete directory"
                );
            }


            dispatch({
                type: DELETE_DIRECTORY_SUCCESS,

                payload: data.directoryId
            });


            return data.directoryId;


        } catch (error) {

            dispatch({
                type: DELETE_DIRECTORY_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};


// ==========================================
// CLEAR DIRECTORIES
// ==========================================

export const clearDirectories = () => {

    return {
        type: CLEAR_DIRECTORIES
    };
};