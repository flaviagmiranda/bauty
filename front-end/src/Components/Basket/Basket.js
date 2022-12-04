import React from "react";
import "./Basket.css";
import LoginButton from "../Login/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Basket({ basket, setBasket }) {
  const { isAuthenticated } = useAuth0();

  async function deleteItemFromBasket({ product }) {
    const index = basket.indexOf(product);
    if (index > -1) {
      const copyBasket = { ...basket };
      delete copyBasket[index];
      setBasket(copyBasket);
    }

    console.log(basket);
  }

  if (isAuthenticated) {
    return (
      <div className="basket">
        <h3>My Basket</h3>
        {basket.map(function (product) {
          return (
            <div>
              <p>{product.name}</p>
              <p>{product.currency}{product.price}</p>
              <button onClick={deleteItemFromBasket}>🗑️</button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="basket">
        <h3>My Basket</h3>
        <p>Please log in to see your items</p>
        <LoginButton />
      </div>
    );
  }
}
