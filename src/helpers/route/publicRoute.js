import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

// public route buat user yg login ga bisa login lagi
export default function PublicRoute() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // if (token && props.restricted) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return <Outlet />;
}
