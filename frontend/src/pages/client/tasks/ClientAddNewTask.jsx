import React, { useEffect, useState } from "react";
import {
  Card,
  FormInput,
  Button,
  CheckAuthStatus,
  AutoComplete,
} from "../../../components/shared";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TbFidgetSpinner } from "react-icons/tb";

const ClientAddNewTask = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <>
      <CheckAuthStatus />
      <Card>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(15, "username must be at least 15 characters ")
              .min(3, "username must be more than 3 characters ")
              .required("username is required"),
            password: Yup.string()
              .max(30, "Password must be at least 15 characters ")
              .min(8, "passowrd must be more than 8 characters ")
              .required("This field is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            login({
              title: values.title,
              description: values.description,
              skills: selectedItems,
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
            <Form className="px-2">
              <FormInput
                label={"Title (e.g. Make me a custom website)"}
                placeholder="Title"
                field_name="title"
                type="text"
                touched={formik.touched.title}
                errors={formik.errors.title}
              />
              <FormInput
                label={"Describe your task in detail and how you want it done"}
                placeholder="Description"
                field_name="description"
                as="textarea"
                touched={formik.touched.description}
                errors={formik.errors.description}
                rows="4"
              />
              <AutoComplete
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                options={[
                  { id: 1, item: "HTML" },
                  { id: 2, item: "CSS" },
                  { id: 3, item: "PHP" },
                  { id: 4, item: "JavaScript" },
                  { id: 5, item: "React" },
                  { id: 6, item: "Laravel" },
                  { id: 7, item: "Vuejs" },
                  { id: 8, item: "Nextjs" },
                ]}
              />

              <Button type="submit">
                <TbFidgetSpinner className={`inline-block animate-spin `} />

                <span>Login</span>
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default ClientAddNewTask;
