import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location, "checklocation");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isActive: false,
    hobbies: [],
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    isActive: "",
    hobbies: "",
  });

  const validateForm = (value, name) => {
    console.log(value, name, "validateform");
    let errorMessage = "";

    switch (name) {
      case "username":
        if (!value) {
          errorMessage = "Username is required";
        }
        return errorMessage;

      case "email":
        if (!value) {
          errorMessage = "Email is required";
        }
        return errorMessage;

      case "password":
        if (!value) {
          errorMessage = "Password is required";
        }
        return errorMessage;

      case "isActive":
        if (!value) {
          errorMessage = "You must accept the terms and conditions";
        }
        return errorMessage;

      case "hobbies":
        if (value.length === 0) {
          errorMessage = "Please select at least one hobby";
        }
        return errorMessage;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData)?.forEach((key) => {
      console.log(formData, key, "checkboth47", formData[key]);
      const errorMessage = validateForm(formData[key], key);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: errorMessage,
      }));
    });
    navigate("/home");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const hobbies = [...formData.hobbies];
    if (type === "checkbox" && name === "hobbies" && checked) {
      hobbies.push(value);
    } else if (type === "checkbox" && name === "hobbies" && !checked) {
      hobbies.splice(hobbies.indexOf(value), 1);
    }

    setFormData({
      ...formData,
      [name]:
        name === "hobbies" ? hobbies : type === "checkbox" ? checked : value,
    });

    const errorMessage = validateForm(value, name);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };
  console.log(formData, "check72");
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateForm(value, name);
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };
  console.log(errors, "checkerrors");
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span style={{ color: "red" }}>{errors.username}</span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span style={{ color: "red" }}>{errors.email}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span style={{ color: "red" }}>{errors.password}</span>
        </div>
        <div>
          <label htmlFor="isActive">Accept Terms and conditions</label>
          <input
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{errors.isActive}</span>
        </div>
        <div>
          <label>Hobbies</label>
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            onChange={handleChange}
          />{" "}
          Reading
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            onChange={handleChange}
          />{" "}
          Traveling
          <input
            type="checkbox"
            name="hobbies"
            value="gaming"
            onChange={handleChange}
          />{" "}
          Gaming
          <span style={{ color: "red" }}>{errors.hobbies}</span>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
