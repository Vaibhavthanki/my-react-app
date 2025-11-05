import { Field, Form, Formik } from "formik";
import React from "react";

export default function FormikBasicForm() {
  return (
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
                  checked: [],
                  picked: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ values }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <Field
                        id="firstName"
                        name="firstName"
                        placeholder="Jane"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <Field
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="jane.doe@example.com"
                        className="form-control"
                        type="email"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="toggle"
                          className="form-check-input"
                          id="toggle"
                        />
                        <label className="form-check-label" htmlFor="toggle">
                          Subscribe to newsletter
                        </label>
                      </div>
                      <small className="form-text text-muted">
                        Current value: {`${values.toggle}`}
                      </small>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Select your interests
                      </label>
                      <div role="group" aria-labelledby="checkbox-group">
                        <div className="form-check">
                          <Field
                            type="checkbox"
                            name="checked"
                            value="One"
                            className="form-check-input"
                            id="checked-one"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checked-one"
                          >
                            Technology
                          </label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="checkbox"
                            name="checked"
                            value="Two"
                            className="form-check-input"
                            id="checked-two"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checked-two"
                          >
                            Sports
                          </label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="checkbox"
                            name="checked"
                            value="Three"
                            className="form-check-input"
                            id="checked-three"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checked-three"
                          >
                            Music
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Choose your preferred contact method
                      </label>
                      <div role="group" aria-labelledby="my-radio-group">
                        <div className="form-check">
                          <Field
                            type="radio"
                            name="picked"
                            value="One"
                            className="form-check-input"
                            id="picked-one"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="picked-one"
                          >
                            Email
                          </label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="radio"
                            name="picked"
                            value="Two"
                            className="form-check-input"
                            id="picked-two"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="picked-two"
                          >
                            Phone
                          </label>
                        </div>
                      </div>
                      <small className="form-text text-muted">
                        Selected: {values.picked || "None"}
                      </small>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
