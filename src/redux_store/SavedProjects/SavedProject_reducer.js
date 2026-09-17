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
    MOVE_PROJECT_FAILURE,

    CLEAR_SAVED_PROJECTS
} from "./SavedProject_types";


const initialState = {

   // ==========================================
    // UNORGANIZED PROJECTS
    // ==========================================

    unorganizedProjects: [],

    unorganizedNextCursor: null,

    unorganizedHasMore: true,

    unorganizedLoading: false,

    unorganizedError: null,

    unorganizedInitialized: false,


    // ==========================================
    // PROJECTS INSIDE DIRECTORIES
    // ==========================================

    directoryProjects: {},


    // ==========================================
    // GENERAL SAVE/MOVE OPERATIONS
    // ==========================================

    loading: false,

    error: null
};


const savedProjectReducer = (
    state = initialState,
    action
) => {

    switch (action.type) {


        // ==========================================
        // FETCH UNORGANIZED
        // ==========================================

    case FETCH_UNORGANIZED_REQUEST:

        return {
            ...state,
            unorganizedLoading: true,
            unorganizedError: null
        };

        // case FETCH_UNORGANIZED_SUCCESS:

        //     return {
        //         ...state,

        //         loading: false,
        //         error: null,

        //         unorganizedProjects:
        //             action.payload.projects,

        //         unorganizedNextCursor:
        //             action.payload.nextCursor,

        //         unorganizedHasMore:
        //             action.payload.hasMore,

        //         initialized: true
        //     };

        // case FETCH_UNORGANIZED_SUCCESS: {

        //     const {
        //         projects,
        //         nextCursor,
        //         hasMore,
        //         reset
        //     } = action.payload;

        //     return {
        //         ...state,

        //         loading: false,
        //         error: null,

        //         unorganizedProjects: reset
        //             ? projects
        //             : [
        //                 ...state.unorganizedProjects,
        //                 ...projects
        //             ],

        //         unorganizedNextCursor: nextCursor,

        //         unorganizedHasMore: hasMore,

        //         initialized: true
        //     };
        // }

        case FETCH_UNORGANIZED_SUCCESS: {

                    const {
                        projects,
                        nextCursor,
                        hasMore,
                        reset
                    } = action.payload;


                    return {

                        ...state,

                        unorganizedLoading: false,

                        unorganizedError: null,

                        unorganizedProjects: reset
                            ? projects
                            : [
                                ...state.unorganizedProjects,
                                ...projects
                            ],

                        unorganizedNextCursor:
                            nextCursor,

                        unorganizedHasMore:
                            hasMore,

                        unorganizedInitialized:
                            true
                    };
                }
        // case FETCH_UNORGANIZED_FAILURE:

        //     return {
        //         ...state,

        //         loading: false,
        //         error: action.payload,

        //         initialized: true
        //     };

        case FETCH_UNORGANIZED_FAILURE:

            return {

                ...state,

                unorganizedLoading: false,

                unorganizedError:
                    action.payload,

                unorganizedInitialized:
                    true
            };


        // ==========================================
        // FETCH DIRECTORY PROJECTS
        // ==========================================

        // case FETCH_DIRECTORY_PROJECTS_REQUEST: {

        //     const directoryId = action.payload;


        //     return {
        //         ...state,

        //         error: null,

        //         directoryProjects: {
        //             ...state.directoryProjects,

        //             [directoryId]: {

        //                 ...state.directoryProjects[directoryId],

        //                 projects:
        //                     state.directoryProjects[directoryId]
        //                         ?.projects || [],

        //                 nextCursor:
        //                     state.directoryProjects[directoryId]
        //                         ?.nextCursor || null,

        //                 hasMore:
        //                     state.directoryProjects[directoryId]
        //                         ?.hasMore ?? true,

        //                 loading: true
        //             }
        //         }
        //     };
        // }
case FETCH_DIRECTORY_PROJECTS_REQUEST: {

    const directoryId = action.payload;

    const existing =
        state.directoryProjects[directoryId];

    return {
        ...state,

        directoryProjects: {

            ...state.directoryProjects,

            [directoryId]: {

                ...existing,

                projects:
                    existing?.projects || [],

                nextCursor:
                    existing?.nextCursor || null,

                hasMore:
                    existing?.hasMore ?? true,

                loading: true,

                error: null,

                initialized:
                    existing?.initialized ?? false
            }
        }
    };
}

        // case FETCH_DIRECTORY_PROJECTS_SUCCESS: {

        //     const {
        //         directoryId,
        //         projects,
        //         nextCursor,
        //         hasMore
        //     } = action.payload;


        //     return {
        //         ...state,

        //         loading: false,
        //         error: null,

        //         directoryProjects: {

        //             ...state.directoryProjects,

        //             [directoryId]: {

        //                 projects,

        //                 nextCursor,

        //                 hasMore,

        //                 loading: false
        //             }
        //         }
        //     };
        // }
        case FETCH_DIRECTORY_PROJECTS_SUCCESS: {

            const {
                directoryId,
                projects,
                nextCursor,
                hasMore,
                reset
            } = action.payload;

            const existing =
                state.directoryProjects[directoryId];

            return {
                ...state,

                loading: false,
                error: null,

                directoryProjects: {

                    ...state.directoryProjects,

                    [directoryId]: {

                        projects: reset
                            ? projects
                            : [
                                ...(existing?.projects || []),
                                ...projects
                            ],

                        nextCursor,

                        hasMore,

                        loading: false,

                        error: null,
                        initialized: true
                    }
                }
            };
        }
        

        // case FETCH_DIRECTORY_PROJECTS_FAILURE: {

        //     const {
        //         directoryId,
        //         error
        //     } = action.payload;


        //     return {
        //         ...state,

        //         loading: false,
        //         error,

        //         directoryProjects: {

        //             ...state.directoryProjects,

        //             [directoryId]: {

        //                 ...state.directoryProjects[directoryId],

        //                 loading: false,

        //                 error
        //             }
        //         }
        //     };
        // }
        case FETCH_DIRECTORY_PROJECTS_FAILURE: {

    const {
        directoryId,
        error
    } = action.payload;

    return {
        ...state,

        directoryProjects: {

            ...state.directoryProjects,

            [directoryId]: {

                ...state.directoryProjects[directoryId],

                loading: false,

                error,

                initialized: true
            }
        }
    };
}


        // ==========================================
        // SAVE PROJECT
        // ==========================================

        case SAVE_PROJECT_REQUEST:

            return {
                ...state,

                loading: true,
                error: null
            };


        case SAVE_PROJECT_SUCCESS: {

            /*
             * Backend returns:
             *
             * {
             *     _id,
             *     userId,
             *     projectId,
             *     directoryId,
             *     createdAt
             * }
             *
             * This is the SavedProject relationship,
             * NOT the full Project document.
             */

            const savedProject = action.payload;


            /*
             * We cannot insert this object directly
             * into unorganizedProjects or directoryProjects
             * because those arrays contain actual Project
             * documents returned by the GET APIs.
             *
             * Therefore the SAVE action should normally
             * be followed by fetching/updating the project
             * data.
             */

            return {
                ...state,

                loading: false,
                error: null
            };
        }


        case SAVE_PROJECT_FAILURE:

            return {
                ...state,

                loading: false,
                error: action.payload
            };


        // ==========================================
        // UNSAVE PROJECT
        // ==========================================

        case UNSAVE_PROJECT_REQUEST:

            return {
                ...state,

                loading: true,
                error: null
            };


        // case UNSAVE_PROJECT_SUCCESS: {

        //     const projectId =
        //         action.payload.projectId;


        //     /*
        //      * Remove from Unorganized
        //      *
        //      * Project API returns actual Project
        //      * documents, therefore use _id.
        //      */

        //     const updatedUnorganized =
        //         state.unorganizedProjects.filter(
        //             project =>
        //                 project._id.toString() !==
        //                 projectId.toString()
        //         );


        //     /*
        //      * Remove the project from every loaded
        //      * directory cache.
        //      */

        //     const updatedDirectoryProjects = {
        //         ...state.directoryProjects
        //     };


        //     Object.keys(updatedDirectoryProjects)
        //         .forEach(directoryId => {

        //             const directory =
        //                 updatedDirectoryProjects[directoryId];

        //             if (!directory?.projects) {
        //                 return;
        //             }


        //             updatedDirectoryProjects[directoryId] = {

        //                 ...directory,

        //                 projects:
        //                     directory.projects.filter(
        //                         project =>
        //                             project._id.toString() !==
        //                             projectId.toString()
        //                     )
        //             };
        //         });


        //     return {
        //         ...state,

        //         loading: false,
        //         error: null,

        //         unorganizedProjects:
        //             updatedUnorganized,

        //         directoryProjects:
        //             updatedDirectoryProjects
        //     };
        // }
        case UNSAVE_PROJECT_SUCCESS: {

            const {
                projectId,
                directoryId
            } = action.payload;


            // ---------------------------------------
            // Remove from a specific directory
            // ---------------------------------------

            if (directoryId) {

                const directory =
                    state.directoryProjects[directoryId];

                if (!directory) {
                    return {
                        ...state,
                        loading: false,
                        error: null
                    };
                }


                return {
                    ...state,

                    loading: false,
                    error: null,

                    directoryProjects: {

                        ...state.directoryProjects,

                        [directoryId]: {

                            ...directory,

                            projects:
                                directory.projects.filter(
                                    project =>
                                        project._id.toString() !==
                                        projectId.toString()
                                )
                        }
                    }
                };
            }


            // ---------------------------------------
            // Completely unsave
            // ---------------------------------------

            const unorganizedProjects =
                state.unorganizedProjects.filter(
                    project =>
                        project._id.toString() !==
                        projectId.toString()
                );


            const directoryProjects = {
                ...state.directoryProjects
            };


            Object.keys(directoryProjects)
                .forEach(id => {

                    const directory =
                        directoryProjects[id];

                    if (!directory?.projects) {
                        return;
                    }

                    directoryProjects[id] = {

                        ...directory,

                        projects:
                            directory.projects.filter(
                                project =>
                                    project._id.toString() !==
                                    projectId.toString()
                            )
                    };
                });


            return {
                ...state,

                loading: false,
                error: null,

                unorganizedProjects,

                directoryProjects
            };
        }

        case UNSAVE_PROJECT_FAILURE:

            return {
                ...state,

                loading: false,
                error: action.payload
            };


        // ==========================================
        // MOVE PROJECT
        // ==========================================

        case MOVE_PROJECT_REQUEST:

            return {
                ...state,

                loading: true,
                error: null
            };


        case MOVE_PROJECT_SUCCESS: {

            const {
                project,
                fromDirectoryId,
                toDirectoryId
            } = action.payload;


            /*
             * `project` here should be the FULL project
             * document available to the frontend.
             */

            const projectId =
                project._id.toString();


            let unorganizedProjects =
                [...state.unorganizedProjects];


            let directoryProjects = {
                ...state.directoryProjects
            };


            // ------------------------------------------
            // Remove from Unorganized
            // ------------------------------------------

            unorganizedProjects =
                unorganizedProjects.filter(
                    item =>
                        item._id.toString() !== projectId
                );


            // ------------------------------------------
            // Remove from old directory
            // ------------------------------------------

            if (fromDirectoryId) {

                const oldDirectory =
                    directoryProjects[fromDirectoryId];


                if (oldDirectory) {

                    directoryProjects[fromDirectoryId] = {

                        ...oldDirectory,

                        projects:
                            oldDirectory.projects.filter(
                                item =>
                                    item._id.toString() !==
                                    projectId
                            )
                    };
                }
            }


            // ------------------------------------------
            // Add to new directory
            // ------------------------------------------

            if (toDirectoryId) {

                const existingDirectory =
                    directoryProjects[toDirectoryId];


                directoryProjects[toDirectoryId] = {

                    projects: existingDirectory
                        ? [
                            project,
                            ...existingDirectory.projects
                        ]
                        : [
                            project
                        ],

                    nextCursor:
                        existingDirectory?.nextCursor ||
                        null,

                    hasMore:
                        existingDirectory?.hasMore ??
                        true,

                    loading: false
                };

            }

            // ------------------------------------------
            // Move to Unorganized
            // ------------------------------------------

            else {

                unorganizedProjects = [
                    project,
                    ...unorganizedProjects
                ];
            }


            return {
                ...state,

                loading: false,
                error: null,

                unorganizedProjects,

                directoryProjects
            };
        }


        case MOVE_PROJECT_FAILURE:

            return {
                ...state,

                loading: false,
                error: action.payload
            };


        // ==========================================
        // CLEAR
        // ==========================================

        case CLEAR_SAVED_PROJECTS:

            return initialState;


        default:

            return state;
    }
};


export default savedProjectReducer;