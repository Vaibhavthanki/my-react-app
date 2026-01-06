import {
  DELETE_USER_DATA,
  DELETE_USER_DATA_SUCCESS,
  GET_USER_DATA,
  HANDLE_USER_DATA_ERROR,
  SET_USER_DATA,
} from "../../utils/constant";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_DATA:
      return { ...state, isLoading: true, error: null };

    case SET_USER_DATA:
      return { ...state, isLoading: false, users: payload, error: null };

    case HANDLE_USER_DATA_ERROR:
      return { ...state, isLoading: false, error: payload };

    case DELETE_USER_DATA:
      return { ...state, isLoading: true, error: null };
    case DELETE_USER_DATA_SUCCESS: {
      console.log("payload", payload);
      const users = state?.users?.filter((value) => value.id !== payload) || [];
      return { ...state, isLoading: false, error: null, users };
    }
    default:
      return state;
  }
};
