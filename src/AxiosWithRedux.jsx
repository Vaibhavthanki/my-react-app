// import axios from "axios";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getUserData,
//   handleUserDataError,
//   setUserData,
// } from "./redux/action/userAction";
// import { getUserDataFromAPI } from "./redux/asyncAction/userAsyncAction";
import { deleteUserData, getUserData } from "./redux/action/userAction";
import { DataGrid } from "@mui/x-data-grid";

export const AxiosWithRedux = () => {
  const { isLoading, error, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUserDetails = useCallback(async () => {
    // dispatch(getUserDataFromAPI());
    dispatch(getUserData());

    // dispatch(getUserData());
    // await axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     console.log(res.data, "check18");
    //     dispatch(setUserData(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(handleUserDataError(err));
    //   });
  }, [dispatch]);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  console.log({
    isLoading,
    error,
    users,
  });

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
                dispatch(deleteUserData(params.row.id));
              }}
              className="btn btn-primary"
            >
              Delete
            </button>
          );
        },
      },
    ];
  }, [dispatch]);

  return (
    <DataGrid
      rows={users}
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
