import "./App.css";
import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firestore/firestore";

import {
  loginSuccess,
  logOut,
} from "../src/redux_store/User_redux/User_function";

import { NavBar } from "../components/NavBar/NavBar";
import { DashBoard } from "../components/DashBoard/DashBoard";
import { Main_project } from "../components/Project_view/Main_project";
import { UserDashboard } from "../userDashboard/UserDashboard";
import { Dashboard } from "../normal_dashboard/dashboard";
import Login from "../login/login";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../src/redux_store/User_redux/Uesr_get";

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

  useEffect(() => {

    

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          const {
            displayName,
            email,
            photoURL,
            uid,
          } = currentUser;

          dispatch(
            loginSuccess({
              user: {
                displayName,
                email,
                photoURL,
                uid,
              },
            })
          );
        } else {
          dispatch(logOut());
        }
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Routes>

      <Route element={<Layout />}>
        <Route
          path="/"
          element={<DashBoard />}
        />

        <Route
          path="/projects"
          element={<Main_project />}
        />
      </Route>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/user-dashboard"
        element={<UserDashboard />}
      />

    </Routes>
  );
}

export default App;