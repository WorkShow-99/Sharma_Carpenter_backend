// userActions.js

// user funciton

import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT, 
  UPDATE_PROFILE,
  CHANGE_USER,
  GOOGLE_LOGIN_SUCCESS,
  EMAIL_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  EMAIL_LOGIN_FAILURE
} from '../User_redux/UserType';

import {signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, provider } from "../../../firestore/firestore";


import createAction from '../create_action';

import {loginUser,logoutUser}  from '../../../BackEnd_logic/Backend_interection';
import Cookies from "js-cookie";



export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData // Expecting: { user: { id, name, email }, token: '...' }
});

export const logOut = () => ({
    type: LOGOUT
    });

export const loginFailure = (errorMsg) => ({
  type: LOGIN_FAILURE,
  payload: errorMsg
});

export const changeUser = (newUserData) => ({
  type: CHANGE_USER,
  payload: newUserData // Expecting a complete user object to replace the current one
});

export const logout = () => ({
  type: LOGOUT
});

export const updateProfile = (updatedFields) => ({
  type: UPDATE_PROFILE,
  payload: updatedFields // Expecting: { name: 'New Name' }
});


export const StartUserFunctionApi =  (email,password) =>  async (dispatch) => { 


    dispatch(loginRequest());
    
     try {
         const data = await loginUser(
            email,
            password
         );
      if (data.error) {
         console.log("Login failed:", data.error);
            throw new Error(data.error);
         }
        //  console.log("User Logged In:", data);
         localStorage.setItem("accessToken", data.accessToken);
         localStorage.setItem("user", JSON.stringify(data.user));
        // Assuming the response contains a user object with an id
         dispatch(loginSuccess({ user: data.user }));
         Cookies.set("user", JSON.stringify(data.user), { expires: 7, path: "/" });
        //  console.log("this is the user print after login ",data.user);
        //  navigate("/user-dashboard"); // Navigate to the dashboard upon successful login

         console.log("Login successful:", localStorage.getItem("user"), localStorage.getItem("accessToken"));
         

         // localStorage.setItem("user",
         //    JSON.stringify(data.user)
         // );

         // localStorage.setItem(
         //    "accessToken",data.accessToken
         // );
                  
         // console.log("Login successful:", data);
         // setError("");
         // setUser(data.user); // Assuming the response contains a user object with an id
         // navigate("/user-dashboard"); // Navigate to the dashboard upon successful login

      } catch (error) {
         console.error("Login failed:", error.message);
         console.log("Login failed:", error.message);
        
dispatch(loginFailure(error.message));
            dispatch(logOut());



      }
}







export const StartUserFunctionApiWithFirebase = () => async (dispatch) => { 
  dispatch(loginRequest());
    
  try {
    const result = await signInWithPopup(auth, provider);

    console.log("Firebase sign-in result:", result);
    if (!result || !result.user) {
      throw new Error("Invalid sign-in result");
    }
    

    console.log(result.user);
    const { email, displayName, uid } = result.user;

    // 1. EXTRACT THE FIREBASE ID TOKEN HERE FIRST
    const firebaseToken = await result.user.getIdToken();
    console.log("Firebase token retrieved:", firebaseToken);

    // 2. NOW PASS IT INTO YOUR FETCH BODY
    const response = await fetch(
      "http://localhost:8080/api/auth/google",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        body: JSON.stringify({

          firebaseToken, // This will now work perfectly
        }),
      }
    );


   const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Google Login Failed"
        );
      }

      localStorage.setItem(
        "accessToken",
        data.accessToken
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          data.user
        )
      );

      dispatch(
        loginSuccess({
          user: data.user,
        })
      );

      return data;

    } catch (error) {

      dispatch(
        loginFailure(
          error.message
        )
      );

      throw error;
    }
};



export default {
    loginRequest,
    loginSuccess,
    loginFailure,
    logOut,
    logout,
    updateProfile,
    StartUserFunctionApi,
    StartUserFunctionApiWithFirebase
}