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
LOADING_REQUEST

} from './UserType';







const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},    // Will hold { id, name, email }
  isGoogleAuthenticated: false, // New field to track Google auth status
  isEmailAuthenticated: false, // New field to track email auth status
  error: null,
  authChecked: false ,// New field to track if auth check has been performed

  

};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState, // Reset to initial state on new login attempt
        loading: true,
        error: null // Reset errors on a new attempt
        , authChecked: false // Mark auth check as not completed on new login attempt
      };
      // --- loading request case added for better state management during async operations
    case LOADING_REQUEST:
        return {
          ...initialState, // Reset to initial state on new login attempt
          loading: true,
          error: null // Reset errors on a new attempt
          , authChecked: false // Mark auth check as not completed on new login attempt
        };
      

      // ________----------login success cases for different auth methods----------________
    case LOGIN_SUCCESS:
      console.log("action payload:", action.payload);
      return {
        ...initialState, // Reset to initial state on successful login
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        isGoogleAuthenticated: false,
        error: null
        , authChecked: true // Mark auth check as completed on successful login
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
        , authChecked: true // Mark auth check as completed on failure
      };
      
    case LOGOUT:
      console.log("Logging out, resetting user state.");


      return {
        ...initialState, // Safely resets back to the blank configuration
        isGoogleAuthenticated: false, // Ensure Google auth status is reset on logout
        isEmailAuthenticated: false ,// Ensure email auth status is reset on logout
        isAuthenticated: false, // Ensure overall auth status is reset on logout

        user: {} // Explicitly clear user data on logout
        , authChecked: true // Mark auth check as completed on logout
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