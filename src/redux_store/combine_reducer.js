import { combineReducers } from "redux";
import { userReducer } from "./User_redux/User_reducer";
import { Project_featch_reducer } from "./Project_redux/MainProject_redux";
import ProjectFeedReducer  from "./Project_redux/ProjectFeed_reducer";
import projectDetailsReducer
    from "./Project_redux/projectDetails.js";
  
import notificationReducer
    from "./Notification_redux/Notification_reducer";

import likedProjectsReducer from "././LikedProject/LikedProjects_reducer.js";


import savedDirectoryReducer
    from "./SavedDirectory/SavedDirectory_reducer.js";


import savedProjectReducer
    from "./SavedProjects/SavedProject_reducer";


import directoryProjectsReducer from "./Project_redux/SaveDirectoryProject/DirectoryProjects_reducer.js";
const rootReducer = combineReducers({
  user: userReducer,
  // project_featch : Project_featch_reducer,
  projectFeed: ProjectFeedReducer,

   projectDetails:
        projectDetailsReducer,
        likedProjects: likedProjectsReducer,
  // Add other reducers here as your app grows
    notification:
        notificationReducer,

    savedDirectory:
        savedDirectoryReducer,
    savedProjects:
        savedProjectReducer ,
    directoryProjects:
        directoryProjectsReducer
});


export default rootReducer;

