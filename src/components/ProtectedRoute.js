import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Simple protected route wrapper. Checks localStorage for 'isLoggedIn' flag.
export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    // Redirect to login, preserve the location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
