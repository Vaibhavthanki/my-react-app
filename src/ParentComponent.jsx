import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import { ReadMore } from "./ReadMore";

export const ParentComponent = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    const data = inputValue;
    setData(data);
  };
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="button" value="Submit" onClick={handleSubmit} />
      <ChildComponent data={data} />
      <ReadMore
        data={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
    </>
  );
};
