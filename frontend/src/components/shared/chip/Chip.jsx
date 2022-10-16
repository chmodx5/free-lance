import React from "react";

const Chip = ({ text }) => {
  return (
    <div className="inline-block border border-secondary rounded px-3 py-1 text-xs uppercase hover:cursor-pointer hover:text-white hover:bg-secondary">
      {text}
    </div>
  );
};

export default Chip;
