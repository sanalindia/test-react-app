import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { getProducts } from "./services";

const Products = ({ list }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    !list ? getProd() : setProducts(list);
  });
  const getProd = async () => {
    try {
      await getProducts().then((data) => {
        console.log("data ", data);
        if (data) setProducts(data.products);
      });
    } catch (error) {}
  };
  return (
    <div>
      {products
        ? products.map((data, i) => {
            return (
              <div key={i}>
                <div>{data.id}</div>
                <div>{data.title}</div>
                <div>{data.description}</div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Products;
