import React from "react";

const Button = ({ children, variant, color, ...props }) => {
  const buttonClasses = () => {
    let selectedColor =
      color == "" || color == null || color == undefined ? "primary" : color;
    if (variant == "contained") {
      return `bg-${selectedColor} border border-2 border-${selectedColor} text-${selectedColor}-text hover:bg-${selectedColor} hover:text-${selectedColor}-text `;
    } else if (variant == "outline")
      return `bg-none border border-2 border-${selectedColor} text-${selectedColor} hover:bg-${selectedColor} hover:text-${selectedColor}-text `;
  };
  const defaultButtonClasses =
    "px-3 py-1 rounded flex items-center space-x-3 capitalize";
  return (
    <button className={defaultButtonClasses + " " + buttonClasses()} {...props}>
      {children}
    </button>
  );
};

export default Button;
