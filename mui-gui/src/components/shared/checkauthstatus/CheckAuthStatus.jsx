import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckAuthStatus = ({ children, current_location }) => {
  const navigate = useNavigate();

  const loggedInUser = useSelector((state) => state.user.user);

  useEffect(() => {
    if (loggedInUser === null) {
      navigate("/login");
    } else {
      navigate(current_location);
    }
  }, []);
};

export default CheckAuthStatus;
