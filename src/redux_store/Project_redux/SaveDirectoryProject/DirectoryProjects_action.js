import API from "../../../../src/api/CenteralAxios/CenteralAxios";

import {
    FETCH_DIRECTORY_PROJECTS_REQUEST,
    FETCH_DIRECTORY_PROJECTS_SUCCESS,
    FETCH_DIRECTORY_PROJECTS_FAILURE
} from "./DirectoryProjects_types";


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

            const params = new URLSearchParams();

            params.append(
                "limit",
                limit
            );

            if (cursor) {
                params.append(
                    "cursor",
                    cursor
                );
            }


            const response = await API.get(
                `/api/project-directories/${directoryId}/projects?${params.toString()}`
            );


            const data = response.data;


            console.log(
                "Directory API response:",
                data
            );


            if (!data?.success) {

                throw new Error(
                    data?.message ||
                    "Failed to fetch directory projects"
                );

            }


            dispatch({

                type:
                    FETCH_DIRECTORY_PROJECTS_SUCCESS,

                payload: {

                    directoryId,

                    directory:
                        data.directory,

                    projects:
                        data.projects || [],

                    nextCursor:
                        data.nextCursor || null,

                    hasMore:
                        data.hasMore ?? false,

                    reset:
                        !cursor

                }

            });


            return data;


        } catch (error) {

            console.error(
                "Fetch directory projects error:",
                error
            );


            dispatch({

                type:
                    FETCH_DIRECTORY_PROJECTS_FAILURE,

                payload: {

                    directoryId,

                    error:
                        error.response?.data?.message ||
                        error.message ||
                        "Failed to fetch directory projects"

                }

            });


            throw error;

        }

    };

};

// export const fetchDirectoryProjects = (
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


//         // ==========================================
//         // REQUEST
//         // ==========================================

//         dispatch({
//             type:
//                 FETCH_DIRECTORY_PROJECTS_REQUEST
//         });


//         try {

//             // ==========================================
//             // QUERY PARAMETERS
//             // ==========================================

//             const params = {
//                 limit
//             };


//             if (cursor) {

//                 params.cursor = cursor;

//             }


//             // ==========================================
//             // API REQUEST
//             // ==========================================
//             //  const response = await API.get(
//             //     `/api/project-directories/${directoryId}/projects?${params.toString()}`
//             // );

//             const response = await API.get(
//                 `/api/project-directories/${directoryId}/projects?${params.toString()}`,
//                 {
//                     params
//                 }
//             );


//             const data = response.data;


//             // ==========================================
//             // VALIDATE RESPONSE
//             // ==========================================

//             if (!data.success) {
//                             throw new Error(
//                                 data.message ||
//                                 "Failed to fetch directory projects"
//                             );
// }


//             // ==========================================
//             // SUCCESS
//             // ==========================================

//             // dispatch({

//             //     type:
//             //         FETCH_DIRECTORY_PROJECTS_SUCCESS,

//             //     payload: {

//             //         directory:
//             //             data.directory,

//             //         projects:
//             //             data.projects || [],

//             //         nextCursor:
//             //             data.nextCursor || null,

//             //         hasMore:
//             //             data.hasMore ?? false,

//             //         reset:
//             //             !cursor
//             //     }
//             // });

//             dispatch({
//                         type: FETCH_DIRECTORY_PROJECTS_SUCCESS,

//                         payload: {
//                             directoryId,

//                             directory:
//                                 data.directory,

//                             projects:
//                                 data.projects || [],

//                             nextCursor:
//                                 data.nextCursor || null,

//                             hasMore:
//                                 data.hasMore ?? false,

//                             reset:
//                                 !cursor
//                         }
//                     });


//             return data;


//         } catch (error) {

//             console.error(
//                 "Fetch directory projects error:",
//                 error
//             );


//             const errorMessage =
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to fetch directory projects";


//             // ==========================================
//             // FAILURE
//             // ==========================================

//             dispatch({

//                 type:
//                     FETCH_DIRECTORY_PROJECTS_FAILURE,

//                 payload:
//                     errorMessage
//             });


//             throw error;
//         }
//     };
// };