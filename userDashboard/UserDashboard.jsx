import React, { useState ,useEffect} from "react";

import Sidebar from "./SideBar";
import Topbar from "./TopBar";
import DashboardHome from "./Dashboard_home";

// import {Projects} from "./pages/Projects";
import { Projects_view } from "./pages/projects";
import  {AddProjectLayer} from "./pages/add_project_layer";



import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { isAuthenticated , user as users}  from "../src/redux_store/User_redux/Uesr_get";


export const UserDashboard = () => {

const isAuth = useSelector(isAuthenticated);

  const [activeTab, setActiveTab] =
    useState("dashboard");

  const [onLayer, setonLayer] =
    useState(false);

  useEffect(() => {

  }, []);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  const renderContent = () => {

    switch (activeTab) {

      case "dashboard":
        return <DashboardHome />;

      case "projects":
        return (
          <Projects_view
            onLayer={onLayer}
            setonLayer={setonLayer}
          />
        );

      case "about":
        return <h1>About Page</h1>;

      case "contact":
        return <h1>Contact Page</h1>;

      case "settings":
        return <h1>Settings Page</h1>;

      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="bg-[#f5f5f7] min-h-screen p-4 z-30">

      <div className="bg-[#fafafa] rounded-[40px] flex overflow-hidden border border-gray-200">

        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <div className="flex-1 p-8">

          <Topbar />

          {renderContent()}

        </div>
      </div>
      <AddProjectLayer onLayer={onLayer} setonLayer={setonLayer} />
    </div>
  );
};

export default UserDashboard;