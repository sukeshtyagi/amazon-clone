import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://imagesvs.oneindia.com/webp/img/2017/08/amazon-140817-1-14-1502705286.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="checkout__tittle">
          <h2>Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
