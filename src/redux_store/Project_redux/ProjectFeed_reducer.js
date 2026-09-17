import {
    FETCH_PROJECT_FEED_REQUEST,
    FETCH_PROJECT_FEED_SUCCESS,
    FETCH_PROJECT_FEED_FAILURE,
    RESET_PROJECT_FEED
} from "./ProjectFeed_types";


const initialState = {

    projects: [],

    nextCursor: null,

    hasMore: true,

    loading: false,

    error: null,

    initialized: false

};


const ProjectFeedReducer = (
    state = initialState,
    action
) => {

    switch (action.type) {

        case FETCH_PROJECT_FEED_REQUEST:

            return {

                ...state,

                loading: true,

                error: null

            };


        // case FETCH_PROJECT_FEED_SUCCESS:

        // return {

        //     ...state,

        //     projects: [
        //         ...state.projects,
        //         ...action.payload.projects
        //     ],

        //     nextCursor:
        //         action.payload.nextCursor,

        //     hasMore:
        //         action.payload.hasMore,

        //     loading: false,

        //     initialized: true,

        //     error: null

        // };
       case FETCH_PROJECT_FEED_SUCCESS: {

    const existingIds = new Set(
        state.projects.map(
            project => project.projectId
        )
    );

    const newProjects =
        action.payload.projects.filter(
            project =>
                !existingIds.has(project.projectId)
        );


    return {

        ...state,

        projects: [
            ...state.projects,
            ...newProjects
        ],

        nextCursor:
            action.payload.nextCursor,

        hasMore:
            action.payload.hasMore,

        loading: false,

        initialized: true,

        error: null

    };

}
        case FETCH_PROJECT_FEED_FAILURE:

            return {

                ...state,

                loading: false,

                error: action.payload

            };


        case RESET_PROJECT_FEED:

            return {

                ...initialState

            };


        default:

            return state;

    }

};


export default ProjectFeedReducer;