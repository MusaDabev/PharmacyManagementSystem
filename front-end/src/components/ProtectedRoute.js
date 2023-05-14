import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!Object.keys(user).length > 0) {
    return <Navigate to="/login" replace />
  }
  return children;
};

export default ProtectedRoute;
