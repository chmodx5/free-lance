import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant,
  color,
  icon,
  active,
  as,
  to,
  ...props
}) => {
  if (as == "button" || as == "" || as == null || as == undefined) {
    return (
      <button
        className={`
      ${
        variant == "contained"
          ? `${
              color == "primary"
                ? `bg-primary-main hover:bg-primary-dark ${
                    active ? "bg-primary-dark" : null
                  } text-primary-text`
                : color == "secondary "
                ? `bg-secondary-main hover:bg-secondary-dark ${
                    active ? "bg-secondary-dark" : null
                  } text-primary-text`
                : color == "success"
                ? `bg-success-main hover:bg-success-dark ${
                    active ? "bg-success-dark" : null
                  } text-primary-text`
                : color == "error"
                ? `bg-error-main hover:bg-error-dark ${
                    active ? "bg-error-dark" : null
                  } text-primary-text`
                : color == "info"
                ? `bg-info-main hover:bg-info-dark ${
                    active ? "bg-info-dark" : null
                  } text-primary-text`
                : `bg-primary-main hover:bg-primary-dark ${
                    active ? "bg-primary-dark" : null
                  } text-primary-text`
            } `
          : variant == "outlined"
          ? `${
              color == "primary"
                ? `border-primary-main  hover:bg-primary-main ${
                    active
                      ? "bg-primary-dark text-primary-text"
                      : "text-primary-main"
                  } hover:text-primary-text`
                : color == "secondary"
                ? `border-secondary-main  hover:bg-secondary-main ${
                    active
                      ? "bg-secondary-dark text-secondary-text"
                      : "text-secondary-main"
                  } hover:text-secondary-text`
                : color == "success"
                ? `border-success-main  hover:bg-success-main ${
                    active
                      ? "bg-success-dark text-success-text"
                      : "text-success-main"
                  } hover:text-success-text`
                : color == "error"
                ? `border-error-main text-error-main hover:bg-error-main ${
                    active ? "bg-error-dark text-error-text" : "text-error-main"
                  } hover:text-error-text`
                : color == "info"
                ? `border-info-main  hover:bg-info-main ${
                    active ? "bg-info-dark text-info-text" : "text-info-main"
                  } hover:text-info-text`
                : `border-primary-main  hover:bg-primary-main ${
                    active
                      ? "bg-primary-dark text-primary-text"
                      : "text-primary-main"
                  } hover:text-primary-text ${
                    active ? "text-primary-text" : ""
                  }`
            } border-2 `
          : variant == "text"
          ? `${
              color == "primary"
                ? " text-primary-main "
                : color == "secondary"
                ? " text-secondary-main "
                : color == "success"
                ? " text-success-main "
                : color == "error"
                ? " text-error-main "
                : color == "info"
                ? " text-info-main "
                : " text-primary-main "
            } border-2 text-primary-main hover:font-semibold `
          : `bg-primary-main `
      }  rounded px-3 py-1  inline-flex ${
          icon ? "space-x-3" : " "
        } items-center capitalize  
      
      `}
        {...props}
      >
        <span>{children}</span>
        <span>{icon && icon}</span>
      </button>
    );
  }
  if (as == "link") {
    return (
      <>
        <Link
          to={to}
          className={`
      ${
        variant == "contained"
          ? `${
              color == "primary"
                ? `bg-primary-main hover:bg-primary-dark ${
                    active ? "bg-primary-dark" : null
                  } text-primary-text`
                : color == "secondary "
                ? `bg-secondary-main hover:bg-secondary-dark ${
                    active ? "bg-secondary-dark" : null
                  } text-primary-text`
                : color == "success"
                ? `bg-success-main hover:bg-success-dark ${
                    active ? "bg-success-dark" : null
                  } text-primary-text`
                : color == "error"
                ? `bg-error-main hover:bg-error-dark ${
                    active ? "bg-error-dark" : null
                  } text-primary-text`
                : color == "info"
                ? `bg-info-main hover:bg-info-dark ${
                    active ? "bg-info-dark" : null
                  } text-primary-text`
                : `bg-primary-main hover:bg-primary-dark ${
                    active ? "bg-primary-dark" : null
                  } text-primary-text`
            } `
          : variant == "outlined"
          ? `${
              color == "primary"
                ? `border-primary-main  hover:bg-primary-main ${
                    active
                      ? "bg-primary-dark text-primary-text"
                      : "text-primary-main"
                  } hover:text-primary-text`
                : color == "secondary"
                ? `border-secondary-main  hover:bg-secondary-main ${
                    active
                      ? "bg-secondary-dark text-secondary-text"
                      : "text-secondary-main"
                  } hover:text-secondary-text`
                : color == "success"
                ? `border-success-main  hover:bg-success-main ${
                    active
                      ? "bg-success-dark text-success-text"
                      : "text-success-main"
                  } hover:text-success-text`
                : color == "error"
                ? `border-error-main text-error-main hover:bg-error-main ${
                    active ? "bg-error-dark text-error-text" : "text-error-main"
                  } hover:text-error-text`
                : color == "info"
                ? `border-info-main  hover:bg-info-main ${
                    active ? "bg-info-dark text-info-text" : "text-info-main"
                  } hover:text-info-text`
                : `border-primary-main  hover:bg-primary-main ${
                    active
                      ? "bg-primary-dark text-primary-text"
                      : "text-primary-main"
                  } hover:text-primary-text ${
                    active ? "text-primary-text" : ""
                  }`
            } border-2 `
          : variant == "text"
          ? `${
              color == "primary"
                ? " text-primary-main "
                : color == "secondary"
                ? " text-secondary-main "
                : color == "success"
                ? " text-success-main "
                : color == "error"
                ? " text-error-main "
                : color == "info"
                ? " text-info-main "
                : " text-primary-main "
            } border-2 text-primary-main hover:font-semibold `
          : `bg-primary-main `
      }  rounded px-3 py-1  inline-flex ${
            icon ? "space-x-3" : " "
          } items-center capitalize  
      
      `}
          {...props}
        >
          <span>{children}</span>
          <span>{icon && icon}</span>
        </Link>
      </>
    );
  }
};

export default Button;
