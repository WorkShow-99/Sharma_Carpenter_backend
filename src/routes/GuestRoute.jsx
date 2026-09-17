import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { isAuthenticated } from "../redux_store/User_redux/Uesr_get";

export default function GuestRoute({ children }) {

    const location = useLocation();

    const isAuth = useSelector(isAuthenticated);
    console.log("GuestRoute isAuth:", isAuth);
    const from = location.state?.from || {
    pathname: "/explore",
};

    if (isAuth) {
        return <Navigate to={from} replace />;
    }

    return children;

}