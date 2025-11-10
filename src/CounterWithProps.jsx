import React from "react";

export default function CounterWithProps({
  counter,
  handleDecrement,
  handleIncrement,
}) {
  return (
    <>
      <div>CounterWithProps</div>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}
