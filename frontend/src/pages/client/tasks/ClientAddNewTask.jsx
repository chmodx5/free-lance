import React, { useEffect, useState } from "react";
import {
  Card,
  FormInput,
  Button,
  CheckAuthStatus,
  AutoComplete,
} from "../../../components/shared";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { TbFidgetSpinner } from "react-icons/tb";

const ClientAddNewTask = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <>
      <CheckAuthStatus />
      <Card>
        <Formik
          initialValues={{
            title: "",
            description: "",
            skills: selectedItems,
            skill: [],
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(100, "title cannot exceed 100 characters ")
              .min(5, "title must be more than 5 characters ")
              .required("title is required"),
            description: Yup.string()
              .max(1500, "description cannot exceed 1500 characters")
              .min(100, "description must be more than 100 characters ")
              .required("description is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {(formik) => (
            console.log(formik.values),
            (
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
                  label={
                    "Describe your task in detail and how you want it done"
                  }
                  placeholder="Description"
                  field_name="description"
                  as="textarea"
                  touched={formik.touched.description}
                  errors={formik.errors.description}
                  rows="4"
                />
                <Field
                  as="select"
                  name="skill"
                  multiple={true}
                  placeholder="something"
                >
                  {[
                    { id: 1, item: "HTML" },
                    { id: 2, item: "CSS" },
                    { id: 3, item: "PHP" },
                    { id: 4, item: "JavaScript" },
                    { id: 5, item: "React" },
                    { id: 6, item: "Laravel" },
                    { id: 7, item: "Vuejs" },
                    { id: 8, item: "Nextjs" },
                  ].map((item, index) => (
                    <option key={index} value={item.id} defaultChecked>
                      {" "}
                      {item.item}
                    </option>
                  ))}
                </Field>
                {/* <AutoComplete
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                field_name="skill"
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
              /> */}
                <Button type="submit">
                  <TbFidgetSpinner className={`inline-block animate-spin `} />

                  <span>Login</span>
                </Button>
              </Form>
            )
          )}
        </Formik>
      </Card>
    </>
  );
};

export default ClientAddNewTask;
