import {
    FETCH_UNORGANIZED_REQUEST,
    FETCH_UNORGANIZED_SUCCESS,
    FETCH_UNORGANIZED_FAILURE,

    FETCH_DIRECTORY_PROJECTS_REQUEST,
    FETCH_DIRECTORY_PROJECTS_SUCCESS,
    FETCH_DIRECTORY_PROJECTS_FAILURE,

    SAVE_PROJECT_REQUEST,
    SAVE_PROJECT_SUCCESS,
    SAVE_PROJECT_FAILURE,

    UNSAVE_PROJECT_REQUEST,
    UNSAVE_PROJECT_SUCCESS,
    UNSAVE_PROJECT_FAILURE,

    MOVE_PROJECT_REQUEST,
    MOVE_PROJECT_SUCCESS,
    MOVE_PROJECT_FAILURE
} from "./SavedProject_types";


import {addNotification} from "../Notification_redux/Notification_actions.js";

const API_URL =
    "http://localhost:5000/api/project-directories";

import API from "../../api/CenteralAxios/CenteralAxios";


import SavedProjectAxios from "../../api/SavedProjectAPI/SavedProjectAPI.js";
import { LiveResponseType } from "firebase/ai";
import { isRouteErrorResponse } from "react-router-dom";
import { AppleIcon } from "lucide-react";


// =====================================================
// GET UNORGANIZED PROJECTS
// =====================================================

