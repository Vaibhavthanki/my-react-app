import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function TableData({ data, handleEdit, handleDelete }) {
  const columns = [
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
  ];

  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 15, 20, 25]}
    />
  );
}
