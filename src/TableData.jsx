import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function TableData({ data, columns }) {
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
