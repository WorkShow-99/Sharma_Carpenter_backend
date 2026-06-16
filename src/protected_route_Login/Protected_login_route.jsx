

// ProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function ProtectedLoginRoute({ children }) {
  // Grab auth status from your state (adjust state.user depending on your combineReducer key)
  const isAuthenticated = useSelector((state) => state.user?.isAuthenticated);

  if (!isAuthenticated) {
    // If not logged in, boot them to the login page
    return <Navigate to="/login" replace />;
  }

  return children;
}
