import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

export default function FormikWithValidation() {
  const signupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short!")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(3, "Too Short!")
      .required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    toggle: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
    hobbies: Yup.array().min(1, "Select at least one hobby"),
  });
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h1 className="mb-0 h4">Formik Basic Form</h1>
              </div>
              <div className="card-body">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    toggle: false,
                    hobbies: [],
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                  validationSchema={signupSchema}
                >
                  {({ values, errors, touched }) => {
                    console.log("Errors:", errors, touched);
                    return (
                      <Form>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <Field
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={values.firstName}
                            className={`form-control ${
                              errors.firstName && touched.firstName
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className="invalid-feedback">
                              {errors.firstName}
                            </div>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <Field
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={values.lastName}
                            className={`form-control ${
                              errors.lastName && touched.lastName
                                ? "is-invalid"
                                : ""
                            }`}
                            disabled={values.firstName.length < 3}
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className="invalid-feedback">
                              {errors.lastName}
                            </div>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={values.email}
                            className={`form-control ${
                              errors.email && touched.email ? "is-invalid" : ""
                            }`}
                          />
                          {errors.email && touched.email ? (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <label
                            className={`form-check-label`}
                            htmlFor="toggle"
                          >
                            Accept terms and conditions
                          </label>
                          <Field
                            type="checkbox"
                            name="toggle"
                            className={`form-check-input ms-2 ${
                              errors.toggle && touched.toggle
                                ? "is-invalid"
                                : ""
                            }`}
                            id="toggle"
                          />
                          {errors.toggle && touched.toggle ? (
                            <div className="invalid-feedback">
                              {console.log("Rendering toggle error")}
                              {errors.toggle}
                            </div>
                          ) : null}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Select your interests
                          </label>
                          <div role="group" aria-labelledby="checkbox-group">
                            <div className="form-check">
                              <label
                                className="form-check-label"
                                htmlFor="checked-one"
                              >
                                Technology
                              </label>

                              <Field
                                type="checkbox"
                                name="hobbies"
                                value="technology"
                                className={`form-check-input ${
                                  errors.hobbies && touched.hobbies
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="checked-one"
                              />
                            </div>
                            <div className="form-check">
                              <label
                                className="form-check-label"
                                htmlFor="checked-two"
                              >
                                Sports
                              </label>
                              <Field
                                type="checkbox"
                                name="hobbies"
                                value="sports"
                                className={`form-check-input ${
                                  errors.hobbies && touched.hobbies
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="checked-two"
                              />
                            </div>
                            <div className="form-check">
                              <label
                                className="form-check-label"
                                htmlFor="checked-three"
                              >
                                Music
                              </label>
                              <Field
                                type="checkbox"
                                name="hobbies"
                                value="music"
                                className={`form-check-input ${
                                  errors.hobbies && touched.hobbies
                                    ? "is-invalid"
                                    : ""
                                }`}
                                id="checked-three"
                              />
                              {errors.hobbies && touched.hobbies ? (
                                <div className="invalid-feedback">
                                  {console.log("Rendering hobbies error")}
                                  {errors.hobbies}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Submit Form
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
