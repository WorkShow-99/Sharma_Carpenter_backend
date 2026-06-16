// context/auth_context.jsx

import {
  createContext,
  useContext,
} from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";

import {
  StartUserFunctionApiWithFirebase,
  loginFailure,
  logOut,
} from "../src/redux_store/User_redux/User_function";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = async () => {

    try { dispatch(StartUserFunctionApiWithFirebase()
      );

      navigate("/user-dashboard");

    } catch (error) {

      console.error(
        "Google Login Failed:",
        error
      );

      dispatch(
        loginFailure(
          error.message
        )
      );
    }
  };

  const logout = () => {

    dispatch(logOut());

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "accessToken"
    );

    localStorage.removeItem(
      "refreshToken"
    );

    Cookies.remove(
      "user",
      {
        path: "/",
      }
    );

    Cookies.remove(
      "refreshToken",
      {
        path: "/",
      }
    );

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;