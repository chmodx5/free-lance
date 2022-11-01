import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Card } from "../shared";

const TabsSubLayout = ({ tabs }) => {
  return (
    <div className=" space-y-4">
      <Card>
        <nav>
          <ul className="space-x-2 flex">
            {tabs.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  end
                  className={({ isActive }) => {
                    return `px-3 py-1 capitalize hover:bg-primary-main hover:text-white rounded 
               , ${isActive ? "bg-primary-main text-white" : ""} `;
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
