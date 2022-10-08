import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ href, title }) => {
  const router = useLocation();

  return (
    <Link
      to={href}
      className={`${
        router.pathname === href && "text-primary "
      } font-bold capitalize hover:text-primary`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
