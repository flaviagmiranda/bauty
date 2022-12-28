import "./Item.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Item({ product, basket, setBasket }) {

     const { Item, isAuthenticated } = useAuth0();
  async function addToBasket() {
    await setBasket([...basket, product]);
    console.log(basket);
  }


  return (
    <div className="Item">
      <div className="item-image">
        <img src={product.image_link} alt={product.name}></img>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.brand}</p>
        <h3>£{product.price}</h3>
        {/* <p>{product.description}</p> */}
        <button className="view-item-button">View Item</button>
        {isAuthenticated &&(
             <button onClick={addToBasket} className="add-to-basket-button">
          Add To Basket
        </button>
        )}
        
        
      </div>
    </div>
  );
}

