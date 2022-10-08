import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Card } from "../shared";

const TabsSubLayout = ({ tabs }) => {
  return (
    <div className="mt-2 space-y-2">
      <Card>
        <nav>
          <ul className="space-x-2 flex">
            {tabs.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  end
                  className={({ isActive }) => {
                    return `px-3 py-1 capitalize hover:bg-primary hover:text-white rounded 
               , ${isActive ? "bg-primary text-white" : ""} `;
                  }}
                >
                  {item.tab}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Card>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TabsSubLayout;
