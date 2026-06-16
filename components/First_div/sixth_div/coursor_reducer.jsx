
import { createContext, useReducer } from "react";




const Initial_state = {
    value: "",
    width: "20px",
    height: "20px",
    hasValue: false,
};

const CoursorReducer = (state = Initial_state, action) => {
        console.log(action.payload)
    switch (action.type) {
        case "HOVER_CARD":
            return {
                ...state,
                value: action.payload.value,
                width: "50px",
                height: "50px",
                hasValue: true,
            };
        case "LEAVE_CARD":
            return {
                ...state,
                width: "20px",
                height: "20px",
                value: "",
                hasValue: false,
            };
        default:
            return state;
    }
};



export const CoursorContext = createContext();

export const CoursorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CoursorReducer, Initial_state);
    return (
        <CoursorContext.Provider value={{ state, dispatch }}>
            {children}
        </CoursorContext.Provider>
    );
};


