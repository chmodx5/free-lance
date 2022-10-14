import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const TabsSubLayout = ({ tabs }) => {
  return (
    <div className="mt-2 space-y-4">
      <Card>
        <nav>
          <ul className="space-x-2 flex"></ul>
        </nav>
      </Card>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TabsSubLayout;
