import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <SideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
