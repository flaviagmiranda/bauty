import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Products.css";

export default function Products({ basket, setBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      await fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
        .then((response) => response.json()) // <-- wait for Promise to resolve
        .then((products) => setProducts(products))
        .catch((err) => {
          console.log(
            "There must have been an error somewhere in your code",
            err.message
          );
        });
    }
    getProducts();
  }, []);

  return (
    <div className="products">
      {products.map(function (product) {
        if (product.brand === "maybelline") {
          return (
            <Item
              key={product.id}
              product={product}
              basket={basket}
              setBasket={setBasket}
            />
          );
        }
      })}
    </div>
  );
}
