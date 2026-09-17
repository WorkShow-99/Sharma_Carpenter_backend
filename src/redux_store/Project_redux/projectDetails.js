const FETCH_PROJECT_DETAILS_REQUEST =
    "FETCH_PROJECT_DETAILS_REQUEST";

const FETCH_PROJECT_DETAILS_SUCCESS =
    "FETCH_PROJECT_DETAILS_SUCCESS";

const FETCH_PROJECT_DETAILS_FAILURE =
    "FETCH_PROJECT_DETAILS_FAILURE";

const CLEAR_PROJECT_DETAILS =
    "CLEAR_PROJECT_DETAILS";


const initialState = {

    project: null,

    loading: false,

    error: null

};


export default function projectDetailsReducer(
    state = initialState,
    action
) {

    switch (action.type) {


        case FETCH_PROJECT_DETAILS_REQUEST:

            return {

                ...state,

                loading: true,

                error: null

            };


        case FETCH_PROJECT_DETAILS_SUCCESS:

            return {

                ...state,

                project:
                    action.payload,

                loading: false,

                error: null

            };


        case FETCH_PROJECT_DETAILS_FAILURE:

            return {

                ...state,

                project: null,

                loading: false,

                error:
                    action.payload

            };


        case CLEAR_PROJECT_DETAILS:

            return {

                ...initialState

            };


        default:

            return state;

    }

}


export {
    FETCH_PROJECT_DETAILS_REQUEST,
    FETCH_PROJECT_DETAILS_SUCCESS,
    FETCH_PROJECT_DETAILS_FAILURE,
    CLEAR_PROJECT_DETAILS
};