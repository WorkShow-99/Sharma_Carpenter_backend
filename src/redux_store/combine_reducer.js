import { combineReducers } from "redux";
import { userReducer } from "./User_redux/User_reducer";

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here as your app grows
});

export default rootReducer;

