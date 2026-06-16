// import { useAuth }
//    from "../context/auth_context";

import {isAuthenticated , user as userData,loading as load} from "../src/redux_store/User_redux/Uesr_get";
import { useSelector } from "react-redux";
import { logOut } from "../src/redux_store/User_redux/User_function";


import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

export  const Dashboard = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const user = useSelector(userData);
   const isAuth = useSelector(isAuthenticated);
   const loading = useSelector(load);

   const  logout = () => {
      
      try {
         cosole.log("Logging out user:", user);
         dispatch(logOut());

         localStorage.removeItem("user");
         localStorage.removeItem("accessToken");

         // Optionally, you can also clear all local storage
         // localStorage.clear();
         
         // Redirect to login page
         navigate("/login");


      } catch (error) {
         console.log(error);
      }
   };

   

   // const {
   //    user,
   //    logout
   // } = useAuth();

   return (

      <div>

         <img
            src={user.photoURL}
            width="100"
         />

         <h1>
            {user.displayName}
         </h1>

         <p>
            {user.email}
         </p>

         <button onClick={logout}>
            Logout
         </button>

      </div>

   );

};

export default Dashboard;