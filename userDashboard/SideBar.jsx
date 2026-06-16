import React from "react";
import { sidebarLinks } from "./sideData";
import { useAuth } from "../context/auth_context";
import Cookies from "js-cookie";

import {useNavigate} from "react-router-dom";

import { useSelector } from "react-redux";

import {useDispatch} from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firestore/firestore";

import { StartUserFunctionApiWithFirebase } from "../src/redux_store/User_redux/User_function";
import { loginFailure, logOut } from "../src/redux_store/User_redux/User_function";

export const Sidebar = ({ activeTab, setActiveTab }) => {
    const { logout,setUser } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LogOut_user = async (id) => {
      if (id === "logout") {
            // Perform logout logic here
            console.log("Logging out...");
            signOut(auth).then(async () => {
                console.log("User signed out successfully.");
                // setUser(null); // Clear user from context

            const response = await fetch(
                    "http://localhost:8080/api/auth/logout",
                    {
                      method: "POST",
                      credentials: "include",
                                }
                              );
            if (!response.ok) {
                console.error("Failed to log out from backend");
                dispatch(loginFailure("Failed to log out from backend"));
                return;
             }
             console.log(await response.json());

                dispatch(logOut()); // Update Redux state
          // Remove refresh token cookie and any stored tokens after successful sign out
          Cookies.remove('refreshToken', { path: '/' });
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user"); // Clear user from local storage
          localStorage.removeItem("accessToken"); // Clear access token from local storage

          navigate("/login");

            })
            .catch((error) => {
                console.error("Error signing out:", error);
                dispatch(loginFailure("Failed to log out"));
            });
            
        }
    };
  return (
    <div className="w-16 md:w-[260px] h-screen      whitespace-normal bg-white border-r border-gray-200 flex flex-col justify-between p-2 md:p-5">

      {/* Profile */}
      <div className="flex flex-col items-center md:items-start ">
        <div className="flex  items-center md:items-start flex-col md:flex-row gap-3 mb-6 md:mb-10 overflow-hidden">

          <img
            src="https://i.pravatar.cc/150"
            alt=""
            className="w-10 h-10 md:w-14 md:h-14 rounded-2xl object-cover"
          />

          <div className="hidden md:block wrap-text " >
            <h2 className="font-semibold text-lg wrap-text">Pritam Kumar</h2>
            <p className="text-sm text-gray-500 wrap-text">pritam@gmail.com</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2 flex md:flex-col flex-col items-center md:items-stretch">

          {sidebarLinks.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() =>
                  item.id === "logout" ? LogOut_user(item.id) : setActiveTab(item.id)
                }
                className={`w-12 md:w-full flex items-center md:gap-3 justify-center md:justify-start px-2 md:px-4 py-3 md:py-3 rounded-2xl transition-all duration-300
                  ${
                    activeTab === item.id
                      ? "bg-purple-100 text-purple-700"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                <Icon size={22} />
                <span className="font-medium hidden md:inline-block">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-sm text-gray-400 hidden md:block">
        © 2026 Dashboard
      </div>
    </div>
  );
};

export default Sidebar;