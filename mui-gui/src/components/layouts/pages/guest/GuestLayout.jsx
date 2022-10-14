import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
