import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className={
        "uppercase text-sm bg-primary text-white px-4 py-1 rounded hover:bg-primary/90"
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
