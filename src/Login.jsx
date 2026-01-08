import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./config/axiosInstance";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Alert,
  CircularProgress,
} from "@mui/material";

// Validation Schema
const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = React.useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    setApiError("");
    try {
      const response = await axiosInstance.post("/accounts/authenticate", {
        email: values.email,
        password: values.password,
      });

      // Store JWT token in cookies
      if (response.data.jwtToken) {
        Cookies.set("access_token", response.data.jwtToken, { expires: 7 });

        // Add a small delay to ensure tokens are set before navigation
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 100);
      } else {
        setApiError("No token received from server");
        setSubmitting(false);
      }
    } catch (error) {
      setApiError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          Login
        </Typography>

        {apiError && (
          <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
            {apiError}
          </Alert>
        )}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form style={{ width: "100%" }}>
              <Field
                as={TextField}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <Field
                as={TextField}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Logging in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
