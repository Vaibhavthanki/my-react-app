import React, { useContext } from "react";
import { Child2 } from "./Child2";
import languageContext from "./Language/LanguageContex";

export const Child1 = () => {
  const { setData } = useContext(languageContext);
  return (
    <>
      <select onChange={(e) => setData(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <Child2 />
    </>
  );
};
