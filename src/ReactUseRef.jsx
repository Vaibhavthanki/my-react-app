import React, { useRef } from "react";

export const ReactUseRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log("check7", inputRef);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
