import React from "react";
import { Navigate } from "react-router-dom";

const ProctededRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Check if user is logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Check role-based access
  if (role && user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/"} replace />;
  }

  return children;
};

export default ProctededRoute;