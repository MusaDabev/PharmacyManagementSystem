import React from "react";
import { useSelector } from "react-redux";
import NoAccess from "./NoAccess/NoAccess";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!Object.keys(user).length > 0) {
    return <Navigate to="/login" replace />
  }
  if (user.roleName !== "ADMIN") {
    return <NoAccess />;
  }
  return children;
};

export default AdminProtectedRoute;