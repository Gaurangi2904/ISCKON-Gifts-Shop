"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>{product.name}</h3>
      ))}
    </div>
  );
}

export default Products;   