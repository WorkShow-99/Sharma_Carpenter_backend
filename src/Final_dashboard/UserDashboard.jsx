import "./UserDashboard.css";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


// import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import DashboardNavigation from "./components/DashboardNavigation/DashboardNavigation";
// import DashboardStats from "./components/DashboardStats/DashboardStats";

// resetLikedProjects 
import {resetLikedProjects} from "../../src/redux_store/LikedProject/LikedProjects_actions";
import {addNotification} from "../../src/redux_store/Notification_redux/Notification_actions";

// import {resetLikedProjects} from "../../src/redux_store/LikedProject/LikedProjects_actions";

import {clearDirectories} from "../../src/redux_store/SavedDirectory/SavedDirectory_actions";
import{ fetchUnorganizedProjects,resetSavedProjects} from "../../src/redux_store/SavedProjects/SavedProject_action.js";


export default function UserDashboard() {



    const dispatch = useDispatch();
        useEffect(() => {

            // Dashboard mounted
            console.log("UserDashboard mounted");


            // =====================================
            // DASHBOARD UNMOUNT
            // =====================================

            return () => {

                console.log(
                    "UserDashboard unmounted - clearing dashboard data"
                );

                dispatch(resetLikedProjects());
                dispatch(resetSavedProjects());
                dispatch(clearDirectories());

            };
         }, [dispatch]);


        const clickhandler = () => {
            console.log("clickhandler called");

            dispatch(
        {

                type:
                    "ADD_NOTIFICATION",

                payload:
                    {

                        id:
                            Date.now() +
                            Math.random(),

                        type:
                            "success",

                        message:
                            "Can't featch the projects"

                    }

            }
            // addNotification({

            //     type: "error",

            //     message:
            //         error.message ||
            //         "Failed to fetch projects"

            // })
        );
        
        }
    return (

        <div className="user-dashboard">

            {/* <DashboardHeader /> */}
        
         {/* <button type="button"
                className="remove-liked-btn" 
                onClick={() => clickhandler()}>
                click me to check 
            </button> */}

            <ProfileHeader />


            {/* <DashboardStats /> */}

            <DashboardNavigation />


            <main className="dashboard-content">

                <Outlet />

            </main>

        </div>

    );

}