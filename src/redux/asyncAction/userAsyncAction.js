import axios from "axios";
import {
  getUserData,
  handleUserDataError,
  setUserData,
} from "../action/userAction";

export function getUserDataFromAPI() {
  return async (dispatch) => {
    console.log("check1");
    dispatch(getUserData());
    console.log("check2");
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data, "check3");
        dispatch(setUserData(res.data));
      })
      .catch((err) => {
        dispatch(handleUserDataError(err));
      });
  };
}
