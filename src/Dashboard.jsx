import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./config/axiosInstance";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Container,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Dashboard = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetchAccounts();
  }, [paginationModel, navigate]);

  const fetchAccounts = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axiosInstance.get("/accounts/", {
        params: {
          page: paginationModel.page,
          pageSize: paginationModel.pageSize,
        },
      });

      // Map the data to rows with id field (required by DataGrid)
      const mappedRows = response.data.map((item, index) => ({
        id: item.id || index,
        ...item,
      }));

      setRows(mappedRows);
      setRowCount(response?.data?.total || response?.data?.data?.length);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch accounts");
      console.error("Error fetching accounts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("access_token");
    navigate("/login");
  };

  // Define columns for DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 200, flex: 1 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "role", headerName: "Role", width: 100 },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      valueFormatter: (value) => {
        if (value) {
          return new Date(value).toLocaleDateString();
        }
        return "";
      },
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">Dashboard - Accounts</Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            rowCount={rowCount}
            paginationMode="server"
            loading={loading}
            sx={{
              "& .MuiDataGrid-root": {
                border: "1px solid #ddd",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Dashboard;
