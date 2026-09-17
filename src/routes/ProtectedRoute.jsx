


import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { isAuthenticated } from "../redux_store/User_redux/Uesr_get";
import { useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {

    const isAuth = useSelector(isAuthenticated);
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to="/login" replace
        state={{
                    from: location
                }}
                 />;
    }

    return children;

}