import React from "react";
import {
  Card,
  FormInput,
  Button,
  CheckAuthStatus,
} from "../../components/shared";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  return (
    <>
      <CheckAuthStatus />s
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-96">
          <Card className="py-10 flex flex-col  text-center justify-center">
            <h1 className="text-2xl font-bold mb-3">Register</h1>
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
                <span className="text-primary">Lancer</span>
                <span>Free</span>
              </span>
            </Link>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .max(15, "username must be at least 15 characters ")
                  .min(3, "username must be more than 3 characters ")
                  .required("username is required"),
                password: Yup.string()
                  .max(15, "Password must be at least 15 characters ")
                  .min(8, "passowrd must be more than 8 characters ")
                  .required("This field is required"),
                confirm_password: Yup.string()
                  .max(15, "Password must be at least 15 characters ")
                  .min(8, "passowrd must be more than 8 characters ")
                  .required("This field is required")
                  .oneOf([Yup.ref("password"), null], "Passwords must match"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <Form className="px-10">
                  <FormInput
                    placeholder="first name"
                    field_name="first_name"
                    type="text"
                    touched={formik.touched.first_name}
                    errors={formik.errors.first_name}
                  />
                  <FormInput
                    placeholder="last name"
                    field_name="last_name"
                    type="text"
                    touched={formik.touched.last_name}
                    errors={formik.errors.last_name}
                  />
                  <FormInput
                    placeholder="username"
                    field_name="username"
                    type="text"
                    touched={formik.touched.username}
                    errors={formik.errors.username}
                  />
                  <FormInput
                    placeholder="email"
                    field_name="email"
                    type="email"
                    touched={formik.touched.email}
                    errors={formik.errors.email}
                  />
                  <FormInput
                    placeholder="password"
                    field_name="password"
                    type="password"
                    touched={formik.touched.password}
                    errors={formik.errors.password}
                  />
                  <FormInput
                    placeholder="confirm password"
                    field_name="confirm_password"
                    type="password"
                    touched={formik.touched.confirm_password}
                    errors={formik.errors.confirm_password}
                  />

                  <Button type="submit">Register</Button>
                </Form>
              )}
            </Formik>
          </Card>
          ;
        </div>
      </div>
    </>
  );
};

export default Register;
