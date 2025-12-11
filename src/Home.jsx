import React from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();

  console.log(location, "checklocation from home");
  return <div>home</div>;
};
