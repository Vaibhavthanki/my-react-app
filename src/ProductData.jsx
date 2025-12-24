import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductData = () => {
  const [products, setProducts] = useState([]);
  const initalFetch = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (initalFetch.current) {
      initalFetch.current = false;
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res.data, "check14");
          setProducts(res.data);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    }
  }, []);

  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "title",
        headerName: "Title",
        width: 250,
      },
      {
        field: "price",
        headerName: "Price",
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
                navigate(`/productDesc/${params.row.id}`);
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
    <DataGrid
      rows={products}
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
};
