import {
    FETCH_LIKED_PROJECTS_REQUEST,
    FETCH_LIKED_PROJECTS_SUCCESS,
    FETCH_LIKED_PROJECTS_FAILURE,
    RESET_LIKED_PROJECTS
    ,REMOVE_LIKED_PROJECT_REQUEST,
    REMOVE_LIKED_PROJECT_SUCCESS,
    REMOVE_LIKED_PROJECT_FAILURE
} from "./LikedProjects_types";

import {LikedProjectAPI} from "../../api/LikedProjectAPI/LikedProjectAPI";

import DashboardAxios from "../../api/DashboardAxios/DashboardAxios";

import API from "../../api/CenteralAxios/CenteralAxios";


import { datalist } from "framer-motion/client";


// export const removeLikedProject = (projectId) => {
//     return async (dispatch) => {
//         // console.log(`Removing project with ID: ${projectId} from liked projects`);
//         dispatch({ type: REMOVE_LIKED_PROJECT_REQUEST , payload: projectId });

//         try {
//             const response = await DashboardAxios.delete(`removeLikedProjects/${projectId}`)
//             .then((response) => {
//                 console.log(
//                     "Project removed from liked projects:",
//                     response.data
//                 );
//                    dispatch({
//                 type: REMOVE_LIKED_PROJECT_SUCCESS,
//                 payload: projectId
//             });
//                 // Optionally, you can update the UI or state here to reflect the removal
//             })
//             .catch((error) => {
//                 // console.error(
//                 //     "Error removing project from liked projects:",
//                 //     error
//                 // );

//                 throw error; // Rethrow the error to be caught in the outer catch block
//             });
//             // if (!response.ok) {
//             //     const data = await response.json();
//             //     throw new Error(data.message || "Failed to remove liked project");
//             // }

         
//         } catch (error) {
//             // console.error("Error removing liked project:", error);
//             dispatch({
//                 type: REMOVE_LIKED_PROJECT_FAILURE,
//                 payload: error.message
//             });
//         }
//     };
// };



export const removeLikedProject = (projectId) => {

    return async (dispatch) => {

        dispatch({
            type: REMOVE_LIKED_PROJECT_REQUEST,
            payload: {
                projectId
            }
        });

        try {

            const response = await DashboardAxios.delete(
                `removeLikedProjects/${projectId}`
            );

            console.log(
                "Project removed from liked projects:",
                response.data
            );

            dispatch({
                type: REMOVE_LIKED_PROJECT_SUCCESS,
                payload: {
                    projectId
                }
            });

        } catch (error) {

            console.error(
                "Error removing liked project:",
                error
            );

            dispatch({
                type: REMOVE_LIKED_PROJECT_FAILURE,
                payload: error.message
            });

        }

    };

};


 export const Remove_from_lickedProjects = async({ dispatch,projectId }) => {




        dispatch(
                removeLikedProject(
                    projectId 
                )
            );
      

    }

// export const fetchLikedProjects = (
//     cursor = null,
//     limit = 10
// ) => {

//     return async (dispatch, getState) => {

//         const {
//             likedProjects
//         } = getState();


//         // ==========================================
//         // PREVENT DUPLICATE REQUEST
//         // ==========================================

//         if (likedProjects.loading) {

            

//             return;

//         }


//         // ==========================================
//         // NO MORE PROJECTS
//         // ==========================================

//         if (
//             likedProjects.initialized &&
//             !likedProjects.hasMore
//         ) {

          

//             return;

//         }


//         dispatch({

//             type:
//                 FETCH_LIKED_PROJECTS_REQUEST

//         });


//         try {

//             const params =
//                 new URLSearchParams();

//             params.append(
//                 "limit",
//                 limit
//             );


//             if (cursor) {

//                 params.append(
//                     "cursor",
//                     cursor
//                 );

//             }


//             const response = await LikedProjectAPI.get(

//                 `api/projects/liked?${params.toString()}`

//             );

//             const data = response.data;

//             // const response =
//             //     await fetch(

//             //         `http://localhost:8080/api/projects/liked?${params.toString()}`,

//             //         {
//             //             method: "GET",

//             //             headers: {

//             //                 "Authorization":
//             //                     `Bearer ${localStorage.getItem("accessToken")}`

//             //             },

//             //             credentials: "include"

//             //         }

//             //     );


//             // const data =
//             //     await response.json();


//             if (!data.success) {

//                 throw new Error(

//                     data.message ||
//                     "Failed to fetch liked projects"

//                 );

//             }


//             dispatch({

//                 type:
//                     FETCH_LIKED_PROJECTS_SUCCESS,

//                 payload: {

//                     projects:
//                         data.projects,

//                     nextCursor:
//                         data.nextCursor,

//                     hasMore:
//                         data.hasMore

//                 }

//             });


//         } catch (error) {

           


//             dispatch({

//                 type:
//                     FETCH_LIKED_PROJECTS_FAILURE,

//                 payload:
//                     error.message

//             });

//         }

//     };

// };

export const fetchLikedProjects = (
    cursor = null,
    limit = 10
) => {

    return async (dispatch, getState) => {

        const { likedProjects } = getState();


        // Prevent duplicate requests
        if (likedProjects.loading) {
            return;
        }


        // No more pages
        if (
            likedProjects.initialized &&
            !likedProjects.hasMore
        ) {
            return;
        }


        dispatch({
            type: FETCH_LIKED_PROJECTS_REQUEST
        });


        try {

            const params = new URLSearchParams();

            params.append("limit", limit);

            if (cursor) {
                params.append("cursor", cursor);
            }


            const response =
                await API.get(
                    `api/projects/liked?${params.toString()}`
                );


            const data = response.data;


            console.log(
                "Liked projects response:",
                data
            );


            if (
                response.status !== 200 ||
                !data.success
            ) {

                throw new Error(
                    data.message ||
                    "Failed to fetch liked projects"
                );
            }


            dispatch({

                type:
                    FETCH_LIKED_PROJECTS_SUCCESS,

                payload: {

                    projects:
                        data.projects,

                    nextCursor:
                        data.nextCursor,

                    hasMore:
                        data.hasMore

                }

            });


        } catch (error) {

            console.error(
                "Fetch liked projects error:",
                error
            );


            dispatch({

                type:
                    FETCH_LIKED_PROJECTS_FAILURE,

                payload:
                    error.message

            });

        }

    };
};
export const resetLikedProjects = () => {

    return {

        type:
            RESET_LIKED_PROJECTS

    };

};