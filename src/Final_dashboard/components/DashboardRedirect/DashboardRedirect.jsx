
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { isAuthenticated, user as users } from "../../redux_store/User_redux/Uesr_get";

export default function DashboardRedirect() {
    const users = useSelector((state) => state?.user?.user);



    // if (!users) {
    //     return <Navigate to="/login" replace />;
    // }

    const isProfessional = false;


    return (
        <Navigate
            to={isProfessional ? "/explore/final-dashboard/projects" : "/explore/final-dashboard/saved"}
            replace
        />
    );
}