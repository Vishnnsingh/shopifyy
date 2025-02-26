import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Style from "../Layout/Layout.module.css";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation(); // Get current route

  return (
    <div>
      {/* Hide Header on Register Page */}
      {location.pathname !== "/register" && <Header />} 
      <Outlet />
    </div>
  );
};

export default Layout;