export const fetchUnorganizedProjects = (
    cursor = null,
    limit = 5
) => {


    return async (dispatch) => {

        dispatch({
            type: FETCH_UNORGANIZED_REQUEST
        });

        try {

            const token =
                localStorage.getItem("accessToken");


            const params = new URLSearchParams();

            params.append("limit", limit);

            if (cursor) {
                params.append("cursor", cursor);
            }


            // const response = await fetch(
            //     `${API_URL}/unorganized?${params.toString()}`,
            //     {
            //         method: "GET",

            //         headers: {
            //             "Content-Type": "application/json",

            //             ...(token && {
            //                 Authorization:
            //                     `Bearer ${token}`
            //             })
            //         },

            //         credentials: "include"
            //     }
            // );

            const response  = await API.get(
                `/api/project-directories/unorganized?${params.toString()}`
            );


            const data = await response.data


            // console.log("data is begin fetch")
            console.log("this is the data from fetchUnorganizedProjects:", data)




            if (!data.success) {

                    throw new Error(
                        data.message ||
                        "Failed to fetch unorganized projects"
                    );
                }


            dispatch({
                type: FETCH_UNORGANIZED_SUCCESS,

                payload: {
                    projects: data.projects,

                    nextCursor:
                        data.nextCursor,

                    hasMore:
                        data.hasMore,

                    reset:
                        !cursor
                }
            });


            return data;


        } catch (error) {

            dispatch({
                type: FETCH_UNORGANIZED_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};



// export const fetchFewDirectoriesProjects = (directoryId, limit = 4) => {

//     return async (dispatch) => {

//         if (!directoryId) {
//             throw new Error(
//                 "Directory ID is required"
//             );
//         }
        
//         const response  = API.get(
//             `/api/project-directories/few/${directoryId}/projects?limit=${limit}`
//         );

//         const data = await response.data;

//         if (!data.success) {
//             throw new Error(
//                 data.message ||
//                 "Failed to fetch projects for the directory"
//             );
//         }

//         return data;
//     };




// =====================================================
// GET PROJECTS FROM DIRECTORY
// =====================================================

export const fetchDirectoryProjects = (
    directoryId,
    cursor = null,
    limit = 10
) => {

    return async (dispatch) => {

        if (!directoryId) {
            throw new Error(
                "Directory ID is required"
            );
        }


        dispatch({
            type: FETCH_DIRECTORY_PROJECTS_REQUEST,

            payload: directoryId
        });


        try {

            const token =
                localStorage.getItem("accessToken");


            const params =
                new URLSearchParams();

            params.append("limit", limit);

            if (cursor) {
                params.append("cursor", cursor);
            }



            const response = await API.get(
                `/api/project-directories/${directoryId}/projects?${params.toString()}`
            );

            console.log("this is the response from fetchDirectoryProjects:", response)

            const data = await response.data;
            console.log("this is the data from fetchDirectoryProjects:", data)

            // const response = await fetch(
            //     `${API_URL}/${directoryId}/projects?${params.toString()}`,
            //     {
            //         method: "GET",

            //         headers: {
            //             "Content-Type": "application/json",

            //             ...(token && {
            //                 Authorization:
            //                     `Bearer ${token}`
            //             })
            //         },

            //         credentials: "include"
            //     }
            // );


            // const data =
            //     await response.json();


                if (response.status !== 200 || !data.success) {
                throw new Error(
                    data.message ||
                    "Failed to fetch directory projects"
                );
            }


            dispatch({
                type:
                    FETCH_DIRECTORY_PROJECTS_SUCCESS,

                payload: {

                    directoryId,

                    projects:
                        data.projects,

                    nextCursor:
                        data.nextCursor,

                    hasMore:
                        data.hasMore,

                    reset:
                        !cursor
                }
            });


            return data;


        } catch (error) {

            dispatch({
                type:
                    FETCH_DIRECTORY_PROJECTS_FAILURE,

                payload: {

                    directoryId,

                    error:
                        error.message
                }
            });


            throw error;
        }
    };
};

// export const fetchDirectoryProjectss = (
//     directoryId,
//     cursor = null,
//     limit = 10
// ) => {

//     return async (dispatch) => {

//         if (!directoryId) {
//             throw new Error(
//                 "Directory ID is required"
//             );
//         }

//         dispatch({
//             type: FETCH_DIRECTORY_PROJECTS_REQUEST,
//             payload: directoryId
//         });

//         try {

//             const token =
//                 localStorage.getItem("accessToken");

//             const params =
//                 new URLSearchParams();

//             params.append("limit", limit);

//             if (cursor) {
//                 params.append("cursor", cursor);
//             }

//             const response = await fetch(
//                 `${API_URL}/${directoryId}/projects?${params.toString()}`,
//                 {
//                     method: "GET",

//                     headers: {
//                         "Content-Type":
//                             "application/json",

//                         ...(token && {
//                             Authorization:
//                                 `Bearer ${token}`
//                         })
//                     },

//                     credentials: "include"
//                 }
//             );

//             const data =
//                 await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     data.message ||
//                     "Failed to fetch directory projects"
//                 );
//             }

//             dispatch({
//                 type:
//                     FETCH_DIRECTORY_PROJECTS_SUCCESS,

//                 payload: {
//                     directoryId,

//                     projects:
//                         data.projects || [],

//                     nextCursor:
//                         data.nextCursor || null,

//                     hasMore:
//                         data.hasMore ?? false,

//                     reset:
//                         !cursor
//                 }
//             });

//             return data;

//         } catch (error) {

//             dispatch({
//                 type:
//                     FETCH_DIRECTORY_PROJECTS_FAILURE,

//                 payload: {
//                     directoryId,

//                     error:
//                         error.message
//                 }
//             });

//             throw error;
//         }
//     };
// };
// =====================================================
// SAVE PROJECT
// =====================================================



export const saveProject = (
    projectId,
    directoryId = null
) => {

    return async (dispatch) => {

        dispatch({
            type: SAVE_PROJECT_REQUEST
        });


        try {

            //     `${API_URL}/${projectId}/save`,
            //     {
            //         method: "POST",

            //         headers: {
            //             "Content-Type": "application/json",

            //             ...(token && {
            //                 Authorization:
            //                     `Bearer ${token}`
            //             })
            //         },

            //         credentials: "include",

            //         body: JSON.stringify({
            //             directoryId
            //         })
            //     }
            // );

            const response = await API.post(
                `/api/project-directories/${projectId}/save`,
                {
                    directoryId
                }
            );

            const data = response.data;

            if (
                ![200, 201].includes(response.status) ||
                data?.success !== true
            ) {

                throw new Error(
                    data?.message ||
                    "Failed to save project"
                );
            }



            // dispatch({
            //     type: SAVE_PROJECT_SUCCESS,

            //     payload: data.savedProject
            // });

            dispatch({
                        type: SAVE_PROJECT_SUCCESS,
                        payload: data.savedProject
                    });

                    if (directoryId) {
                        await dispatch(
                            fetchDirectoryProjects(directoryId, null, 10)
                        );
                    } else {
                        await dispatch(
                            fetchUnorganizedProjects(null, 10)
                        );
                    }

            dispatch(addNotification({
                type: "success",
                message: "Project saved successfully."
            }));

            return data;


        } catch (error) {

            console.log("Error in saveProject action:", error);
             dispatch(addNotification({
                type: "error",
                message: "Project is already saved."
            }));

            dispatch({
                type: SAVE_PROJECT_FAILURE,

                payload: error.message
            });
           


            throw error;
        }
    };
};


// =====================================================
// MOVE / ORGANIZE PROJECT
// =====================================================

export const moveSavedProject = (
    projectId,
    directoryId = null,
    project = null,
    fromDirectoryId = null
) => {

    return async (dispatch) => {

        dispatch({
            type: MOVE_PROJECT_REQUEST
        });


        try {

            const token =
                localStorage.getItem("accessToken");


            const response = await fetch(
                `${API_URL}/${projectId}/save`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                            Authorization:
                                `Bearer ${token}`
                        })
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        directoryId
                    })
                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to move project"
                );
            }


            /*
             * The backend returns the updated
             * SavedProject relationship.
             *
             * We still need the actual Project
             * document for our project lists.
             *
             * Therefore `project` is supplied by
             * the component calling this action.
             */

            dispatch({
                type: MOVE_PROJECT_SUCCESS,

                payload: {

                    project,

                    fromDirectoryId,

                    toDirectoryId:
                        directoryId,

                    savedProject:
                        data.savedProject
                }
            });


            return data;


        } catch (error) {

            dispatch({
                type: MOVE_PROJECT_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};


// =====================================================
// UNSAVE PROJECT COMPLETELY
// =====================================================

export const unsaveProject = (
    projectId
) => {

    return async (dispatch) => {

        dispatch({
            type: UNSAVE_PROJECT_REQUEST
        });


        try {

            const token =
                localStorage.getItem("accessToken");



            const response = await API.delete(
                `/api/project-directories/${projectId}/save`
            );

            const data =
                response.data;
            // const response = await fetch(
            //     `${API_URL}/${projectId}/save`,
            //     {
            //         method: "DELETE",

            //         headers: {
            //             "Content-Type": "application/json",

            //             ...(token && {
            //                 Authorization:
            //                     `Bearer ${token}`
            //             })
            //         },

            //         credentials: "include"
            //     }
            // );


            // const data =
            //     await response.json();

              if (!data.success) {

                throw new Error(
                    data.message ||
                    "Failed to fetch projects for the directory"
                );

            }

            // if (!response.ok) {

            //     throw new Error(
            //         data.message ||
            //         "Failed to unsave project"
            //     );
            // }


            dispatch({
                type: UNSAVE_PROJECT_SUCCESS,

                payload: {
                    projectId:
                        data.projectId
                }
            });

            dispatch(addNotification({
                type: "success",
                message: "Project unsaved successfully."
            }));


            return data;


        } catch (error) {

            dispatch({
                type: UNSAVE_PROJECT_FAILURE,

                payload: error.message
            });

            dispatch(addNotification({
                type: "failure",
                message: "Project cannot be unsaved."
            }));


            throw error;
        }
    };
};


// =====================================================
// REMOVE PROJECT FROM SPECIFIC DIRECTORY
// =====================================================

export const removeProjectFromDirectory = (
    projectId,
    directoryId
) => {

    return async (dispatch) => {

        dispatch({
            type: UNSAVE_PROJECT_REQUEST
        });


        try {

            const token =
                localStorage.getItem("accessToken");


            const response = await fetch(
                `${API_URL}/${projectId}/save/${directoryId}`,
                {
                    method: "DELETE",

                    headers: {
                        "Content-Type": "application/json",

                        ...(token && {
                            Authorization:
                                `Bearer ${token}`
                        })
                    },

                    credentials: "include"
                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to remove project from directory"
                );
            }


            dispatch({
                type: UNSAVE_PROJECT_SUCCESS,

                payload: {

                    projectId:
                        data.projectId,

                    directoryId:
                        data.directoryId
                }
            });


            return data;


        } catch (error) {

            dispatch({
                type: UNSAVE_PROJECT_FAILURE,

                payload: error.message
            });


            throw error;
        }
    };
};


export const resetSavedProjects = () => {

    return {
        type: "RESET_SAVED_PROJECTS"
    };
}






export const  fetchFewDirectoriesProjects = (
    directoryId,
    limit = 4
) => {


//     {
//     "success": true,
//     "directory": {
//         "_id": "6a9d51e34e9762c9182d91ae",
//         "name": "My Projects"
//     },
//     "projects": [
//         {
//             "_id": "project-id-1",
//             "image": "https://..."
//         },
//         {
//             "_id": "project-id-2",
//             "image": "https://..."
//         },
//         {
//             "_id": "project-id-3",
//             "image": "https://..."
//         },
//         {
//             "_id": "project-id-4",
//             "image": "https://..."
//         }
//     ]
// }

    return async () => {

        if (!directoryId) {

            throw new Error(
                "Directory ID is required"
            );

        }


        try {

            const response =
                await API.get(
                    `/api/project-directories/few/${directoryId}/projects`,
                    {
                        params: {
                            limit
                        }
                    }
                );


            const data =
                response.data;


            if (!data.success) {

                throw new Error(
                    data.message ||
                    "Failed to fetch projects for the directory"
                );

            }


           return data.projects || [];

        } catch (error) {

            console.error(
                "Fetch directory project previews error:",
                error
            );

            throw error;

        }

    };

};