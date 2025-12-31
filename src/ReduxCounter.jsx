import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/action/counter";

export default function ReduxCounter() {
  const counter = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
