import React, { Children } from "react";
import { Link } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

const NavLink = ({ children, to, text }) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      className={
        (({ isActive }) => (isActive ? "text-primary-main" : "text-black"),
        " no-underline px-2 capitalize  font-semibold hover:text-primary-main")
      }
    >
      {text}
    </Link>
  );
};

export default NavLink;
