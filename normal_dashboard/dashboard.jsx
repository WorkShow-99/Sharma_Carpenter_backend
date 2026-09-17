import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    user as userData,
    loading as load,
} from "../src/redux_store/User_redux/Uesr_get";

import { logOut } from "../src/redux_store/User_redux/User_function";
import {logoutUser} from "../src/services/authService"; // We'll create this next
// import { logoutUser } from "../src/services/authService"; // We'll create this next

export const Dashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(userData);
    const loading = useSelector(load);

    const handleLogout = async () => {
         try {
            // Call backend logout API
            const result = await logoutUser();

            // Clear local storage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            // Dispatch logout action to Redux store
            dispatch(logOut());

            // Navigate to login page
            navigate("/login", { replace: true });

         } catch (error) {
            console.error("Logout Failed:", error);
         }

    }


   //  const logout = async () => {

   //      try {

   //          // Call backend logout API later
   //          // await logoutUser();

   //          localStorage.removeItem("accessToken");
   //          // Remove refreshToken cookie (set with same attributes to ensure removal)
   //          try {
   //              document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}; Secure; SameSite=None`;
   //          } catch (e) {
   //              // Fallback: basic removal
   //              document.cookie = "refreshToken=; Max-Age=0; path=/;";
   //          }
            

   //          dispatch(logOut());
            

   //          navigate("/login", {
   //              replace: true,
   //          });

   //      } catch (error) {

   //          console.error("Logout Failed:", error);

   //      }

   //  };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
            </div>
        );
    }

    return (

        <div className="min-h-screen flex flex-col items-center justify-center gap-6">

            {user?.profileImage && (
                <img
                    src={user.profileImage}
                    alt={user.username}
                    className="w-24 h-24 rounded-full"
                />
            )}

            <h1 className="text-3xl font-bold">
                {user?.username}
            </h1>

            <p className="text-gray-600">
                {user?.email}
            </p>

            <button
                onClick={handleLogout}
                className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90">
                Logout
            </button>

        </div>

    );

};

export default Dashboard;