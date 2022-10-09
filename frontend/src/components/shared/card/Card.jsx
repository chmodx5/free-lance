import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={[
        "shadow hover:shadow-md rounded bg-gray-200 p-2 " + className,
      ]}
    >
      {children}
    </div>
  );
};

export default Card;
