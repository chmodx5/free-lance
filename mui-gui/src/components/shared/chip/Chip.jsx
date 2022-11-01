import React from "react";

const Chip = ({ text, active, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center space-x-3 justify-between border border-primary-main rounded px-3 py-1 text-xs text-primary-main uppercase hover:cursor-pointer hover:text-white hover:bg-primary-main group ${
        active ? "bg-primary-main text-primary-text" : ""
      }`}
    >
      <span>{text}</span>
      {icon ? (
        <span
          className={` ${
            active
              ? "bg-white text-primary-main"
              : "bg-primary-main text-primary-text"
          } rounded-full h-4 w-4 flex items-center justify-center group-hover:bg-white group-hover:text-primary-main`}
        >
          {icon ? icon : null}
        </span>
      ) : null}
    </div>
  );
};

export default Chip;
