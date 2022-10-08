import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const NavBar = ({ nav_links, toggle_sidebar }) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1 shadow dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {nav_links.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => {
                    return `font-bold capitalize hover:text-primary ${
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
              className="text-xl hover:text-primary"
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
