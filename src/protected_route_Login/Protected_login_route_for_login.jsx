

// ProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function ProtectedLoginRouteLogin({ children }) {
  // Grab auth status from your state (adjust state.user depending on your combineReducer key)
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);

  if (isAuthenticated) {
   
    return <Navigate to="/user-dashboard" replace />;
  }

  return children;
}