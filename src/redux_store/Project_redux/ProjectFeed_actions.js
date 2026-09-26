import {
    FETCH_PROJECT_FEED_REQUEST,
    FETCH_PROJECT_FEED_SUCCESS,
    FETCH_PROJECT_FEED_FAILURE,
    RESET_PROJECT_FEED
} from "./ProjectFeed_types";

import API from "../../../src/api/CenteralAxios/CenteralAxios";

// export const fetchProjectFeed = (
//     cursor = null,
//     limit = 5
// ) => {

//     return async (dispatch) => {

//         dispatch({
//             type: FETCH_PROJECT_FEED_REQUEST
//         });


//         try {

//             const params = new URLSearchParams();

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


//             const response = await fetch(

//                 `http://localhost:8080/api/projects/feed?${params.toString()}`,

//                 {
//                     method: "GET",

//                     credentials: "include"
//                 }

//             );


//             const data =
//                 await response.json();


//             if (!response.ok) {

//                 throw new Error(
//                     data.message ||
//                     "Failed to fetch project feed"
//                 );

//             }


//             dispatch({

//                 type:
//                     FETCH_PROJECT_FEED_SUCCESS,

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
//                     FETCH_PROJECT_FEED_FAILURE,

//                 payload:
//                     error.message

//             });

//         }

//     };

// };


export const fetchProjectFeed = (
    cursor = null,
    limit = 5
) => {

    return async (dispatch, getState) => {

        const {
            projectFeed
        } = getState();


        // Prevent duplicate request
        if (projectFeed.loading) {

            console.log(
                "Feed request already running"
            );

            return;

        }


        // Prevent requesting after feed ended
        if (!projectFeed.hasMore) {

            console.log(
                "No more projects"
            );

            return;

        }


        dispatch({

            type:
                FETCH_PROJECT_FEED_REQUEST

        });


        try {

            const params =
                new URLSearchParams();

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

                `/api/projects/feed?${params.toString()}`,

                

            );

            console.log(
                "Project feed response:",
                response
            );

               


            const data  = response.data;



            if (response.status !== 200) 
             {

                throw new Error(
                    data.message ||
                    "Failed to fetch project feed"
                );

            }


            dispatch({

                type:
                    FETCH_PROJECT_FEED_SUCCESS,

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

            dispatch({

                type:
                    FETCH_PROJECT_FEED_FAILURE,

                payload:
                    error.message

            });

        }

    };

};


export const resetProjectFeed = () => {

    return {

        type: RESET_PROJECT_FEED

    };

};