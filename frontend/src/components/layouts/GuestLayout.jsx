import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer, CheckAuthStatus } from "../shared";

const GuestLayout = () => {
  return (
    <>
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
        <div className="mt-14">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GuestLayout;
