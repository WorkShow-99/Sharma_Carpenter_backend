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


const initialState = {
    directories: [],

    loading: false,
    error: null,

    initialized: false
};


const savedDirectoryReducer = (state = initialState, action) => {

    switch (action.type) {

        // -------------------------
        // FETCH
        // -------------------------

        case FETCH_DIRECTORIES_REQUEST:

            return {
                ...state,
                loading: true,
                error: null
            };


        case FETCH_DIRECTORIES_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                directories: action.payload,
                initialized: true
            };


        case FETCH_DIRECTORIES_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload,
                initialized: true
            };


        // -------------------------
        // CREATE
        // -------------------------

        case CREATE_DIRECTORY_REQUEST:

            return {
                ...state,
                loading: true,
                error: null
            };


        case CREATE_DIRECTORY_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                directories: [
                    ...state.directories,
                    action.payload
                ]
            };


        case CREATE_DIRECTORY_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload
            };


        // -------------------------
        // DELETE
        // -------------------------

        case DELETE_DIRECTORY_REQUEST:

            return {
                ...state,
                loading: true,
                error: null
            };


        case DELETE_DIRECTORY_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                directories: state.directories.filter(
                    directory =>
                        directory._id !== action.payload
                )
            };


        case DELETE_DIRECTORY_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload
            };


        // -------------------------
        // UPDATE
        // -------------------------

        case UPDATE_DIRECTORY_REQUEST:

            return {
                ...state,
                loading: true,
                error: null
            };


        case UPDATE_DIRECTORY_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,

                directories: state.directories.map(directory =>
                    directory._id === action.payload._id
                        ? action.payload
                        : directory
                )
            };


        case UPDATE_DIRECTORY_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload
            };


        // -------------------------
        // CLEAR
        // -------------------------

        case CLEAR_DIRECTORIES:

            return initialState;


        default:

            return state;
    }
};


export default savedDirectoryReducer;