import {
    FETCH_PROJECT_DETAILS_REQUEST,
    FETCH_PROJECT_DETAILS_SUCCESS,
    FETCH_PROJECT_DETAILS_FAILURE
} from "./projectDetails";


export const fetchProjectDetails = (
    projectId
) => {

    return async (dispatch) => {

        dispatch({

            type:
                FETCH_PROJECT_DETAILS_REQUEST

        });


        try {

            const response =
                await fetch(
                    `http://localhost:8080/api/projects/${projectId}`,
                    {
                        method: "GET",

                        credentials: "include"
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Failed to fetch project"
                );

            }


            dispatch({

                type:
                    FETCH_PROJECT_DETAILS_SUCCESS,

                payload:
                    data.project

            });


        } catch (error) {

            console.error(
                "Project details error:",
                error
            );


            dispatch({

                type:
                    FETCH_PROJECT_DETAILS_FAILURE,

                payload:
                    error.message

            });

        }

    };

};