import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../shared";

const GuestLayout = () => {
  return (
    <div>
      <NavBar
        nav_links={[
          {
            title: "home",
            link: "/",
          },
          {
            title: "about",
            link: "/about",
          },
          {
            title: "contact ",
            link: "/contact",
          },
        ]}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestLayout;
