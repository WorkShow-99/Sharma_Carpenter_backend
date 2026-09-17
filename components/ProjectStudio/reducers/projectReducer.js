import initialProject from "./initialProject";

const projectReducer = (state, action) => {
    switch (action.type) {
        case "SET_PROJECT":
            return {
                ...action.payload,
            };

        case "RESET_PROJECT":
            return {
                ...initialProject,
            };

        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };

        case "UPDATE_LOCATION":
            return {
                ...state,
                location: {
                    ...state.location,
                    ...action.payload,
                },
            };

        case "UPDATE_TAGS":
            return {
                ...state,
                tags: action.payload,
            };

        case "UPDATE_MEDIA":
            return {
                ...state,
                media: action.payload,
            };

        case "ADD_MEDIA":
            return {
                ...state,
                media: [...state.media, ...action.payload],
            };

        case "REMOVE_MEDIA":
            return {
                ...state,
                media: state.media.filter(
                    (_, index) => index !== action.payload
                ),
            };

        case "SET_HERO_MEDIA":
            return {
                ...state,
                media: state.media.map((item, index) => ({
                    ...item,
                    isHero: index === action.payload,
                })),
            };

        default:
            return state;
    }
};

export default projectReducer;