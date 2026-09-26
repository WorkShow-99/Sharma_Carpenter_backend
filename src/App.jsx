import "./App.css";
import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

import { useDispatch } from "react-redux";
// import {New_DashBoard} from "../components/New_dashboard/New_DashBoard";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firestore/firestore";

import New_DashBoard from "../components/New_dashboard/New_DashBoard";
import {
  loginSuccess,
  logOut,
  initializeAuth,
} from "../src/redux_store/User_redux/User_function";


import { NavBar } from "../components/NavBar/NavBar";
import { DashBoard } from "../components/DashBoard/DashBoard";
import { Main_project } from "../components/Project_view/Main_project";
// import { UserDashboard } from "../userDashboard/UserDashboard";
import { Dashboard } from "../normal_dashboard/dashboard";
import Login from "../login/login";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../src/redux_store/User_redux/Uesr_get";


import OverlayForProject from "../components/New_dashboard/Dashboard_components/OverLayForProject/OverLayForProject";
import {NonLoginPage} from "../NonLoginPage/NonLoginPage";

import {loading} from "../src/redux_store/User_redux/Uesr_get";

import {lodingRequest,loginRequest} from "../src/redux_store/User_redux/User_function";

// import {useSelector} from "react-redux";


// import {users} from "../src/redux_store/User_redux/Uesr_get";


import {user} from "../src/redux_store/User_redux/Uesr_get";
 

import {getCurrentUser,refreshAccessToken} from "../src/services/authService";

import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

// -----------New_DashBoard.jsx-----------
import {ExploreHome} from "../components/New_dashboard/Dashboard_components/Explore_home/Explore_home";


import Create from "../components/New_dashboard/Dashboard_components/Create/Create";
import Messages from "../components/New_dashboard/Dashboard_components/Messages/Messages";
import Notifications from "../components/New_dashboard/Dashboard_components/Notification/Notification";
import Ideas from "../components/New_dashboard/Dashboard_components/Ideas_/Ideas";


// ------------------Dashboard.jsx----------------
import UserDashboard from "../src/Final_dashboard/UserDashboard";
import DashboardRedirect from "../src/Final_dashboard/components/DashboardRedirect/DashboardRedirect";
import MyProjects from "../src/Final_dashboard/components/DashboardProjects/DashboardProject";
import LikedProjects from "../src/Final_dashboard/components/DashboardLikes/DashboardLikes";
// import Statistics from "../src/Final_dashboard/components/DashboardStatistics/DashboardStatistics";
// import Settings from "../src/Final_dashboard/components/DashboardSettings/DashboardSettings";
import SavedProjects from "../src/Final_dashboard/components/DashboardSaved/DashboardSaved";


import ProjectDetails from "../components/ProjectDetail/ProjectDetail";



// ------------------ProjectStudio.jsx----------------÷÷
import ProjectStudio from "../components/ProjectStudio/ProjectStudio";
import GlobalNotification from "../components/GlobalNotification/GlobalNotification";
import {DirectoryUnorganizedHolder}  from "../src/Final_dashboard/components/DashboardSaved/Directory_Unorganized/DirecotryUnorganizedHolder.jsx";

