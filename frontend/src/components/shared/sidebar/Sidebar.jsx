import React from "react";
import { Menu } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar_links }) => {
  return (
    <div className="fixed  w-64 h-screen px-2 py-4">
      <ul className="space-y-2">
        {sidebar_links.map((item, index) => (
          <li key={index}>
            {item.items ? (
              <>
                <Menu>
                  <Menu.Button
                    className={`capitalize bg-gray-300 hover:text-white  hover:bg-primary  text-left px-2 py-1 rounded   w-full flex items-center justify-between`}
                  >
                    <span>{item.title}</span>
                    <HiChevronDown />
                  </Menu.Button>
                  <Menu.Items className={"mt-2 ml-4 space-y-1"}>
                    {item.items.map((sub_item, index) => (
                      <Menu.Item key={index}>
                        <NavLink
                          end
                          to={sub_item.link}
                          className={({ isActive }) => {
                            return `capitalize hover:bg-primary hover:text-white  text-left px-2 py-1 rounded   w-full flex items-center justify-between ${
                              isActive ? "bg-primary text-white" : "bg-gray-300"
                            }`;
                          }}
                        >
                          {sub_item.title}
                        </NavLink>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              </>
            ) : (
              <>
                <NavLink
                  end
                  to={item.link}
                  className={({ isActive }) => {
                    return `capitalize  hover:bg-primary hover:text-white  text-left px-2 py-1 rounded   w-full flex items-center justify-between ${
                      isActive ? "bg-primary text-white" : "bg-gray-300"
                    }`;
                  }}
                >
                  {item.title}
                </NavLink>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
