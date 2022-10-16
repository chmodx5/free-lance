import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckAuthStatus = ({ children }) => {
  const navigate = useNavigate();

  const loggedInUser = useSelector((state) => state.user.user);

  useEffect(() => {
    if (loggedInUser === null) {
      navigate("/login");
    } else {
      navigate("/client");
    }
  }, []);
};

export default CheckAuthStatus;
