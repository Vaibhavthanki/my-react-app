import {
  DELETE_USER_DATA,
  DELETE_USER_DATA_SUCCESS,
  GET_USER_DATA,
  HANDLE_USER_DATA_ERROR,
  SET_USER_DATA,
} from "../../utils/constant";

export const getUserData = () => ({
  type: GET_USER_DATA,
});

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload, // payload: payload
});

export const handleUserDataError = (payload) => ({
  type: HANDLE_USER_DATA_ERROR,
  payload,
});

export const deleteUserData = (payload) => ({
  type: DELETE_USER_DATA,
  payload,
});

export const deleteUserDataSuccess = (payload) => ({
  type: DELETE_USER_DATA_SUCCESS,
  payload,
});
