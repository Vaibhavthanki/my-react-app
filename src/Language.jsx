import React, { useState } from "react";
import { Child1 } from "./Child1";
import LanguageContext from "./Language/LanguageContex";

export const Language = () => {
  const [data, setData] = useState("en");
  return (
    <LanguageContext.Provider value={{ data, setData }}>
      <Child1 />
    </LanguageContext.Provider>
  );
};
