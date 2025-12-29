import React from "react";

export const ErrorHandeling = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      {/* {isClicked &&
        c.map((value) => {
          return <div>{value}</div>;
        })} */}
    </>
  );
};
