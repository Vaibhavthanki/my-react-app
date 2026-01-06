import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  deleteUserDataSuccess,
  handleUserDataError,
  setUserData,
} from "../action/userAction";
import { DELETE_USER_DATA, GET_USER_DATA } from "../../utils/constant";

function* getUserDataFromAPI() {
  try {
    const response = yield call(axios.get, "https://fakestoreapi.com/products");
    console.log(response.data, "check9");
    yield put(setUserData(response.data));
  } catch (error) {
    console.error("Error fetching data:", error);
    yield put(handleUserDataError(error));
  }
}

function* deleteUserData(action) {
  try {
    const response = yield call(
      axios.delete,
      `https://fakestoreapi.com/products/${action.payload}`
    );
    console.log(response.data, "check9");
    yield put(deleteUserDataSuccess(action.payload));
  } catch (error) {
    console.error("Error fetching data:", error);
    yield put(handleUserDataError(error));
  }
}

export function* watchFetchUserData() {
  yield takeLatest(GET_USER_DATA, getUserDataFromAPI);
  yield takeLatest(DELETE_USER_DATA, deleteUserData);
}
