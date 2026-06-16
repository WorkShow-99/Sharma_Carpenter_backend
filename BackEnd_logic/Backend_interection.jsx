


import React, { useState } from "react";


import Cookies from "js-cookie";









export const loginUser = async (email, password) => {

    
console.log(email, password);
  try {
    // console.log("Attempting to log in with:", email, password);

    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Include cookies in the request
      

      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("Login response status:", response.status);
    const data = await response.json();
    console.log("Login response:", data);

    if (!response.ok) {
      console.error("Login failed:", data.error || "Unknown error");
    console.log("User Loggedafadsfd In:", data);

      throw new Error(data.message || "Login failed");
    }
    
    

    console.log("User Logged In:", data);
   

    return data;

  } catch (error) {
    // setUser(null);

    console.error("Login Error:", error.message);
    throw error;

    return { error: error.message };
  }
};

export const logoutUser = async () => {
  
  try {
    const response = await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      credentials: "include", // Include cookies in the request
    });
    
    if (!response.ok) {
      throw new Error("Logout failed");
    }
    
    // Clear user state and cookies
    Cookies.remove('refresh_Token', { path: '/' });


  } catch (error) {
    console.error("Logout Error:", error.message);
    throw error;
  }
}


export const CheckAccessToken = async (token, setUser, logout, setLoading) => {
  
   try {
      const response = await fetch("http://localhost:8080/api/auth/verify-token", {
          method: "POST",
          headers: {

              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
          credentials: "include",
      });
      
      if (!response.ok) {
          throw new Error("Token verification failed");
      }
      
      const data = await response.json();
      console.log("Token verification response:", data);
      if (!data.valid) {

          throw new Error("Invalid token");
      }

      
      
      // Optionally, you can fetch user data here if needed
      // const userResponse = await fetch(
      //   "http://localhost:8080/api/auth/user",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //     credentials: "include",
      //   }
      // );  
      // if (!userResponse.ok) {
      //   throw new Error("Failed to fetch user data");
      // }
      // const userData = await userResponse.json();
      // setUser(userData.user);
      setLoading(false);

      return true;
    } catch (error) {
      console.error("Token verification error:", error.message);
      // setError(error.message);
      logout();
      setLoading(false);
      return false;
    }
}




export const CheckRefreshToken = async (token,setUser,logout,setLoading) => {
  
   try {
      const response = await fetch("http://localhost:8080/api/auth/verify-refresh-token", {
          method: "POST",
          headers: {

              "Content-Type": "application/json",
              // Authorization: `Bearer ${token}`,
          },
          credentials: "include",
      });
      
      if (!response.ok) {
          throw new Error("refresh Token verification failed");
      }
      
      const data = await response.json();
      console.log("Refresh token verification response:", data);
      if (!data.valid) {

          throw new Error("Invalid refresh token");
      }

      
      
      // Optionally, you can fetch user data here if needed
      // const userResponse = await fetch(
      //   "http://localhost:8080/api/auth/user",
      //   {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //     credentials: "include",
      //   }
      // );  
      // if (!userResponse.ok) {
      //   throw new Error("Failed to fetch user data");
      // }
      // const userData = await userResponse.json();
      // setUser(userData.user);
      setLoading(false);
      console.log("Refresh  token is valid." + data);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      setLoading(false);
      
      return true;
    } catch (error) {
      console.error("refresh Token verification error:", error.message);
      // setError(error.message);
      logout();
      setLoading(false);
      return false;
    }
}