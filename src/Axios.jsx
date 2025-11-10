import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import Counter from "./Counter";
import CounterWithProps from "./CounterWithProps";

export default function Axios() {
  const [data, setData] = useState(null);
  //   const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //   const handleIncrement = () => {
  //     setCounter(counter + 1);
  //   };

  //   const handleDecrement = () => {
  //     setCounter(counter - 1);
  //   };
  return (
    <>
      {data ? (
        <Grid container spacing={2}>
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}

      {/* <Counter /> */}
      {/* <CounterWithProps
        counter={counter}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      /> */}
    </>
  );
}
