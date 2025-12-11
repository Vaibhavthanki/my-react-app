import React from "react";
import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();

  console.log(location, "checklocation from about");
  return <div>about</div>;
};
