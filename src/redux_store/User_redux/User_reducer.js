// userReducer.js
import { isSignInWithEmailLink } from 'firebase/auth';
import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT, 
  UPDATE_PROFILE ,
    CHANGE_USER,
    EMAIL_LOGIN_SUCCESS,
    GOOGLE_LOGIN_SUCCESS,

} from './UserType';






const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,    // Will hold { id, name, email }
  isGoogleAuthenticated: false, // New field to track Google auth status
  isEmailAuthenticated: false, // New field to track email auth status
  error: null

};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState, // Reset to initial state on new login attempt
        loading: true,
        error: null // Reset errors on a new attempt
      };
      
    case LOGIN_SUCCESS:
      // console.log("Login successful, updating state with user data:", action.payload);
      // console.log("User data being set in state:", action.payload.user);
      // console.log("............");
      // console.log("Is Google Authenticated:", state);
      return {
        ...initialState, // Reset to initial state on successful login
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        isGoogleAuthenticated: false,
        error: null
      };

    case GOOGLE_LOGIN_SUCCESS:
        return {
            ...initialState,
            loading: false,
            isAuthenticated: true,
            user: action.payload.user,
            isGoogleAuthenticated: true, // Set Google auth status to true
            isEmailAuthenticated: false, // Set email auth status to false for Google login
            error: null
        };

    case EMAIL_LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload.user,
            isGoogleAuthenticated: false, // Set Google auth status to false for email login
            isEmailAuthenticated: true, // Set email auth status to true for email login
            error: null
        };
    
      
    case LOGIN_FAILURE:
      return {
        ...initialState, // Reset to initial state on failure
        loading: false,
        isAuthenticated: false,
        isGoogleAuthenticated: false, // Ensure Google auth status is reset on failure
        isEmailAuthenticated: false, // Ensure email auth status is reset on failure
        user: null,
        error: action.payload // Error message string
      };
      
    case LOGOUT:
      console.log("Logging out, resetting user state.");

      return {
        ...initialState, // Safely resets back to the blank configuration
        isGoogleAuthenticated: false, // Ensure Google auth status is reset on logout
        isEmailAuthenticated: false ,// Ensure email auth status is reset on logout
        isAuthenticated: false, // Ensure overall auth status is reset on logout
        user: null // Explicitly clear user data on logout
    };
      
    case UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload // Deeply merges the updated fields into the user object
        }
      };
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload
      };
      
    default:
      return state;
  }
}