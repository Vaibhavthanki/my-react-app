import { Button, Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDesc = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id, "param id");
  const [productData, setProductData] = useState({});
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          console.log(res.data, "product details");
          setProductData(res.data);
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
        });
    }
  }, [id]);
  return (
    <>
      <Button variant="contained" onClick={() => navigate("/productData")}>
        Back to Products
      </Button>
      <Card className="m-5 p-3">
        <h2>Product Details</h2>
        <p>
          <strong>Title:</strong> {productData.title}
        </p>
        <p>
          <strong>Price:</strong> ${productData.price}
        </p>
        <p>
          <strong>Description:</strong> {productData.description}
        </p>
        <p>
          <strong>Category:</strong> {productData.category}
        </p>
        <img
          src={productData.image}
          alt={productData.title}
          style={{ maxWidth: "200px" }}
        />
      </Card>
    </>
  );
};
