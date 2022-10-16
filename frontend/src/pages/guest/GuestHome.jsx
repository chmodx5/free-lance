import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthStatus } from "../../features/auth/authSlice";
import { CheckAuthStatus } from "../../components/shared";

const GuestHome = () => {
  const status = useSelector((state) => state.auth.is_authenticated);
  const dispatch = useDispatch();

  return (
    <>
      <CheckAuthStatus />;
      <div>
        GuestHome
        <br /> status
        <h1 className="text-5xl">{status.toString()}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(setAuthStatus())}
        >
          set auth
        </button>
      </div>
    </>
  );
};

export default GuestHome;
