import React, { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data or perform other side effects here
    // https://jsonplaceholder.typicode.com/posts --> for pagination tasks use this url
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      {products?.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
