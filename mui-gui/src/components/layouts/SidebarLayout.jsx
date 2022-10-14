import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const SidebarLayout = ({ nav_links, sidebar_links }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="">
      <main>
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
