import React from "react";

const Card = ({ children }) => {
  return (
    <div className="shadow hover:shadow-md rounded bg-gray-200 p-2">
      {children}
    </div>
  );
};

export default Card;
