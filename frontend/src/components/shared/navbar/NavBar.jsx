import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const NavBar = ({ nav_links, toggle_sidebar }) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 shadow dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className=" h-12 flex flex-wrap justify-between items-center mx-aut ">
        <a href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
            <span className="text-primary">Lancer</span>
            <span>Free</span>
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="flex space-x-4 items-center ">
            {nav_links.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => {
                    return `font-semibold capitalize hover:text-primary ${
                      isActive ? "text-primary" : "text-black"
                    }`;
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <button
              onClick={toggle_sidebar}
              className="text-xl hover:text-primary px-2 py-1"
            >
              <HiMenu />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
