import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer, Sidebar } from "../shared";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Toolbar, AppBar, Slide } from "@mui/material";

const SidebarLayout = ({ nav_links, sidebar_links }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const trigger = useScrollTrigger();
  console.log(trigger);

  return (
    <div className="">
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <div>lkdjkf</div>
          </Toolbar>
        </AppBar>
      </Slide>

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
