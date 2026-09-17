import {

    FETCH_LIKED_PROJECTS_REQUEST,

    FETCH_LIKED_PROJECTS_SUCCESS,

    FETCH_LIKED_PROJECTS_FAILURE,

    RESET_LIKED_PROJECTS
    ,
    REMOVE_LIKED_PROJECT_REQUEST,
    REMOVE_LIKED_PROJECT_SUCCESS,
    REMOVE_LIKED_PROJECT_FAILURE

} from "./LikedProjects_types";


const initialState = {

    projects: [],

    nextCursor: null,

    hasMore: true,

    loading: false,

    error: null,

    initialized: false

};


export default function likedProjectsReducer(

    state = initialState,

    action

) {

    switch (action.type) {


        // ==========================================
        // REQUEST
        // ==========================================

        case FETCH_LIKED_PROJECTS_REQUEST:

            return {

                ...state,

                loading: true,

                error: null

            };


        // ==========================================
        // SUCCESS
        // ==========================================

        case FETCH_LIKED_PROJECTS_SUCCESS:

            return {

                ...state,

                loading: false,

                initialized: true,

                projects: [

                    ...state.projects,

                    ...action.payload.projects

                ],

                nextCursor:
                    action.payload.nextCursor,

                hasMore:
                    action.payload.hasMore,

                error: null

            };


        // ==========================================
        // FAILURE
        // ==========================================

        case FETCH_LIKED_PROJECTS_FAILURE:

            return {

                ...state,

                loading: false,

                error:
                    action.payload

            };


        // ==========================================
        // RESET
        // ==========================================



        case RESET_LIKED_PROJECTS:

            return {

                ...initialState

            };


// ===================REMOVE_LIKED_PROJECTS========================

        case REMOVE_LIKED_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case REMOVE_LIKED_PROJECT_SUCCESS:
            // Log whether the project exists in the current list before removing
            console.log(`Attempting to remove project with ID: ${action.payload.projectId} from liked projects.`);
            if (action.payload.projectId === undefined) {
                console.error("REMOVE_LIKED_PROJECT_SUCCESS action payload is missing projectId.");
                return state; // Return current state if projectId is missing
            }
            state.projects.forEach(project => {
                            console.log(`Project ID: ${project._id}`);
                        });
            const projectExists = state.projects.some(
                project => project._id === action.payload.projectId
            );
            console.log(
                projectExists
                    ? `Project with ID ${action.payload.projectId} is in the list, removing.`
                    : `Project with ID ${action.payload.projectId} not found in the list.`
            );
            
            return {
                ...state,
                loading: false,
                projects: state.projects.filter(
                    project => project._id !== action.payload.projectId
                ),
                error: null
            };

        case REMOVE_LIKED_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };




        default:

            return state;

    }

}