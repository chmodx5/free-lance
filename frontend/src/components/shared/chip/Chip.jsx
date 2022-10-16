import React from "react";

const Chip = ({ text }) => {
  return (
    <div className="inline-block border border-secondary-main rounded px-3 py-1 text-xs uppercase hover:cursor-pointer hover:text-white hover:bg-secondary-main">
      {text}
    </div>
  );
};

export default Chip;
