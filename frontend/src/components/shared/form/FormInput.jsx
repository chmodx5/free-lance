import React from "react";
import { Field, ErrorMessage } from "formik";

const FormInput = ({ placeholder, field_name, type, touched, errors }) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <label
          htmlFor={field_name}
          className={`text-sm font-semibold ${
            touched ? (errors ? "text-error" : "") : ""
          }`}
        >
          {touched ? (
            <span className="font-semibold text-error capitalize">
              <ErrorMessage
                className="font-semibold text-error "
                name={field_name}
              />
            </span>
          ) : null}
        </label>
      </div>
      <Field
        type={type}
        name={field_name}
        placeholder={placeholder}
        className={`block px-3 py-1 w-full text-gray-900 bg-white rounded border border-gray-300 sm:text-md   ${
          touched
            ? errors
              ? "outline outline-2 outline-error border-none"
              : ""
            : "border-gray-300 focus:border-secondary focus:outline focus:outline-2 focus:outline-secondary"
        }
               focus:border-none  `}
      />
    </div>
  );
};

export default FormInput;
