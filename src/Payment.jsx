import React from "react";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { NavLink } from "react-router-dom";

function Payment() {
  const [{ basket }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<NavLink to="/checkout">{basket?.length} items</NavLink>)
        </h1>
        <div className="payment__section">
          <div className="payment__tittle">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>Guest Name</p>
            <p>Address</p>
            <p>Pincode</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__tittle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__tittle">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/*payment processing code here*/}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
