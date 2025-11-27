import React from "react";
import { NavLink, Outlet } from "react-router";
import Header from "../component/Admin/Header";
import Sidebar from "../component/Admin/Sidebar";

const Admin = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
