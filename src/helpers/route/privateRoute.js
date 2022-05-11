import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

// private route buat pemisah admin dan user
export default function PrivateRoute() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  let dataUser = localStorage.getItem("dataUser");
  dataUser = JSON.parse(dataUser);

  if (!token) {
    console.log(location);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (props.isAdmin && dataUser?.role !== "admin") {
  //   // ture | true
  //   return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  // }
  return <Outlet />;
}
