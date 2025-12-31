import {
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
    default:
      return state;
  }
};
