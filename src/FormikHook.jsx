import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

export default function FormikHook() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3).required("First Name is required"),
    lastName: Yup.string().min(3).required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    hobbies: Yup.array().min(1, "Select at least one hobby"),
    country: Yup.string().required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      hobbies: [],
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    // setFieldValue,
    setValues,
  } = formik;

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const togglePassword = () => setHidePassword(!hidePassword);
  const toggleConfirmPassword = () =>
    setHideConfirmPassword(!hideConfirmPassword);

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    const { hobbies } = values;
    if (checked) {
      setValues({
        ...values,
        hobbies: [...hobbies, value],
      });
      console.log(hobbies, "check", value);
      //   setFieldValue("hobbies", [...hobbies, value]);
    } else {
      console.log(hobbies, "checkboth", value);
      setValues({
        ...values,
        hobbies: hobbies.filter((hobby) => hobby !== value),
      });

      //   setFieldValue(
      //     "hobbies",
      //     hobbies.filter((hobby) => hobby !== value)
      //   );
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName ? (
          <div className="text-danger">{errors.firstName}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName ? (
          <div className="text-danger">{errors.lastName}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <div className="text-danger">{errors.email}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="position-relative">
          <input
            type={hidePassword ? "password" : "text"}
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div
            onClick={togglePassword}
            className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
          >
            {hidePassword ? <BiShow /> : <BiHide />}
          </div>
        </div>

        {touched.password && errors.password ? (
          <div className="text-danger">{errors.password}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <div className="position-relative">
          <input
            type={hideConfirmPassword ? "password" : "text"}
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          <div
            onClick={toggleConfirmPassword}
            className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
          >
            {hideConfirmPassword ? <BiShow /> : <BiHide />}
          </div>
        </div>
      </div>
      {errors.confirmPassword && touched.confirmPassword && (
        <div className="text-danger">{errors.confirmPassword}</div>
      )}
      <div className="mb-3">
        <label className="form-label">Hobbies</label>
        <div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="hobby1"
              name="hobbies"
              value="reading"
              onChange={handleHobbyChange}
              checked={values.hobbies.includes("reading")}
            />
            <label className="form-check-label" htmlFor="hobby1">
              Reading
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="hobby2"
              name="hobbies"
              value="coding"
              onChange={handleHobbyChange}
              checked={values.hobbies.includes("coding")}
            />
            <label className="form-check-label" htmlFor="hobby2">
              Coding
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="hobby3"
              name="hobbies"
              value="gaming"
              onChange={handleHobbyChange}
              checked={values.hobbies.includes("gaming")}
            />
            <label className="form-check-label" htmlFor="hobby3">
              Gaming
            </label>
          </div>
        </div>
      </div>
      {errors.hobbies && touched.hobbies ? (
        <div className="text-danger">{errors.hobbies}</div>
      ) : null}
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="form-select"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.country}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
        </select>
        {touched.country && errors.country ? (
          <div className="text-danger">{errors.country}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
