import {
    FETCH_DIRECTORY_PROJECTS_REQUEST,
    FETCH_DIRECTORY_PROJECTS_SUCCESS,
    FETCH_DIRECTORY_PROJECTS_FAILURE,
    CLEAR_DIRECTORY_PROJECTS
} from "./DirectoryProjects_types";




const initialState = {

    directory: null,

    projects: [],

    nextCursor: null,

    hasMore: true,

    loading: false,

    error: null,

    initialized: false
};


const directoryProjectsReducer = (
    state = initialState,
    action
) => {

    switch (action.type) {

        // ==========================================
        // REQUEST
        // ==========================================

        case FETCH_DIRECTORY_PROJECTS_REQUEST:

            return {
                ...state,

                loading: true,

                error: null
            };


        // ==========================================
        // SUCCESS
        // ==========================================

        case FETCH_DIRECTORY_PROJECTS_SUCCESS: {

            const {
                directory,
                projects,
                nextCursor,
                hasMore,
                reset
            } = action.payload;


            const existingProjects =
                state.projects || [];


            const combinedProjects =
                reset
                    ? projects
                    : [
                        ...existingProjects,
                        ...projects
                    ];


            // Remove duplicate projects
            const uniqueProjects =
                Array.from(
                    new Map(
                        combinedProjects.map(
                            project => [
                                project._id.toString(),
                                project
                            ]
                        )
                    ).values()
                );


            return {

                ...state,

                directory:
                    directory || state.directory,

                projects:
                    uniqueProjects,

                nextCursor,

                hasMore,

                loading: false,

                error: null,

                initialized: true
            };
        }


        // ==========================================
        // FAILURE
        // ==========================================

        case FETCH_DIRECTORY_PROJECTS_FAILURE:

            return {

                ...state,

                loading: false,

                error: action.payload,

                initialized: true
            };


        // ==========================================
        // CLEAR
        // ==========================================

        case CLEAR_DIRECTORY_PROJECTS:

            return initialState;


        default:

            return state;
    }
};


export default directoryProjectsReducer;