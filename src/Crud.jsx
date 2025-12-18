import React, { useCallback, useMemo, useState } from "react";
import FormDialog from "./FormDialog";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import TableData from "./tableData";

export default function Crud() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

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

  const handleClose = useCallback(() => {
    setOpen(false);
    resetForm();
  }, [resetForm]);

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

  const handleEdit = useCallback(
    (editData) => {
      setIsEdit(true);
      setOpen(true);
      setValues(editData);
    },
    [setValues]
  );

  const handleDelete = useCallback((id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const columns = useMemo(
    () => [
      {
        field: "firstName",
        headerName: "First Name",
        width: 250,
        editable: true,
      },
      {
        field: "lastName",
        headerName: "Last Name",
        width: 250,
        editable: true,
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
        editable: true,
      },
      {
        filed: "action",
        headerName: "Action",
        width: 250,
        renderCell: (params) => {
          return (
            <div>
              <button
                className="btn btn-primary mr-2"
                onClick={() => handleEdit(params.row)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [handleDelete, handleEdit]
  );

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
        columns={columns}
      />
    </>
  );
}
