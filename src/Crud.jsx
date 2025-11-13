import React, { useState } from "react";
import FormDialog from "./FormDialog";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import TableData from "./tableData";

export default function Crud() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
  });

  const { handleSubmit, values, isValid } = formik;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
    if (!isValid) {
      return;
    } else {
      setData([...data, values]);
    }

    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <FormDialog
        open={open}
        onClose={handleClose}
        onSubmit={handleFormSubmit}
        formik={formik}
      />
      <TableData data={data} />
    </>
  );
}
