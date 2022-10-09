import React from "react";
import { Card } from "../../components/shared";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {
  const validate = (values) => {
    const errors = {};
    if (values.username === "") {
      errors.username = "Username field is required";
    } else if (values.password === "") {
      errors.password = "Password field is required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-96">
        <Card className="py-10">
          <Link to="/" className="flex items-center justify-center text-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className=" text-3xl font-bold whitespace-nowrap dark:text-white">
              <span className="text-primary">Lancer</span>
              <span>Free</span>
            </span>
          </Link>
          <form action="" onSubmit={formik.handleSubmit}>
            {formik.errors.username ? (
              <span>{formik.errors.username}</span>
            ) : null}
            <input
              type="text"
              id="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="username"
              className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.errors.password ? (
              <span>{formik.errors.password}</span>
            ) : null}
            <input
              type="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <button type="submit">login</button>
          </form>
        </Card>
        ;
      </div>
    </div>
  );
};

export default Login;
