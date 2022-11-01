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
      <main className="pt-16 flex ">
        <div
          className={`hidden md:block ${sidebarOpen ? "" : " "} w-72 relative`}
        >
          {sidebarOpen && <Sidebar sidebar_links={sidebar_links} />}
        </div>
        <div className={`container mx-auto px-4  ${!sidebarOpen ? "" : ""}`}>
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
