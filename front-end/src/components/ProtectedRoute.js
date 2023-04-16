import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/isAuthenticated";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  console.log(user)
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
