import React, { useState } from "react";

export default function Counter() {
  //   let counter = 0;

  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter, "check1");
  };

  const decrement = () => {
    setCounter(counter - 1);
    console.log(counter, "check2");
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      {counter}
    </div>
  );
}
