// login page

import { useState ,useEffect} from "react";
import { Mail ,Lock} from "lucide-react";



import { useNavigate,useLocation } from "react-router-dom";

import {StartUserFunctionApi,StartUserFunctionApiWithFirebase} from "../src/redux_store/User_redux/User_function";
import { useSelector } from "react-redux";
import { isAuthenticated , user as users,loading as load,error as err} from "../src/redux_store/User_redux/Uesr_get";

import {useDispatch} from "react-redux";


export const Login = () => {

   const loading = useSelector(load);
   const user = useSelector(users);
   const isAuth = useSelector(isAuthenticated);
   const error = useSelector(err);
   

   
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/explore";

   const dispatch = useDispatch();
   // console.log("this is enter the login",user)


   // useEffect(() => {
   //    if (isAuth) {
   //       // console.log("User is authenticated, navigating to dashboard");

   //       navigate("/explore");
   //       // return null // Prevent rendering the login component
   //    }
   // }, [isAuth,navigate]);




   const loginWithGoogle = ()=>{
      dispatch(StartUserFunctionApiWithFirebase())
      .then(() => {
         console.log("Google login successful, navigating to:", from);
         navigate(from, { replace: true });
      })
      .catch((error) => {
         console.error("Google Login Failed:", error);
         dispatch(loginFailure(error.message));

      });
   }
      // useAuth();

   const [formData, setFormData] =
      useState({
         email: "",
         password: ""
      });

   

   const handleChange = (e) => {

      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
     

   };
      console.log('loading',loading);

   const handleSubmit = async (e) => {

      e.preventDefault();
      

      dispatch(StartUserFunctionApi(formData.email, formData.password));


   };


   if (loading) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"> rotate</div>
         </div>
      );
   }

   // if (!isAuth) {
   //    console.log("User is authenticated, navigating to dashboard");
   //    navigate("/user-dashboard");
      // return null; // Prevent rendering the login component
   return (

      <div
         className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-gray-100
            p-4
         "
      >

         <div
            className="
               w-full
               max-w-md
               bg-white
               rounded-3xl
               shadow-xl
               p-8
            "
         >

            {/* Header */}

            <div className="text-center mb-8">

               <h1
                  className="
                     text-3xl
                     font-bold
                     text-gray-800
                  "
               >
                  Welcome Back
               </h1>

               <p
                  className="
                     text-gray-500
                     mt-2
                  "
               >
                  Login to continue
               </p>

               {error && (
                  <p className="mt-4 text-sm text-red-600">
                     {error}
                  </p>
               )}

            </div>

            {/* Google Login */}

            <button
               onClick={loginWithGoogle}
               className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-gray-300
                  rounded-xl
                  py-3
                  font-medium
                  hover:bg-gray-100
                  transition
               "
            >

              <img
   src="https://www.svgrepo.com/show/475656/google-color.svg"
   alt="google"
   className="w-5 h-5"
/>

               Continue with Google

            </button>

            {/* Divider */}

            <div
               className="
                  flex
                  items-center
                  my-6
               "
            >

               <div className="flex-1 h-px bg-gray-300"></div>

               <span
                  className="
                     px-4
                     text-gray-400
                     text-sm
                  "
               >
                  OR
               </span>

               <div className="flex-1 h-px bg-gray-300"></div>

            </div>

            {/* Email Login Form */}

            <form
               onSubmit={handleSubmit} 
               className="space-y-5"
            >

               {/* Email */}

               <div>

                  <label
                     className="
                        text-sm
                        font-medium
                        text-gray-700
                     "
                  >
                     Email
                  </label>

                  <div
                     className="
                        mt-2
                        flex
                        items-center
                        border
                        border-gray-300
                        rounded-xl
                        px-4
                     "
                  >

                     <Mail
                        size={18}
                        className="text-gray-400"
                     />

                     <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className="
                           w-full
                           p-3
                           outline-none
                           bg-transparent
                        "
                     />

                  </div>

               </div>

               {/* Password */}

               <div>

                  <label
                     className="
                        text-sm
                        font-medium
                        text-gray-700
                     "
                  >
                     Password
                  </label>

                  <div
                     className="
                        mt-2
                        flex
                        items-center
                        border
                        border-gray-300
                        rounded-xl
                        px-4
                     "
                  >

                     <Lock
                        size={18}
                        className="text-gray-400"
                     />

                     <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className="
                           w-full
                           p-3
                           outline-none
                           bg-transparent
                        "
                     />

                  </div>

               </div>

               {/* Forgot Password */}

               <div
                  className="
                     flex
                     justify-end
                  "
               >

                  <button
                     type="button"
                     className="
                        text-sm
                        text-blue-600
                        hover:underline
                     "
                  >
                     Forgot Password?
                  </button>

               </div>

               {/* Login Button */}

               <button
                  type="submit"
                  className="
                     w-full
                     bg-black
                     text-white
                     py-3
                     rounded-xl
                     font-medium
                     hover:opacity-90
                     transition
                  "
                  
               >
                  Login
               </button>

            </form>

            {/* Signup */}

            <p
               className="
                  text-center
                  text-sm
                  text-gray-500
                  mt-6
               "
            >

               Don't have an account?

               <span
                  className="
                     text-black
                     font-medium
                     cursor-pointer
                     ml-1
                  "
               >
                  Sign Up
               </span>

            </p>

         </div>

      </div>

   );
   // }÷

};

export default Login;  