
import { useAuth } from "./auth_context";
import {UserDashboard} from "../userDashboard/UserDashboard";
import { useLayoutEffect } from "react";
import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated , user,loading,} from "../src/redux_store/User_redux/Uesr_get";

export const Login_protection = ({ children }) =>{
    
    const currentUser = useSelector(user);
    
    
    useLayoutEffect(() => {
        console.log("Login_protection rendered");
    }, []);
    if (!currentUser) return <>{children}</>;

    return <Navigate to="/user-dashboard" />;
}

export default Login_protection;
