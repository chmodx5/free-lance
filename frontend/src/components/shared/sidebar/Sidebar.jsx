import React from "react";
import { Menu } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import Card from "../card/Card";

const Sidebar = ({ sidebar_links }) => {
  const current_route = useLocation();
  console.log(current_route.pathname.split("/")[2]);
  return (
    <Card>
      <ul className="space-y-2 ">
        {sidebar_links.map((item, index) => (
          <li key={index}>
            {item.items ? (
              <>
                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button
                        className={`capitalize hover:text-white  hover:bg-primary-main  text-left px-2 py-1 rounded   w-full flex items-center justify-between ${
                          current_route.pathname.split("/")[2] ==
                            item.link.split("/")[2] &&
                          "bg-primary-main text-white"
                        }`}
                      >
                        <span className=" bg">{item.title}</span>
                        <HiChevronDown
                          className={`${open ? "rotate-180" : "-rotate-90"}`}
                        />
                      </Menu.Button>
                      <Menu.Items className={"mt-2 ml-4 space-y-1"}>
                        {item.items.map((sub_item, index) => (
                          <Menu.Item key={index}>
                            <NavLink
                              end
                              to={sub_item.link}
                              className={({ isActive }) => {
                                return `capitalize hover:bg-primary-main hover:text-white  text-left px-2 py-1 rounded   w-full flex items-center justify-between ${
                                  isActive ? "bg-primary-main text-white" : ""
                                }`;
                              }}
                            >
                              {sub_item.title}
                            </NavLink>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              </>
            ) : (
              <>
                <NavLink
                  end
                  to={item.link}
                  className={({ isActive }) => {
                    return `capitalize  hover:bg-primary-main hover:text-white  text-left px-2 py-1 rounded   w-full flex items-center justify-between ${
                      isActive ? "bg-primary-main text-white" : ""
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
    </Card>
  );
};

export default Sidebar;
