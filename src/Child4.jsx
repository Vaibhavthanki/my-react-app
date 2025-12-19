import React, { useContext } from "react";
import languageContext from "./Language/LanguageContex";

export const Child4 = () => {
  const { data } = useContext(languageContext);
  console.log("Data in Child4:", data);
  const obj = {
    en: {
      firstName: "First Name",
      lastName: "Last Name",
    },
    hi: {
      firstName: "पहला नाम",
      lastName: "उपनाम",
    },
  };
  return (
    <div>
      <h3>{obj[data].firstName}</h3>{" "}
      <input type="text" placeholder={obj[data].firstName} /> <br />
      <h3>{obj[data].lastName}</h3>{" "}
      <input type="text" placeholder={obj[data].lastName} />
    </div>
  );
};