import Directory from "../src/Final_dashboard/components/DashboardSaved/ProjectDirectory/DirectDirectory/DirectDirectory";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function App() {
  const dispatch = useDispatch();


  

  // const loading  = useSelector((state) => state.user.loading);

  //  const user_data = useSelector((state) => state.user);

// console.log("this is the user print in app page",user_data);



  // useEffect(() => {



  //   const checkAuthState = async () => {
  //     try {


  //        const accessToken =
  //               localStorage.getItem("accessToken");

  //           if (!accessToken) {

  //               dispatch(logOut());
  //               // console.log("No access token found, user logged out");
  //               throw new Error("No access token found");


  //           }
  //         // console.log("Access Token found, checking user:", accessToken);
       
  //       const response = await getCurrentUser(accessToken);


  //       if (response) {
  //         const {
  //           username,
  //           email,
  //           profileImage = response.user.profileImage.url,
  //           uid = response.user._id,
  //         } = response.user;
  //         const isProfessional = response.user.role !== "customer";

  //         dispatch(
  //           loginSuccess({
  //             user: { username, email, profileImage,uid, isProfessional },
  //           })
  //         );
  //       } else {
  //         dispatch(logOut());
  //       }

  //     } catch (error) {
  //         console.error("Error. :", error);
  //       try {
  //         const response = await refreshAccessToken();
          
  //         if (response.status !== 200 || response.data.success !== true) {
  //           throw new Error("Failed to refresh access token");
  //         }
  //         // console.log("Access token refreshed successfully:", response);
  //         localStorage.setItem("accessToken", response.data.accessToken);

  //         const currentUser = await getCurrentUser(response.data.accessToken);

  //         if (currentUser) {
  //           const { username= currentUser.user.username, email = currentUser.user.email, profileImage = currentUser.user.profileImage.url, uid = currentUser.user._id } = currentUser;

  //           console.log(username, email, profileImage, uid);
  //           dispatch(
  //             loginSuccess({
  //               user: { username, email, profileImage, uid },
  //             })
  //           );
  //         } else {
  //           dispatch(logOut());
  //         }

  //       }
  //       catch (refreshError) {
  //               console.error(
  //                 "Error refreshing access token:",
  //                 refreshError
  //               );
  //               localStorage.removeItem(
  //                         "accessToken"
  //                     );


  //               dispatch(logOut());

  //             }

        
  //     }

  //   };

  //   checkAuthState();

  //   // dispatch(initializeAuth());


  // }, [dispatch]);


useEffect(() => {

    const checkAuthState = async () => {

        try {

            const accessToken =
                localStorage.getItem("accessToken");


            if (!accessToken) {

                dispatch(logOut());

                return;

            }


            const response =
                await getCurrentUser();


            if (!response?.user) {

                dispatch(logOut());

                return;

            }


            const userData =
                response.user;


            const {
                username,
                email,
                profileImage,
                _id
            } = userData;


            const isProfessional =
                userData.role !== "customer";


            dispatch(
                loginSuccess({
                    user: {
                        username,
                        email,
                        profileImage:
                            profileImage?.url || "",
                        uid: _id,
                        isProfessional
                    }
                })
            );


        } catch (error) {

            console.error(
                "Authentication check failed:",
                error
            );


            dispatch(logOut());

        }

    };


    checkAuthState();

}, [dispatch]);

  // if (user_data.loading) {
  //     return (
  //        <div className="min-h-screen flex items-center justify-center bg-gray-100">
  //           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
  //        </div>
  //     );
  //  }

  return (
  //  <BrowserRouter> 
 

    <>
      <GlobalNotification />
    <Routes>
      

      {/* <Route element={<Layout />}> */}
      <Route >


        <Route
          path="/"
          element={<NonLoginPage />}
        />

        {/* <Route path="/explore"> */}
          {/* <Route index element={<New_DashBoard />} /> */}
          {/* route that takes an input as a URL param, e.g. /explore/some-input */}
          {/* <Route path=":input" element={<OverlayForProject />} /> */}
        {/* </Route> */}

        <Route path="/explore" element={ 
                    <ProtectedRoute>
                        <New_DashBoard/>
                    </ProtectedRoute>}>

                      {/* <Route
                          path=":projectId(\\d+)"
                          element={<OverlayForProject />}
                        />   */}
                      <Route
                            path=":projectId"
                            element={<OverlayForProject />}
                        />
                  <Route index element={<ExploreHome />} />

                  <Route path="idea" element={<Ideas />} />

                  {/* <Route path="create" element={<Create />} /> */}
                  <Route path="create" element={<ProjectStudio />} />

                  {/* ProjectStudio */}

                  <Route path="notifications" element={<Notifications />} />

                  <Route path="messages" element={<Messages />} />

                    

                  {/* <Route path="settings" element={<Settings />} />  */}


                  {/* --------------final Dashoard */}
                    <Route
                          path="final-dashboard"
                          element={
                            <ProtectedRoute>
                              <UserDashboard />
                            // </ProtectedRoute>
                          }
                          >

                             <Route
                                    index
                                    element={<DashboardRedirect />}
                                />

                                <Route
                                    path="projects"
                                    element={<MyProjects />}
                                />

                                  {/* <Route
                                      path="saved"
                                      element={<SavedProjects />}
                                  /> */}
                                <Route
                                    path="saved"
                                    element={<SavedProjects />}
                                >
                                     <Route
                                        index
                                        element={<DirectoryUnorganizedHolder />}
                                    />

                                    <Route
                                        path="directory/:directoryId"
                                        element={<Directory />}
                                    />

                                </Route>
                                  <Route
                                      path="liked"
                                      element={<LikedProjects />}
                                  >
                                   
                                  </Route>
                                   <Route
                                      path=":projectId"
                                      element={<OverlayForProject />}
                                    />

                                   

                                  {/* <Route
                                      path="statistics"
                                      element={<Statistics />}
                                  />

                                  <Route
                                      path="settings"
                                      element={<Settings />}
                                  /> */}



                          </Route>
                  {/* --------------final Dashoard */}

          </Route>




        <Route
          path="/old_dashboard"
          element={

          <DashBoard />


        }
        />

        <Route
          path="/projects"
          element={<Main_project />}
        />

      </Route>

      <Route
        path="/login"
        element={
          <GuestRoute>  
        <Login />

          </GuestRoute>
      }
      />

      <Route
        path="/dashboard"
        element={ <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
      }
      />

      <Route
        path="/user-dashboard"
        element={
<ProtectedRoute>
        <UserDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
    </>


  );
}

export default App;