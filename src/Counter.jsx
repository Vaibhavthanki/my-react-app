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

  const handleChange = (event) => {
    console.log(event.target.value, "check3");
  };
  return (
    <div>
      <input
        type="number"
        className="form-control w-25 mx-auto my-3"
        placeholder="Enter number here"
        onChange={handleChange}
      />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      {counter}
    </div>
  );
}
