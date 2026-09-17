import { Navigate }
from "react-router-dom";

import { useAuth }
from "../context/auth_context";
import { isAuthenticated , user,loading,} from "../src/redux_store/User_redux/Uesr_get";

const ProtectedRoute = ({
   children
}) => {

   // const {
   //    user,
   //    setUser,
   //    loading
   // } = useAuth();

   const user = useSelector(user);
   const isAuth = useSelector(isAuthenticated);
   const loading = useSelector(loading);

   


   // Wait for auth check
   if (loading) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
         </div>
      );
   }

   // Not logged in
   if (!isAuth) {

      return <Navigate to="/login" />;
   }

   // Logged in
   return children;
};

export default ProtectedRoute;