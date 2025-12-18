import React, { useCallback, useReducer } from "react";

export const Reducer = () => {
  const handleReducer = (state, action) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return { ...state, currentUser: action.payload };
      case "Add_USER":
        return {
          ...state,
          users: [...state.users, action.payload],
          currentUser: { firstName: "", lastName: "", email: "" },
        };
      case "REMOVE_USER":
        return {
          ...state,
          users: state.users.filter((_, index) => index !== action.payload),
        };
      case "EDIT_USER":
        return {
          ...state,
          currentUser: action.payload.userData,
          editIndex: action.payload.index,
        };
      case "UPDATE_USER": {
        const updatedUsers = state.users.map((user, index) =>
          index === state.editIndex ? action.payload : user
        );
        return {
          ...state,
          users: updatedUsers,
          currentUser: { firstName: "", lastName: "", email: "" },
          editIndex: null,
        };
      }
      default:
        return state;
    }
  };
  const [data, setData] = useReducer(handleReducer, {
    users: [],
    currentUser: { firstName: "", lastName: "", email: "" },
    editIndex: null,
  });
  const setUserData = useCallback(
    (key, value) => {
      setData({
        type: "SET_CURRENT_USER",
        payload: { ...data.currentUser, [key]: value },
      });
    },
    [data.currentUser]
  );

  const { currentUser, editIndex } = data;
  const { firstName, lastName, email } = currentUser;

  const handleSubmit = () => {
    setData({
      type: editIndex !== null ? "UPDATE_USER" : "Add_USER",
      payload: data.currentUser,
    });
  };
  const handleRemove = (index) => {
    setData({
      type: "REMOVE_USER",
      payload: index,
    });
  };
  const handleEdit = (userData, index) => {
    setData({
      type: "EDIT_USER",
      payload: { userData, index },
    });
  };
  return (
    <div>
      <h1>Reducer Example</h1>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setUserData("firstName", e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setUserData("lastName", e.target.value);
        }}
        value={lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setUserData("email", e.target.value);
        }}
        value={email}
      />
      <input type="button" value="Submit" onClick={handleSubmit} />

      <h2>Users List</h2>
      <ul>
        {data.users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => handleEdit(user, index)}>Edit</button>
            <button
              onClick={() => {
                handleRemove(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
