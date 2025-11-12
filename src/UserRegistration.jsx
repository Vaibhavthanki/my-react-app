import axios from "axios";
import React, { useState } from "react";

export default function UserRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeValidation = (value, name) => {
    let errorMessage = "";

    if (!value) {
      errorMessage = `${name} is required`;
    }
    return errorMessage;
  };

  const handleBlurValidation = (value, name) => {
    let errorMessage = "";

    switch (name) {
      case "username":
        if (value.length < 3) {
          errorMessage = "Username must be at least 3 characters long";
        }
        return errorMessage;

      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          errorMessage = "Email is invalid";
        }
        return errorMessage;

      case "password":
        if (value.length < 8 || value.length > 16) {
          errorMessage = "Password must be between 8 and 16 characters long";
        }
        return errorMessage;
    }
  };

  const handleAllValidation = (value, name) => {
    const errorMessage = handleChangeValidation(value, name);
    if (!errorMessage) {
      const blurErrorMessage = handleBlurValidation(value, name);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: blurErrorMessage,
      }));
      return blurErrorMessage ? false : true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
      return errorMessage ? false : true;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    const errorMessage = handleChangeValidation(value, name);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    handleAllValidation(value, name);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let isValid = true;
      const formKeys = Object.keys(formData);
      // ["username", "email", "password"]
      let i = 0;
      while (i < formKeys.length) {
        const key = formKeys[i];
        const errorMessage = handleAllValidation(formData[key], key);
        if (!errorMessage) {
          isValid = false;
          break;
        }
        i++;
      }
      console.log("check error", isValid);
      if (isValid) {
        console.log("formData", formData);
        // proceed with form submission
        // fetch("https://fakestoreapi.com/users", {
        //   "content-type": "application/json",
        //   method: "POST",
        //   body: JSON.stringify({
        //     ...formData,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((json) => console.log("response", json))
        //   .catch((error) => console.error("Error fetching products:", error));

        const response = await axios.post(
          "https://fakestoreapi.com/users",
          {
            ...formData,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">User Registration</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span style={{ color: "red" }}>{errors.username}</span>
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
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span style={{ color: "red" }}>{errors.email}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span style={{ color: "red" }}>{errors.password}</span>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="card-footer text-center">
              <small className="text-muted">
                Already have an account?{" "}
                <a href="#" className="text-primary">
                  Login here
                </a>
              </small>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
