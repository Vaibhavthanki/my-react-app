// import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getUserData,
//   handleUserDataError,
//   setUserData,
// } from "./redux/action/userAction";
import { getUserDataFromAPI } from "./redux/asyncAction/userAsyncAction";

export const AxiosWithRedux = () => {
  const { isLoading, error, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUserDetails = useCallback(async () => {
    dispatch(getUserDataFromAPI());

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

  return <></>;
};
