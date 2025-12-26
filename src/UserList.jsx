import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data, "user list");
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user list:", err);
      });
  }, []);

  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "name",
        headerName: "Name",
        width: 250,
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
      },
      {
        field: "phone",
        headerName: "Phone",
        width: 250,
      },
      {
        field: "website",
        headerName: "Website",
        width: 250,
      },
      {
        field: "action",
        headerName: "Action",
        width: 250,
        renderCell: (params) => {
          return (
            <button
              onClick={() => {
                navigate(`/userDetails`, {
                  state: { userData: params.row },
                });
              }}
              className="btn btn-primary"
            >
              View More Details
            </button>
          );
        },
      },
    ];
  }, [navigate]);

  return (
    <div>
      {
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20, 25]}
        />
      }
    </div>
  );
};
