import React from "react";
import { data } from "./data";

export default function ProductList() {
  console.log(data, "check5");
  return data.map((value) => (
    <h3 className="nav-link active">{value.title}</h3>
  ));
}
