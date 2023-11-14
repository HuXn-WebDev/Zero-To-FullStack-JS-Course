"use client";
import { useEffect, useState } from "react";

const Data = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {product?.map((p) => (
        <>
          <h1>{p.id}</h1>
          <li key={p.id}>{p.title}</li>
        </>
      ))}
    </ul>
  );
};

export default Data;
