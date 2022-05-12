import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

// public route buat user yg login ga bisa login lagi
export default function PublicRoute() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
