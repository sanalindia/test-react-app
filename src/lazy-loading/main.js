import { Suspense, lazy, useEffect, useState } from "react";
import { getProducts } from "../products/services";

export default function Main() {
  const LazyProducts = lazy(() => import("../products/products"));
  const [products, setProducts] = useState();

  useEffect(() => {
    if (!products) getProd();
  });
  const getProd = async () => {
    try {
      await getProducts().then((data) => {
        if (data) setProducts(data.products);
      });
    } catch (error) {}
  };
  return (
    <div>
      <Suspense fallback={"loading............."}>
        <LazyProducts
          list={[
            { id: 11, title: "Sanal", description: "nnnnnnnnnnnnnn" },
            ...(products ? products : []),
          ]}
        ></LazyProducts>
      </Suspense>
    </div>
  );
}
