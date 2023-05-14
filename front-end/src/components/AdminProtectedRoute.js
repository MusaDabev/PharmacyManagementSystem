import React from "react";
import { useSelector } from "react-redux";
import NoAccess from "./NoAccess/NoAccess";

const AdminProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (user.roleName !== "ADMIN") {
    return <NoAccess />;
  }
  return children;
};

export default AdminProtectedRoute;