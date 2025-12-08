import React, { useState } from "react";
import FormDialog from "./FormDialog";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import TableData from "./tableData";

export default function Crud() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
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

  const { handleSubmit, values, isValid, resetForm, setValues } = formik;

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
    if (!isValid) {
      return;
    } else {
      if (isEdit) {
        console.log(data, "check46", values);
        const updatedData = data?.map((item) =>
          item.id === values.id ? values : item
        );
        setData(updatedData);
        setIsEdit(false);
      } else {
        setData([...data, { ...values, id: data.length + 1 }]);
      }
    }

    handleClose();
  };

  const handleEdit = (values) => {
    setIsEdit(true);
    setOpen(true);
    setValues(values);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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
        isEdit={isEdit}
      />
      <TableData
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}
