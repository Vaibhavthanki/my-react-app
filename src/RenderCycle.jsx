import React, { useState } from "react";

export const RenderCycle = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  console.log("component rendered!");

  // Trigger phase
  // rendering happens
  // commit phase

  //   const increment = () => {
  //     console.log("Before updating counter:", counter); // 0
  //     setCounter(counter + 1);
  //     console.log("After updating counter:", counter); // 0

  //     console.log("Before updating counter:", counter); // 0
  //     setCounter(counter + 5);
  //     console.log("After updating counter:", counter); // 0

  //     console.log("Before updating counter:", counter); // 0
  //     setCounter(counter + 10);
  //     console.log("After updating counter:", counter); // 0
  //   };

  const incrementCorrectly = () => {
    console.log("Befor updating counter:", counter);
    setCounter((prevCounter) => {
      console.log("Updating from step 1:", prevCounter); // 0
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      console.log("Updating from step 2:", prevCounter); // 1
      return prevCounter + 5;
    });
    setCounter((prevCounter) => {
      console.log("Updating from step 3:", prevCounter); // 6
      return prevCounter + 10;
    });
    setIsActive(!isActive);
    setName("John Doe");
    console.log("After updating counter:", counter);
  };

  //   a   b c  d
  //   1   5 10 16
  //   v,s   h

  return (
    <div>
      <h2>Render Cycle Example</h2>
      <p>Name: {name}</p>
      <p>Is Active: {isActive.toString()}</p>
      <p>Counter: {counter}</p>
      <button onClick={incrementCorrectly}>Increment</button>
    </div>
  );
};
