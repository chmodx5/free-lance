import React from "react";
import { Field, ErrorMessage } from "formik";

const FormInput = ({
  placeholder,
  field_name,
  type,
  touched,
  errors,
  as,
  label,
  onChange,
  ...props
}) => {
  return (
    <div className="mb-2">
      <div className="mb-1">
        <label
          htmlFor={field_name}
          className={`text-sm font-semibold ${
            touched ? (errors ? "" : "") : ""
          }`}
        >
          <label htmlFor="">{label}</label>

          {touched ? (
            <div className="font-semibold text-error capitalize text-error-main">
              <ErrorMessage className=" text-error-main " name={field_name} />
            </div>
          ) : null}
        </label>
      </div>
      <Field
        type={type}
        name={field_name}
        as={as}
        // onChange={onChange}
        placeholder={placeholder}
        className={`block px-3 py-1 w-full text-gray-900 bg-white rounded border border-gray-300 sm:text-md   ${
          touched
            ? errors
              ? "outline outline-2 outline-error border-none"
              : ""
            : "border-gray-300 focus:border-secondary focus:outline focus:outline-2 focus:outline-secondary"
        }
               focus:border-none  `}
        {...props}
      />
    </div>
  );
};

export default FormInput;
