import React, { useEffect } from "react";
import {
  Card,
  FormInput,
  Button,
  CheckAuthStatus,
} from "../../components/shared";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../services/apiSlice";
import { TbFidgetSpinner } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsUserLoggedIn,
  setAuthToken,
  setUser,
} from "./../../features/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [login, response] = useLoginMutation();
  const dispatch = useDispatch();

  return (
    <>
      <CheckAuthStatus />
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-96">
          <Card className="py-10 flex flex-col  text-center justify-center">
            <h1 className="text-2xl font-bold mb-3">Login</h1>

            <Link
              to="/"
              className="inline-flex items-center justify-center text-center  mb-6"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-2 h-6 sm:h-6"
                alt="Logo"
              />
              <span className=" text-xl font-bold whitespace-nowrap dark:text-white">
                <span className="text-primary-main">Lancer</span>
                <span>Free</span>
              </span>
            </Link>

            {response.isError && (
              <div className="bg-error mx-10 rounded text-white px-4 py-1">
                {response.error.data.message}
              </div>
            )}
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .max(15, "username must be at least 15 characters ")
                  .min(3, "username must be more than 3 characters ")
                  .required("username is required"),
                password: Yup.string()
                  .max(15, "Password must be at least 15 characters ")
                  .min(8, "passowrd must be more than 8 characters ")
                  .required("This field is required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                login({
                  username: values.username,
                  password: values.password,
                  account_type: "client",
                })
                  .unwrap()
                  .then((res) => {
                    dispatch(setIsUserLoggedIn(true));
                    dispatch(setAuthToken(res.user.token));
                    dispatch(setUser(res.user));
                    localStorage.setItem("auth-token", res.user.token);
                    localStorage.setItem("user", res.user);
                    navigate("/client");
                  })
                  .then((error) => {
                    console.log(error);
                  });
              }}
            >
              {(formik) => (
                <Form className="px-10">
                  <FormInput
                    placeholder="username"
                    field_name="username"
                    type="text"
                    touched={formik.touched.username}
                    errors={formik.errors.username}
                    all_errors={formik.errors}
                  />
                  <FormInput
                    placeholder="password"
                    field_name="password"
                    type="password"
                    touched={formik.touched.password}
                    errors={formik.errors.password}
                  />

                  <Button type="submit">
                    {response.isLoading ? (
                      <TbFidgetSpinner
                        className={`inline-block animate-spin `}
                      />
                    ) : (
                      <span>Login</span>
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
          ;
        </div>
      </div>
    </>
  );

  // console.log(response.isError && response.error.data);
};

export default Login;
