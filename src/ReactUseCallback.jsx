import React, { useState, useCallback, memo, useEffect } from "react";

// ChildComponent is optimized with React.memo
const ChildComponent = memo(({ handleClick }) => {
  console.log("Child Component rendered"); // This will only log when props change
  return <button onClick={handleClick}>Click me</button>;
});

// ParentComponent
const ReactUseCallback = () => {
  // console.log("Parent Component rendered");
  // const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState("light");

  // //   // The 'increment' function is memoized using useCallback
  // const increment = useCallback(() => {
  //   setCount((c) => c + 1); // Using functional updates removes 'count' from dependencies
  // }, []); // Empty dependency array means the function is created once

  // // The 'toggleTheme' function is also memoized
  // const toggleTheme = useCallback(() => {
  //   setTheme((t) => (t === "light" ? "dark" : "light"));
  // }, []);

  // //   const increment = () => {
  // //     setCount((c) => c + 1); // Using functional updates removes 'count' from dependencies
  // //   };

  // //   const toggleTheme = () => {
  // //     setTheme((t) => (t === "light" ? "dark" : "light"));
  // //   };

  // return (
  //   <div>
  //     {/* ChildComponent receives a stable 'handleClick' prop */}
  //     <ChildComponent handleClick={increment} />
  //     <p>Count: {count}</p>
  //     <button onClick={toggleTheme}>Toggle Theme</button>
  //     <p>Current Theme: {theme}</p>
  //   </div>
  // );

  const [count, setCount] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);

  // Define the callback function using useCallback with a dependency on intervalTime
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [intervalTime]); // This callback depends on intervalTime

  // UseEffect that depends on incrementCount callback
  useEffect(() => {
    console.log("Effect is running because incrementCount changed");

    const timer = setInterval(() => {
      console.log("Timer is running", intervalTime);
      incrementCount(); // Calling the callback inside useEffect
    }, intervalTime);

    return () => clearInterval(timer);
  }, [incrementCount, intervalTime]); // Effect depends on incrementCount callback
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIntervalTime(500)}>
        Change Interval to 500ms
      </button>
    </div>
  );
};

export default ReactUseCallback;
