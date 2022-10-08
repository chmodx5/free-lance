import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer, Sidebar } from "../shared";

const SidebarLayout = ({ nav_links, sidebar_links }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="">
      <NavBar
        toggle_sidebar={() => setSidebarOpen(!sidebarOpen)}
        nav_links={nav_links}
      />
      <main>
        <div className="flex  pt-14">
          <div className={`${sidebarOpen ? "w-64" : "hidden "}  h-screen`}>
            {sidebarOpen && <Sidebar sidebar_links={sidebar_links} />}
          </div>
          <div
            className={`flex-1 ${!sidebarOpen ? " container mx-auto" : "px-4"}`}
          >
            <div className="">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
